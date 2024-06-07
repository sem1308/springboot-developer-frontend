<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { getArticle, updateArticle, createArticle } from '@/apis/article-api';

const route = useRoute()
const router = useRouter();

const articleId = ref(route.params.id)

const article = ref({
    id: null,
    title: "",
    content: ""
    // id: articleId.value,
    // title: `title${articleId.value}`,
    // content: `content${articleId.value}`
})

onMounted(async () => {
    if (articleId.value) {
        getArticle(
            articleId.value,
            ({data})=>{
                article.value = data;
                console.log(article.value);
            }
        )
    }
})

const onModifyArticle = async (article) => {
    updateArticle(
        article,
        ()=>router.push({ name: "detail", params: { id: article.id } }),
        (error)=>alert(error)               
    );
}

const onCreateArticle = async (article) => {
    createArticle(
        article,
        ({data})=> {
            const createdArticle = data;
            router.push({ name: "detail", params: { id: createdArticle.id } });
        },
        (error)=>alert(error)               
    );
}
</script>

<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-8">
                <article>
                    <input type="hidden" id="article-id" v-model="article.id">
                    <header class="mb-4">
                        <input type="text" class="form-control" placeholder="제목" v-model="article.title">
                    </header>
                    <section class="mb-5">
                        <textarea class="form-control h-25" rows="10" placeholder="내용"
                            v-model="article.content"></textarea>
                    </section>
                    <button v-if="article.id != null" @click="onModifyArticle(article)" type="button"
                        class="btn btn-primary btn-sm">수정</button>
                    <button v-else @click="onCreateArticle(article)" type="button"
                        class="btn btn-primary btn-sm">등록</button>
                </article>
            </div>
        </div>
    </div>
</template>

<style></style>
