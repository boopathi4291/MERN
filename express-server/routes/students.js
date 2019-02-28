const express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/students");// this is the database connection for the local mongo db. we can connect with other database

 var Schema =mongoose.Schema({
     name: String,
     email:String,
     mobile:String
 });
 
 var Students = mongoose.model("records",Schema);

router.get('/records',(req,res)=>{
    Students.find(function(err,response){
        res.json(response);
});
});
router.get('/ins/:name/:email/:mobile',(req,res)=>{
   let record = {name:req.params.name, email:req.params.email,mobile:req.params.mobile};
   let student = new Students(record);
   student.save((err)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send("success")
        }
   });
});

router.get('/ups/:name/:email/:mobile', function (req, res) {
    var aName = req.params.name;
    var aEmail = req.params.email;
    var aMobile = req.params.mobile;
    Students.findOneAndUpdate({ email: aEmail }, { name: aName, mobile: aMobile }, function (err) {
        if (err) { } else {
            res.send('record updated');
        }
    });
});

router.get('/del/:email', function (req, res) {
    var aEmail = req.params.email;
    Students.findOneAndRemove({ email: aEmail }, function (err) {
        if (err) { } else {
            res.send('Record deleted');
        }
    });
});

module.exports = router;