'use strict'
module.exports = function(app){
    //contactListController --> บอกว่าดึงข้อมูลจาก db. เเล้วจะเเสดงผลรูปเเบบไหน เเละ response รูปไหน
    var contactList = require('../controllers/contactListController')

    //กำหนดเส้นทางที่จะมี โดยสามารถใช้ shared path ร่วมกันเเละเเยกใช้คนละ method ได้
    //เมือเรียก path '/users' ด้วย method get จะไปเรียกคำสั่ง userList.listAllUsers ใน controller มาทำงาน
    app.route('/contacts')
        .get(contactList.listAllContact) //ใช้เมื่อต้องการ read all user
        .post(contactList.createAContact) //ใช้เมื่อต้องการ insert user 1 คน

    app.route('/contacts/:id')
        .get(contactList.readAContact)      //อ่าน user ID นั้น
        .delete(contactList.deleteAContact) //del user ID นั้น
        .post(contactList.updateAContact)
}