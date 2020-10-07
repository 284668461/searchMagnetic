import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import detail from '../views/Detail.vue'

Vue.use(VueRouter);

const routes = [
    {path: '/',redirect: "/home"},
    {path: '/home',component: Home},
    {path: '/search',component: Search},
    {path: '/detail',component: detail},
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
