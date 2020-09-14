
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  secure: "false",

  auth: {
    user: 'testproject2020coronavirus@gmail.com',
    pass: 'project1234@'
  },
  tls : {
    rejectUnauthorized : false,
  }
});


module.exports = {
  verify: async function (email, token) {

    const url = `http://localhost:5000/gatescholar/valid/${token}`;
console.log("hello in side link");
    let info = await transporter.sendMail({

      from: '"GateScholar 👻"',
      to: email,
      subject: "verify yourself",
      text: `Hello world? and go to the given link <a href=${url}></a>`,
      html: `to verify click on the given link ${url}`
    });
    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  },
  forgotPassword: async function (email, token) {

    const url = `http://localhost:5000/gatescholar/resetpassword/${token}`;
    let info = await transporter.sendMail({

      from: '"GateScholar👻" <foo@example>',
      to: email,
      subject: "Password reset",
       text: `Hello world? and go to the given link <a href=${url}></a>`,
      html: `To reset the password go to the given link ${url}`,
    });
    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }


}
