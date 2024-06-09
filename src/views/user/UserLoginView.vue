<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { login } from '@/apis/user-api';

const router = useRouter();

const user = ref({
    email: "",
    password: ""
})

// 일반 로그인
const onLogin = () => {
    login(
        user.value,
        ({ data }) => {
            localStorage.setItem("access_token", data.accessToken)
            console.log("oauth success")
            router.push({ name: 'list' })
        },
        (error) => alert(error)
    );
}

// OAuth2 로그인
const onLoginOAuth = () => {
    window.location.href = `http://localhost:8080/oauth2/authorization/google`;
}

</script>

<template>
    <div class="gradient-custom">
        <section class="d-flex vh-100">
            <div class="container-fluid row justify-content-center align-content-center">
                <div class="card bg-dark" style="border-radius: 1rem;">
                    <div class="card-body p-5 text-center">
                        <h2 class="text-white">LOGIN</h2>
                        <p class="text-white-50 mt-2 mb-5">서비스를 사용하려면 로그인을 해주세요!</p>

                        <div class="mb-2">
                            <form @submit.prevent="onLogin">
                                <div class="mb-3">
                                    <label class="form-label text-white">Email address</label>
                                    <input type="email" class="form-control" v-model="user.email">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-white">Password</label>
                                    <input type="password" class="form-control" v-model="user.password">
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>

                            <button type="button" class="btn btn-secondary mt-3"
                                onclick="location.href='/users/signup'">회원가입</button>
                        </div>
                        <hr>
                        <div class="mb-2">
                            <button @click="onLoginOAuth">
                                <img src="/src/img/google.png">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.gradient-custom {
    background: linear-gradient(to right, rgba(254, 238, 229, 1), rgba(229, 193, 197, 1))
}
</style>