<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router';
import { searchParam } from '@/js/token'

const router = useRouter();

onMounted(()=>{
    // token 받아오기 (로그인 확인)
    const token = searchParam('token') 
    console.log("?????")
    if (token) {
        localStorage.setItem("access_token", token);
        console.log("oauth success")
        router.push({name:'list'})
    }else{
        console.log("oauth failed")
        router.push({name:'login'})
    }
})

</script>