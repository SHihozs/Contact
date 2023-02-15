'use strict'
var mongoose = require('mongoose')
User      = mongoose.model('users') //รับค่าจาก db มาเก็บใน User

exports.userLogin = function(req, res){

    var query = {
        username: req.params.username,
        password: req.params.password
    }
    
    //findOne return JSON
    User.findOne(query, null, function(err, user){ 
        if(err) throw err

        console.log(user)
        res.json(user)
    })
}