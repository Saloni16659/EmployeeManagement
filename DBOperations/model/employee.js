const mongoose = require('mongoose');

var Employee = mongoose.model('Employee',{
    name : {type : String},
    age : {type : Number},
    salary : {type : Number},
    designation : {type : String}
})

module.exports= Employee