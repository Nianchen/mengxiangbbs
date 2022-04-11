import { createRouter } from 'vue-router'
import { createWebHashHistory } from 'vue-router'
import { userTextStore } from '../store'
const routes = [
    {
        path: '/',
        redirect: 'index'
    },
    {
        path: '/index', 
        component: () => import("../views/index.vue"),
    },
    {
        path: '/book',
        component: () => import("../components/book.vue")
    },
    {
        path: "/login",
        component: () => import("../views/Login.vue"),
        beforeEnter: (to,from,next) => {
            const stroe = userTextStore()
            console.log(stroe.token);
            if(stroe.token != '')
            {
                next('/index');
            }
            else
            {
                next();
            }
        },
    }
]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router