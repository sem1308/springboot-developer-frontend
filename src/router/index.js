import { createRouter, createWebHistory } from 'vue-router'
import ArticleListView from '../views/article/ArticleListView.vue'
import ArticleDetailView from '../views/article/ArticleDetailView.vue'
import ArticleCreateView from '@/views/article/ArticleCreateView.vue'
import UserSignUpView from '@/views/user/UserSignUpView.vue'
import UserLoginView from '@/views/user/UserLoginView.vue'
import AuthHandler from '@/components/AuthHandler.vue'

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
        {
            path: '/users/signup',
            name: 'signup',
            component: UserSignUpView
        },
        {
            path: '/users/login',
            name: 'login',
            component: UserLoginView
        },
        {
            path: '/auth/handle',
            name: 'auth-handle',
            component: AuthHandler
        },
    ]
})

export default router
