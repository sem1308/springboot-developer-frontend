<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { getArticle, deleteArticle } from '@/apis/article-api';
import { dateTimeFormat } from '@/utils/date';

const route = useRoute()
const router = useRouter();

const articleId = ref(route.params.id)

const article = ref({
    // id: articleId.value,
    // title: `title${articleId.value}`,
    // content: `content${articleId.value}`
})

onMounted(async () => {
    article.value = await getArticle(articleId.value);
    article.value.createdDateTime = dateTimeFormat(article.value.createdDateTime);
    article.value.updatedDateTime = dateTimeFormat(article.value.updatedDateTime);
    console.log(article.value);
})

const onDeleteArticle = async (id) => {
    const res = await deleteArticle(id);
    if (res.status == 200) {
        alert('삭제가 완료되었습니다.');
        router.push({ name: "list" });
    } else {
        alert('삭제가 완료되지 않았습니다.');
        router.push({ name: "detail", params: { id } });
    }
}

const onMoveModifyArticle = async (id) => {
    router.push({ name: "modify", params: { id } });
}

</script>

<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-8">
                <article>
                    <header class="mb-4">
                        <h1 class="fw-bolder mb-1">
                            {{ article.title }}
                        </h1>
                        <div class="text-muted fst-italic mb-2">
                            Posted on {{ article.createdDateTime }} / Last Updated On {{ article.updatedDateTime }}
                        </div>
                    </header>
                    <section class="mb-5">
                        <p class="fs-5 mb-4">
                            {{ article.content }}
                        </p>
                    </section>
                    <button @click="onMoveModifyArticle(article.id)" type="button"
                        class="btn btn-primary btn-sm">수정</button>
                    <button @click="onDeleteArticle(article.id)" type="button"
                        class="btn btn-secondary btn-sm">삭제</button>
                </article>
            </div>
        </div>
    </div>
</template>

<style></style>
