<template>
    <div>
        <div class="special-offer-container">
            <div class="img-container">
                <img alt="Vue logo" src="@/assets/images/bg-offer.png" />


                <div class="img-content">
                    <span>
                        Special Offer
                    </span>
                    <h3>
                        Subscribe <br>
                        And <span class="color">Get 10% Off</span>
                    </h3>
                    <div class="form-input">
                        <input type="text" style="border-radius: 0;" class="form-control" placeholder="Username"
                            aria-label="Username" aria-describedby="basic-addon1">

                        <button class="subscribe-btn">Subscribe</button>
                    </div>
                </div>
            </div>
            <div class="img-front">
                <img alt="Vue logo" class="left-img" src="@/assets/images/Daco_6068770 1.png" />
                <img alt="Vue logo" class="right-img"
                    src="@/assets/images/952fb41d41066f713537b69be13d9008-5a5cd356d41424 1.png" />
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style>
.img-front {
    position: relative;
    height: 584px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -584px;
    /* Đặt cùng vị trí với ảnh nền */
}

.img-front .left-img {
    position: absolute;
    left: 160px;
    transform: translateY(-50%);
    top: 57%;
    max-height: 584px;
}

.img-front .right-img {
    position: absolute;
    right: 217px;
    transform: translateY(-50%);
    top: 55%;
    max-height: 584px;
}

.subscribe-btn {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #121212;
    border: none;
    cursor: pointer;
    width: 100%;
    color: #ffffff;
}

.subscribe-btn:hover {
    background-color: #444040;
}

.form-input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.special-offer-container {
    background: linear-gradient(180deg, #F3F2F2 0%, #DCDBDB 100%);
    height: 580px;
    max-height: 580px;
    max-width: calc(1440px - 170px);
    width: 100%;
    margin: auto;
    margin-bottom: 100px;
}

.img-container img {
    width: 100%;
    object-fit: cover;
}

.special-offer-container .img-container .img-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    border-radius: 4px;
    /* padding: 16px 32px; */
    padding: 80px 100px;
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
    font-size: 26px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: 0.06em;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

    text-transform: uppercase;
    margin-top: 5px;
}

.img-content h3 .color {
    font-size: 26px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: 0.06em;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: red;
    text-transform: uppercase;
    margin-top: 5px;
}
</style>
