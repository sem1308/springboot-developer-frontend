<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { createUser } from '@/apis/user-api';

const router = useRouter();

const user = ref({
    email: "",
    password: ""
})

const onCreateUser = async () => {
    createUser(
        user.value,
        ()=>{
            router.push({ name: "login" });
        }
    );
}

</script>

<template>
    <div class="gradient-custom">
        <section class="d-flex vh-100">
            <div class="container-fluid row justify-content-center align-content-center">
                <div class="card bg-dark" style="border-radius: 1rem;">
                    <div class="card-body p-5 text-center">
                        <h2 class="text-white">SIGN UP</h2>
                        <p class="text-white-50 mt-2 mb-5">서비스 사용을 위한 회원 가입</p>

                        <div class="mb-2">
                            <form @submit.prevent="onCreateUser()">
                                <!-- 토큰을 추가하여 CSRF 공격 방지 -->
                                <input type="hidden" />
                                <div class="mb-3">
                                    <label class="form-label text-white">Email address</label>
                                    <input type="email" class="form-control" v-model="user.email" />
                                    <div class="mb-3">
                                        <label class="form-label text-white">Password</label>
                                        <input type="password" class="form-control" v-model="user.password">
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                            </form>
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