import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import BookView from '../views/BookView.vue'
import BorrowView from '../views/BorrowView.vue'
import StudentView from '../views/StudentView.vue'
import { createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
      {
        path:'/',
        name:'index',
        component:IndexView
      },{
        path:'/student',
        name:'student',
        component:StudentView

      },{
        path:'/books',
        name:'books',
        component:BookView
      },{
        path:'/borrow',
        name:'borrow',
        component:BorrowView
      }
  ]
})

export default router
