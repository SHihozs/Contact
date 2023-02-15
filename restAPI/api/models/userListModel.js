'use strict'
var mongoose = require('mongoose')
var Schema   = mongoose.Schema

var UserSchema = new Schema({
    //กำหนดชื่อ Attributes เเละ type ให้ตรงกับใน database เพื่อให้ sync.กันได้
    username: {
        type: String,
        Required: 'Please enter'
    },
    password: {
        type: String,
        Required: 'Please enter'
    }
})

//database กับ schema จะ match กันเเละ export ออกไป
module.exports = mongoose.model('users', UserSchema) 