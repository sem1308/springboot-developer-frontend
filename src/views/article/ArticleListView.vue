<script setup>
import { ref, onMounted } from 'vue'
import { getArticleList } from '@/apis/article-api';
// let id = 0;

const articles = ref([
    // {
    //     id: ++id,
    //     title: `title${id}`,
    //     content: `content${id}`
    // },
    // {
    //     id: ++id,
    //     title: `title${id}`,
    //     content: `content${id}`
    // },
    // {
    //     id: ++id,
    //     title: `title${id}`,
    //     content: `content${id}`
    // },
    // {
    //     id: ++id,
    //     title: `title${id}`,
    //     content: `content${id}`
    // },
    // {
    //     id: ++id,
    //     title: `title${id}`,
    //     content: `content${id}`
    // },
    // {
    //     id: ++id,
    //     title: `title${id}`,
    //     content: `content${id}`
    // },
])

onMounted(async () => {
    getArticleList(
        ({data})=>{
            articles.value = data 
            console.log(articles.value);
        },
        (error) => alert(error)
    );
})

</script>

<template>
    <div class="container">
        <div class="row-6" v-for="article in articles" :key="article.id">
            <div class="card">
                <div class="card-header">
                    {{ article.id }}
                </div>
                <div class="card-body">
                    <h5 class="card-title">
                        {{ article.title }}
                    </h5>
                    <p class="card-text">
                        {{ article.content }}
                    </p>
                    <a :href="`/articles/${article.id}`" class="btn btn-primary">보러 가기</a>
                </div>
            </div>
            <br>
        </div>
    </div>
</template>

<style></style>
