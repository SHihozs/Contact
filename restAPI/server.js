//npm install express cors body-parser mongoose
//http://localhost:5000/contacts


//Vue : Frontend
//npm init vite-app vite_crud  
//cd vite_crud
//npm install (or `yarn`)
//npm install axios bootstrap jquery popper.js
//npm install vue-router@latest
//npm run dev

var express = require('express')
app         = express()
port        = process.env.PORT || 5000
mongoose    = require('mongoose')
Contact     = require('./api/models/contactListModel')
User        = require('./api/models/userListModel')
bodyParser  = require('body-parser')

//User:xxx, PW:yyy

const MONGODB_URL = 'mongodb+srv://xxx:yyy@contactlist.obkkx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.Promise = global.Promise
mongoose.connect(MONGODB_URL || 'mongodb://localhost/ContactList', function(error){
    if(error) throw error
    console.log('Successfully connected');
})

const cors = require('cors');

//cross side origin --> เพื่อเป็นการป้องกันไม่ให้ถูกบล็อกผ่านเว็บ browser
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

//path ต่างๆ ที่จะใช้ใน backend
var contactsRoute  = require('./api/routes/contactListRoutes')
var usersRoute     = require('./api/routes/userListRoutes')

contactsRoute(app)
usersRoute(app)

app.listen(port)

//เพื่อให้รู้ว่า backend มันรันเเล้วนะ
console.log('Contact List API started on : '+ port)
