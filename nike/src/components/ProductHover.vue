<template>
    <div>
        <div class="product-card">
            <div class="product-image">
                <img src="image.png" alt="Women's tracksuit Q109">
            </div>
            <div class="product-info">
                <p class="product-title">Women's tracksuit Q109</p>
                <p class="product-price">$30.00</p>
                <div class="ratings">&#9733;&#9733;&#9733;&#9733;&#9734;</div>
                <div class="sizes">
                    <span>XS</span> <span>S</span> <span>M</span> <span>L</span>
                </div>
                <div class="add-to-cart">ADD TO CART</div>
                <div class="icons">
                    <span>&#9825;</span>
                    <span>&#9878;</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.product-card {
    width: 250px;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #ddd;
    background: #fff;
}

.product-image img {
    width: 100%;
    display: block;
}

.product-info {
    padding: 10px;
}

.product-title {
    font-size: 14px;
    color: #555;
}

.product-price {
    font-size: 18px;
    font-weight: bold;
    margin: 5px 0;
}

.ratings {
    color: gold;
}

.sizes {
    display: flex;
    gap: 5px;
    margin: 10px 0;
}

.sizes span {
    border: 1px solid #000;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 12px;
}

.add-to-cart {
    width: 100%;
    padding: 10px;
    background: black;
    color: white;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
}

.icons {
    display: flex;
    justify-content: space-between;
    padding: 10px;
}
</style>