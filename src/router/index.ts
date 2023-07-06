import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Home from "../views/Home.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
        children: [
            {
                path: "gluttony",
                name: "Gluttony",
                component: () =>
                    import('../components/gluttony/index.vue')
            },
            {
                path: "posts",
                name: "Posts",
                component: () =>
                    import('../components/posts/index.vue')
            },
            {
                path: "favimg",
                name: "Favimg",
                component: () =>
                    import('../components/favimage/index.vue')
            }
        ]
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import('../views/About.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;