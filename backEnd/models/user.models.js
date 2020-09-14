const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const saltRounds = 10;

const UserSchema = new Schema({


    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: false
    },
    profileImage: String,
    verifiedUser: Boolean,
    userActive: Boolean,
    userDeleted: Boolean,
    userCreateDate: {
        type: Date,
        default: Date.now()
    },
    examsGiven: [{ examId: String }]

});



UserSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});
module.exports = mongoose.model('User', UserSchema);

