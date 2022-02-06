import { createWebHistory, createRouter } from "vue-router"
import { RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        alias: "/astroCalendars",
        name:"astroCalendars",
        component: () => import("./components/AstroCalendars.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router