'use strict'
var mongoose = require('mongoose')
Contact      = mongoose.model('contacts') //รับค่าจาก db มาเก็บใน Contact

exports.listAllContact = function(req, res){
    var query = { sort: { firstname: 1 } }  //sort ตามชื่อเเรก
    Contact.find({}, null, query, function(err, contact){ //contact --> ที่ได้มาจาก db
        if(err) throw err
        console.log(contact)
        res.json(contact) //return json format ออกมาเลย
    })
}

exports.createAContact = function(req, res){
    var newContact = new Contact(req.body)
    console.log(req.body)
    newContact.save(function(err, contact){
        if(err) throw err
        res.json(contact)
    })
}

//findById --> มีใน mongoose
exports.readAContact = function(req, res){
    Contact.findById(req.params.id, function(err, contact){
        if(err) throw err
        res.json(contact)
    })
}

//findByIdAndRemove --> หา ID นั้นเเล้วลบ
exports.deleteAContact = function(req, res){
    Contact.findByIdAndRemove(req.params.id, function(err, contact){
        if(err) throw err
        const response = {
            message: "This contact has been deleted",
            firstname: contact.firstname
        }
        res.json(response)
    })
}

exports.updateAContact = function(req, res){
    var newContact = {}
    newContact     = req.body  //จากตรง postman (รับค่าตัวใหม่มาเเล้วเขียนทับเก็บใน newContact)
    console.log(newContact)
    
    Contact.findByIdAndUpdate(req.params.id, newContact, {new: true}, function(err, contact){ 
        //{new: true} --> อัพเดตด้วยค่าใหม่ทั้งหมด
        if(err) throw err
        console.log(contact)
        res.json(contact)
    })
}