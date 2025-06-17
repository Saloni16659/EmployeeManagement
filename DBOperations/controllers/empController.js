const express = require('express');
var router = express.Router();

var Employee = require('../model/employee');
const isValidObjectId = require('mongoose').isValidObjectId;

router.get('/', (req, res) => {
    Employee.find().then((docs)=>{
        res.send(docs);
    })
})

router.post('/', (req, res) => {
    var emp = new Employee({
        name: req.body.name,
        age: req.body.age,
        salary: req.body.salary,
        designation: req.body.designation
    });

    emp.save().then((doc) => {
        res.send(doc);
    })

});

router.get('/:id', (req, res) => {
    if(!isValidObjectId(req.params.id)) {
        res.send("Employee ID is not valid");
    }else{
        Employee.findById(req.params.id).then((doc) => {
            res.send(doc);
        })
    }
})

router.put('/:id', (req, res) => {
    if(!isValidObjectId(req.params.id)) {
        res.send("Employee ID is not valid");
    }else{
        Employee.findByIdAndUpdate(req.params.id, req.body).then((doc) => {
            res.json({message : "Updated Successfully"});
        })
    }
})

router.delete('/:id', (req, res) => {
    if(!isValidObjectId(req.params.id)) {
        res.send("Employee ID is not valid");
    }else{
        Employee.findByIdAndDelete(req.params.id).then((doc) => {
            res.json({ message: "Deleted Successfully" });
        })
    }
})

module.exports = router