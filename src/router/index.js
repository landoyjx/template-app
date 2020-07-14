import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('@/views/index'),
        meta: {
            title: 'Home'
        }
    }
]

const router = new VueRouter({
    mode: 'hash',
    routes
})

export default router
