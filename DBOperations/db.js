const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmpDB')
    .then(()=>{
        console.log('Connected to MongoDB');
    })

    module.exports = mongoose;