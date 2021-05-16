import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Single from '../views/Single.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
    },
    {
        path: '/todo/:id',
        name: 'Single',
        component: Single
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
