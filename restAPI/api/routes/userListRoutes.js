'use strict'
module.exports = function(app){
    //contactListController --> บอกว่าดึงข้อมูลจาก db. เเล้วจะเเสดงผลรูปเเบบไหน เเละ response รูปไหน
    var userList = require('../controllers/userListController')

    //กำหนดเส้นทางที่จะมี โดยสามารถใช้ shared path ร่วมกันเเละเเยกใช้คนละ method ได้
    //เมือเรียก path '/users' ด้วย method get จะไปเรียกคำสั่ง userList.listAllUsers ใน controller มาทำงาน
    

    app.route('/users/:username/:password')
        .get(userList.userLogin) 
}