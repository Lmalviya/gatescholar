const mongoose = require('mongoose');
const mongodb = 'mongodb://localhost/gatescholarlakhan';
mongoose.connect(mongodb, { useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;

