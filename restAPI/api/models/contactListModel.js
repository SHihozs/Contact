'use strict'
var mongoose = require('mongoose')
var Schema   = mongoose.Schema

var ContactSchema = new Schema({
    //กำหนดชื่อ Attributes เเละ type ให้ตรงกับใน database เพื่อให้ sync.กันได้
    cid: {
        type: String,
        Required: 'Please enter'
    },
    firstname: {
        type: String,
        Required: 'Please enter'
    },
    lastname: {
        type: String,
        Required: 'Please enter'
    },
    email: {
        type: String,
    },
    mobile: {
        type: String,
        Required: 'Please enter'
    },
    facebook:{
        type: String,
    },
    imageUrl: {
        type: String,
    }
})

//database กับ schema จะ match กันเเละ export ออกไป
module.exports = mongoose.model('contacts', ContactSchema) 