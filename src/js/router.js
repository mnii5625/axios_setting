import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "MainPage",
        component: () => import("@/views/Main")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;