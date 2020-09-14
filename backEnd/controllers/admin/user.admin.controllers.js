const userModel=require('../../models/user.models.js');
const quesModel=require('../../models/ques.models');
module.exports = {
    getAll: (req, res) => {

        userModel.find({}, {}, (error, result) => {
            if (error)
                res.json({
                    status: false,
                    message: 'error.message'
                })
            else
                res.json({
                    status: true,
                    message: "all the users registered",
                    result: result
                })
        })
    },
    deleteAll: (req, res) => {
        userModel.deleteMany({}, (error, info) => {
            console.log(error);
            if (error)
                res.json({ message: error.message });
            else {
                res.json({
                    status: true,
                    message: 'deleted successfully',
                    response: info
                })
            }
        });
    },
   

}