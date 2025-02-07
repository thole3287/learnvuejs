<template>
    <div>
        <div class="container-blog">
            <div class="header-blog">
                <h3>LATEST FROM BLOGS</h3>
                <a href="">SEE ALL</a>
            </div>
            <div class="top">
                <div class="img-container" v-for="(post, index) in posts" :key="index">
                    <img :src="post.image" alt="Vue logo" />
                    <div class="img-content">
                        <span class="content">{{ post.title }}</span>
                        <div class="content hover-area" @mouseover="readMoreIndex = index"
                            @mouseleave="readMoreIndex = null">
                            {{ post.description }}
                            <div v-if="readMoreIndex === index" class="read-more d-flex justify-content-between">
                                <div class="time greys">{{ post.date }}</div>
                                <div class="read-btn text-uppercase">
                                    <a href="">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const readMoreIndex = ref(null); // Lưu trạng thái bài viết đang hover

const posts = ref([
    {
        title: "The Easiest Way to Break",
        description: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was born...",
        date: "April 6, 2032",
        image: new URL("@/assets/images/collection1.png", import.meta.url).href,
    },
    {
        title: "The Easiest Way to Break",
        description: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was born...",
        date: "April 6, 2032",
        image: new URL("@/assets/images/collection2.png", import.meta.url).href,
    },
    {
        title: "The Easiest Way to Break",
        description: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was born...",
        date: "April 6, 2032",
        image: new URL("@/assets/images/collection2.png", import.meta.url).href,
    },
]);
</script>

<style>
.container-blog .img-container .img-content {
    position: absolute;
    /* top: 50%; */
    left: 50%;
    transform: translate(-50%, -43%);
    background-color: #ffffff;
    border-radius: 4px;
    padding: 16px 32px;
    padding: 22px;
    /* text-align: center; */
    max-width: 360px;
    width: 358px;
}

.content {
    text-align: justify;
}

.container-blog {
    max-width: calc(1440px - 170px);
    width: 100%;
    margin: auto;
    margin-bottom: 120px;
}

.header-blog {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.header-blog h3 {
    font-size: 24px;
    font-weight: 600;
    color: #121212;
}

.header-blog a {
    font-size: 14px;
    font-weight: 500;
    line-height: 13px;
    color: #121212;
    /* text-decoration: none; */
}

.container-blog .top {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
</style>