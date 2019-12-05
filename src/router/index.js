import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Free from '../views/Free.vue'
import Search from '../views/Search.vue'
import Course from '../views/Course.vue'
import LightCourse from '../views/LightCourse.vue'
import FreeDetail from '../views/FreeDetail.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/home',
        redirect: '/'
    },
    {
        path: '/free',
        name: 'free',
        component: Free
    },
    {
        path: '/course',
        name: 'course',
        component: Course
    },
    {
        path: '/light-course',
        name: 'light-course',
        component: LightCourse
    },
    {
        path: '/free/detail/:pk',
        name: 'free-detail',
        component: FreeDetail
    },
    {
        path: '/search',
        name: 'search',
        component: Search
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
