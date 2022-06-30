import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Register from '../views/Register'
import Main from '../views/Main'
import Upload from '../views/Upload.vue' 
import AdminMain from '../views/AdminMain.vue'
import TeacherManagement from '../views/TeacherManagement.vue'
import CourseManagement from '../views/CourseManagement.vue'
import ClassManagement from '../views/ClassManagement.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name: 'mainAdmin',
    redirect: '/main/admin'
  },
  {
    path:'/login',
    name:'login',
    component:Login,
  },
  {
    path:'/register',
    name:'register',
    component: Register,
  },
  {
    path:'/main',
    name:'main',
    component: Main,
  },
  {
    path:'/upload',
    name:'upload',
    component:Upload,
  },
  {
    path:'/main/admin',
    name:'adminMain',
    component:AdminMain,
  },
  {
    path:'/teacherManagement',
    name:'teacherManagement',
    component:TeacherManagement,
  },
  {
    path:'/courseManagement',
    name:'courseManagement',
    component:CourseManagement,
  },
  {
    path:'/classManagement',
    name:'classManagement',
    component:ClassManagement,
  }
]

const router = new VueRouter({
  routes
})

export default router
