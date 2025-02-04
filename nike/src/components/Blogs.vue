<template>
    <div>
        <div class="container-blog">
            <div class="header-blog">
                <h3>LATEST FROM BLOGS</h3>
                <a href="">SEE ALL</a>
            </div>
            <div class="top">
                <div class="img-container">
                    <img alt="Vue logo" src="@/assets/images/collection1.png" />
                    <div class="img-content">
                        <span class="content">
                            The Easiest Way to Break
                        </span>
                        <div class="content">
                            But I must explain to you how all this mistaken idea of denouncing pleas and praising pain
                            was bor
                        </div>
                    </div>
                </div>
                <div class="img-container">
                    <img alt="Vue logo" src="@/assets/images/collection2.png" />
                    <div class="img-content">
                        <span class="content">
                            The Easiest Way to Break
                        </span>
                        <div class="content">
                            But I must explain to you how all this mistaken idea of denouncing pleas and praising pain
                            was bor
                        </div>
                    </div>
                </div>
                <div class="img-container">
                    <img alt="Vue logo" src="@/assets/images/collection2.png" />
                    <div class="img-content">
                        <span class="content">
                            The Easiest Way to Break
                        </span>
                        <div class="content">
                            But I must explain to you how all this mistaken idea of denouncing pleas and praising pain
                            was bor
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

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