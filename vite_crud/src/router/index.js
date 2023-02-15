import { createRouter, createWebHistory } from 'vue-router'

//หน้าหลักๆ จะใส่ไว้ใน views foler
import LoginPage       from '../views/LoginPage.vue'
import NewContactPage  from '../views/NewContactPage.vue'
import EditContactPage from '../views/EditContactPage.vue'
import ContactListPage from '../views/ContactListPage.vue'

//vue proj. หน้าที่เราเห็นมันคือหน้าเดียวคือ index.html
//เเต่ view-router มันทำหน้าที่ map ตัว path กับ component ให้
//เช่น พิมพ์ / ไปหน้านี้เเล้วจะไปโหลด component อะไร
//เเต่ component เหล่านั้นสุดท้ายก็จะมาโหลดทับที่ index.html อยู่ดี
//ดังนั้นหน้าทุกหน้าที่เราเห็นมันคือ index.html เเต่ไส้ในมันปป.ไปตามที่เรากำหนดใน component

const routes = [
    {
        path: '/',
        redirect: '/loginpage'
    },
    {
        path: '/:catchAll(.*)', //อะไรที่ไม่ได้กำหนดไว้ใน path เรา
        redirect: '/loginpage'
    },
    {
        path: '/contactlistpage',
        name: 'ContactListPage',
        component: ContactListPage
    },
    {
        path: '/loginpage',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/newcontactpage',
        name: 'NewContactPage',
        component: NewContactPage
    },
    {
        path: '/editcontactpage',
        name: 'EditContactPage',
        component: EditContactPage
    }

]

//include ไปใน router
const router = createRouter({
    history: createWebHistory(),
    routes
})


//export ให้ main.js ดึงไปใช้ได้
export default router