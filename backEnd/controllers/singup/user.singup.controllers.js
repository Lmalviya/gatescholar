const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const mailer = require('../../services/mail.services.js');
const userModel = require('../../models/user.models.js');

const saltRounds = 10;
const user = {

    signup: function (req, res) {
        const email=req.body.email.toLowerCase();
        userModel.findOne({ email: email })

            .then((result) => {

                if (!result) {
                    console.log('testing function 3', result);
                    userModel.create({
                        name: req.body.fullName,
                        email: email,
                        password: req.body.password,
                        profileImage: null,
                        verifiedUser: false,

                    })
                        .then((result) => {

                            const token = jwt.sign({ id: email }, req.app.get('secretKey'), { expiresIn: '1h' });
                            mailer.verify(result.email, token);
                            res.json({
                                status: true,
                                message: 'user created successfully',
                                result: result.email
                            });
                           


                        })
                        .catch((error) => {

                            res.json(error.message);
                        });

                }

                else {
                    console.log('testing function 6');
                    res.json({
                        status: true,
                        message: 'user already exist'
                    });
                }
            })
            .catch((error) => {
                res.json(error);
            });


    },
    verify: function (req, res) {
        console.log("hello 1");
        jwt.verify(req.params.token, req.app.get('secretKey'), function (error, emailvrfy) {
            if (error)
                res.json({
                    status: false,
                    message: 'error in verification email '
                });
            else {
                userModel.findOne({ email: emailvrfy.id }, (error, result) => {
                    if (error)
                        res.json({
                            status: false,
                            message: 'error in verification of the email '
                        });
                    else {

                        userModel.findOneAndUpdate({ email: result.email }, { verifiedUser: true }, (error, updateduser) => {
                            if (error)
                                res.json({
                                    status: false,
                                    message: 'error in verification of email id'
                                });
                            else
                                // res.json({
                                //     status: true,
                                //     message: 'email id successfully verfied',
                                //     result: updateduser

                                // });
                                res.redirect('http://localhost:3000/login');
                        });
                    };
                });
            };
        })
    },
    login: function (req, res) {
        const email=req.body.email.toLowerCase();
        userModel.findOne({ email: email }, (error, result) => {
            if (error)
                res.json({
                    status: false,
                    message: 'error in login'
                })
            else if (result) {
                if (bcrypt.compareSync(req.body.password, result.password)) {
                    if (result.verifiedUser === true) {
                        const token = jwt.sign({ id: result.email }, req.app.get('secretKey'), { expiresIn: '4h' });
                        res.json({
                            status: true,
                            message: 'login successfully',
                            result: result,
                            token: token
                        })
                    }
                    else {
                        res.json({
                            status: true,
                            message: 'email id not verified',
                            result: result.verifiedUser
                        })
                    }
                }
                else
                    res.json({
                        stauts: true,
                        message: 'inccorect password',
                        result: result,

                    })
            }
            else
                res.json({
                    status: true,
                    message: 'email id not found'
                })
        })
    },
    updatePassword: (req, res) => {

        var email = req.body.email;
        var oldpass = req.body.oldPassword;
        var newpass = req.body.newPassword;
        var pass = bcrypt.hashSync(newpass, saltRounds);

        if (req.body.info === (email)) {
            userModel.findOne({ email: email }, (error, result) => {
                if (error)
                    res.json(error);
                else if (result) {
                    if (bcrypt.compareSync(oldpass, result.password)) {
                        userModel.findOneAndUpdate({ email: email }, { password: pass }, (error, result) => {
                            if (error)
                                res.json(error);
                            else
                                res.json("password updated");
                        })
                    }
                    else res.json("invalid password");
                }


            })
        }
        else res.json("invalid emailId");


    },

    updateProfileImage: (req, res) => {
       
        userModel.findOneAndUpdate({ email: req.userData }, { profileImage: req.file }, (err, result) => {
            if (err)
                res.json(err);
            else res.json({
                path: req.file.path
            });
        })
    },

    forgotPassword: (req, res) => {

        var email=req.body.email;
        console.log(email, "from Backend");
        userModel.findOne({email:email},(error,result)=>{
            if(error)
            res.json(error);
            else if(result){
                var token =jwt.sign({id:email},req.app.get('secretKey'),{expiresIn:'4h'})
              mailer.forgotPassword(email,token);
            res.json("password link sent");
          }
            else res.json("inccorect emailId", "backedn");
            console.log(email, "from backend", result);
        })

    },



    resetPassword:(req,res)=>{
        jwt.verify(req.params.token,req.app.get('secretKey'),(err,info)=>{
             if(err)
             res.json(err)
             else{
                  var email=info.id;
                  var pass=bcrypt.hashSync(req.body.password,saltRounds);
                  userModel.findOneAndUpdate({email:email},{password:pass},(err,result)=>{
                     if(err)
                     res.json(err);
                     else 
                     res.json('password reset');
                 })
                 }
         });
         
     }
   
}
module.exports = user;
