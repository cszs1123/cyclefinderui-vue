import { createWebHistory, createRouter } from "vue-router"
import { RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        alias: "/astroEvents",
        name:"astroEvents",
        component: () => import("./components/AstroEventList.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router