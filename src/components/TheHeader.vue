<script setup>
import { logout } from '@/apis/user-api';

const token = localStorage.getItem('access_token')

const onLogout = () => {
    logout(
        () => {
            localStorage.removeItem("access_token")
        },
        (error) => alert(error)
    )
}

</script>

<template>
    <div class="p-5 mb-5 text-center bg-light">
        <h1 class="mb-3">
            <a href="/">My Blog</a>
        </h1>
        <h4 class="mb-3">블로그에 오신 것을 환영합니다.</h4>
    </div>
    <router-link v-show="!token" class="btn btn-primary text-white" :to="{ name: 'login' }">로그인</router-link>
    <button v-show="token" @click="onLogout" class="btn btn-secondary text-white">로그아웃</button>
</template>

<style scoped>
a {
    text-decoration: none;
    color: black;
}

a:hover {
    color: black;
}
</style>