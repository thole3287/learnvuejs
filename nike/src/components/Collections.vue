<template>
    <div>
        <div class="collection-banner">
            <div class="top">
                <div class="img-container">
                    <img alt="Vue logo" src="@/assets/images/collection1.png" />
                    <div class="img-content">
                        <span>
                            New Season
                        </span>
                        <h3>
                            lookbook collection
                        </h3>
                    </div>
                </div>
                <div class="img-container">
                    <img alt="Vue logo" src="@/assets/images/collection2.png" />
                    <div class="img-content">
                        <span>
                            Sale
                        </span>
                        <h3>
                            Get UP to <span class="color">50% off</span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.banner-content {
    display: flex;
    justify-content: space-between;
    padding: 40px 0px;

}

.banner-content>div {
    flex: 0 0 calc(50% - 20px);
    max-width: calc(50% - 20px);
    width: 100%;
}

.img-container {
    position: relative;
    /* height: 100%; */
    width: 100%;
}

.img-container img {
    width: 100%;
    object-fit: cover;
    max-height: 260px;
}

.img-container .img-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    border-radius: 4px;
    padding: 16px 32px;
    text-align: center;
}

.img-content span {
    line-height: 12px;
    font-size: 12px;
    font-weight: 600;
    color: #121212;
    opacity: 0.4;
    text-transform: uppercase;
}

.img-content h3 {
    font-size: 16px;
    font-weight: 600;
    line-height: 17.92px;
    letter-spacing: 0.06em;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    text-transform: uppercase;
    margin-top: 5px;
}

.img-content h3 .color {
    color: red;
    font-size: 16px;
    font-weight: 600;
    line-height: 17.92px;
    letter-spacing: 0.06em;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    text-transform: uppercase;
    margin-top: 5px;
}

.collection-banner {
    max-width: calc(1440px - 170px);
    /* height: calc(100vh - 92px); */
    width: 100%;
    margin: auto;
    margin-bottom: 60px;

}

.collection-banner .top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}

.collection-banner .top>div {
    flex: 0 0 calc(50% - 20px);
    max-width: calc(50% - 20px);
    width: 100%;
}
</style>