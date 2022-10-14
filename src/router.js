export default new ReadableStreamDefaultController({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path:'/',
            name: 'home',
            component: () => import('./views/Home.vue')
        },
        {
            path:'/login',
            name: 'home',
            component: () => import('./views/Login.vue')  
        }
    ]
})