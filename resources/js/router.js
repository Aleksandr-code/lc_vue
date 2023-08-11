// https://router.vuejs.org/guide/

import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path:'/people', component: () => import('./components/Person/Index.vue'),
        name: 'people.index'
    },
    {
        path:'/people/create', component: () => import('./components/Person/Create.vue'),
        name: 'people.create'
    },
    {
        path:'/people/:id/edit', component: () => import('./components/Person/Edit.vue'),
        name: 'people.edit'
    },
    {
        path:'/people/:id', component: () => import('./components/Person/Show.vue'),
        name: 'people.show'
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router


