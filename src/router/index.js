import { createRouter, createWebHistory } from 'vue-router'
import ArticleListView from '../views/ArticleListView.vue'
import ArticleDetailView from '../views/ArticleDetailView.vue'
import ArticleCreateView from '@/views/ArticleCreateView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'list',
            component: ArticleListView
        },
        {
            path: '/articles/:id',
            name: 'detail',
            component: ArticleDetailView
        },
        {
            path: '/articles/create',
            name: 'create',
            component: ArticleCreateView
        },
        {
            path: '/articles/modify/:id',
            name: 'modify',
            component: ArticleCreateView
        },
    ]
})

export default router
