<template>
    <div class="container">
        <!-- WOMEN'S -->
        <div class="category-section">
            <div class="category-header">
                <h3 id="women">WOMEN'S</h3>
                <div class="tabs">
                    <a v-for="(tab, index) in tabs" class="buttons pointer" :key="tab" @click="changeTabWomens(index)"
                        :class="{ active: activeTabWomens === index }">
                        {{ tab }}
                    </a>
                </div>
            </div>
            <!-- Hiển thị sản phẩm của WOMEN'S -->
            <div class="products">
                <div v-for="(product, index) in displayedProductsWomens" :key="index" class="single-product"
                    @mouseenter="onHoverProduct(product)" @mouseleave="isHovering = false">
                    <div class="img-container">
                        <span v-if="product.sale > 0" class="sale-label">SALE {{ product.sale }}%</span>
                        <router-link :to="`/product-detail/${product.id}`" :product-data="product">
                            <img class="img-fluid" :src="`/images/${product.image}`" :alt="product.name" />
                        </router-link>
                    </div>
                    <div class="product-content pt-2">
                        <div class="name">
                            <a href="#">{{ product.name }}</a>
                        </div>
                    </div>
                    <div class="rating">
                        <span class="price">
                            <span v-if="product.sale > 0">{{ calculateDiscountedPrice(product.price, product.sale) }}</span>
                            <span v-if="product.sale > 0" class="original-price">${{ product.price }}</span>
                            <span v-else>${{parseFloat( product.price) }}</span>
                        </span>
                        <div class="stars">
                            <span v-for="star in maxStars" :key="star" class="fa"
                                :class="{ 'fa-star': star <= product.rating, 'fa-star-o': star > product.rating }">
                            </span>
                        </div>
                    </div>
                    <div v-if="isHovering && selectedProduct?.id === product.id" class="hover-options">
                        <!-- Chọn màu -->
                        <div class="colors d-flex pb-2">
                            <img class="select-color-img" style="margin-right: 10px;" v-for="color in product.colors" :key="color.name" :src="`/images/${color.mainImage}`"
                                :style="{ backgroundColor: color.code }"
                                :class="{ selected: selectedColor === color.name }" @click="selectColor(color)"  />
                        </div>

                        <!-- Chọn size -->
                        <div class="sizes pb-2">
                            <button class="size-button" style="margin-right: 10px;" v-for="size in product.sizes" :key="size"
                                :class="{ selected: selectedSize === size }" @click="selectedSize = size">
                                {{ size }}
                            </button>
                        </div>

                        <div class="add-to-cart">
                            <button class="btn-add-to-cart text-uppercase" @click="addToCart">Add to Cart</button>
                            <div class="icons">
                                <svg width="20" height="17" viewBox="0 0 20 17" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.31804 2.31804C1.90017 2.7359 1.5687 3.23198 1.34255 3.77795C1.1164 4.32392 1 4.90909 1 5.50004C1 6.09099 1.1164 6.67616 1.34255 7.22213C1.5687 7.7681 1.90017 8.26418 2.31804 8.68204L10 16.364L17.682 8.68204C18.526 7.83812 19.0001 6.69352 19.0001 5.50004C19.0001 4.30656 18.526 3.16196 17.682 2.31804C16.8381 1.47412 15.6935 1.00001 14.5 1.00001C13.3066 1.00001 12.162 1.47412 11.318 2.31804L10 3.63604L8.68204 2.31804C8.26417 1.90017 7.7681 1.5687 7.22213 1.34255C6.67616 1.1164 6.09099 1 5.50004 1C4.90909 1 4.32392 1.1164 3.77795 1.34255C3.23198 1.5687 2.7359 1.90017 2.31804 2.31804V2.31804Z"
                                        stroke="#121212" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 21H15M3 6L6 7L3 6ZM6 7L3 16C3.8657 16.649 4.91852 16.9999 6.0005 16.9999C7.08248 16.9999 8.1353 16.649 9.001 16L6 7ZM6 7L9 16L6 7ZM6 7L12 5L6 7ZM18 7L21 6L18 7ZM18 7L15 16C15.8657 16.649 16.9185 16.9999 18.0005 16.9999C19.0825 16.9999 20.1353 16.649 21.001 16L18 7ZM18 7L21 16L18 7ZM18 7L12 5L18 7ZM12 3V5V3ZM12 21V5V21ZM12 21H9H12Z"
                                        stroke="#121212" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Nút Load More -->
            <button v-if="hasMoreProductsWomens" @click="loadMoreWomens" class="load-more-button"
                style="margin-bottom: 40px;">
                See All
            </button>
        </div>

        <!-- MEN'S -->
        <div class="category-section">
            <div class="category-header">
                <h3>MEN'S</h3>
                <div class="tabs">
                    <a v-for="(tab, index) in tabs" class="buttons pointer" :key="tab" @click="changeTabMens(index)"
                        :class="{ active: activeTabMens === index }">
                        {{ tab }}
                    </a>
                </div>
            </div>
            <!-- Hiển thị sản phẩm của MEN'S -->
            <div class="products">
                <div v-for="(product, index) in displayedProductsMens" :key="index" class="single-product"
                    @mouseenter="onHoverProduct(product)" @mouseleave="isHovering = false">
                    <div class="img-container">
                        <span v-if="product.sale > 0" class="sale-label">SALE {{ product.sale }}%</span>
                        <router-link :to="`/product-detail/${product.id}`">
                            <img class="img-fluid" :src="`/images/${product.image}`" :alt="product.name" />
                        </router-link>

                    </div>
                    <div class="product-content pt-2">
                        <div>
                            <a href="#">{{ product.name }}</a>
                        </div>
                    </div>
                    <div class="rating">
                        <span class="price">
                            <span v-if="product.sale > 0">{{ calculateDiscountedPrice(product.price, product.sale) }}</span>
                            <span v-if="product.sale > 0" class="original-price">${{ parseFloat(product.price)}}</span>
                            <span v-else>${{ product.price }}</span>
                        </span>
                        <div class="stars">
                            <span v-for="star in maxStars" :key="star" class="fa"
                                :class="{ 'fa-star': star <= product.rating, 'fa-star-o': star > product.rating }">
                            </span>
                        </div>
                    </div>
                    <div v-if="isHovering && selectedProduct?.id === product.id" class="hover-options">
                        <!-- Chọn màu -->
                        <div class="colors d-flex pb-2">
                            <img class="select-color-img" style="margin-right: 10px;" v-for="color in product.colors" :key="color.name" :src="`/images/${color.mainImage}`"
                                :style="{ backgroundColor: color.code }"
                                :class="{ selected: selectedColor === color.name }" @click="selectColor(color)"  />
                        </div>

                        <!-- Chọn size -->
                        <div class="sizes pb-2">
                            <button class="size-button" style="margin-right: 10px;" v-for="size in product.sizes" :key="size"
                                :class="{ selected: selectedSize === size }" @click="selectedSize = size">
                                {{ size }}
                            </button>
                        </div>

                        <div class="add-to-cart">
                            <button class="btn-add-to-cart text-uppercase" @click="addToCart">Add to Cart</button>
                            <div class="icons">
                                <svg width="20" height="17" viewBox="0 0 20 17" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.31804 2.31804C1.90017 2.7359 1.5687 3.23198 1.34255 3.77795C1.1164 4.32392 1 4.90909 1 5.50004C1 6.09099 1.1164 6.67616 1.34255 7.22213C1.5687 7.7681 1.90017 8.26418 2.31804 8.68204L10 16.364L17.682 8.68204C18.526 7.83812 19.0001 6.69352 19.0001 5.50004C19.0001 4.30656 18.526 3.16196 17.682 2.31804C16.8381 1.47412 15.6935 1.00001 14.5 1.00001C13.3066 1.00001 12.162 1.47412 11.318 2.31804L10 3.63604L8.68204 2.31804C8.26417 1.90017 7.7681 1.5687 7.22213 1.34255C6.67616 1.1164 6.09099 1 5.50004 1C4.90909 1 4.32392 1.1164 3.77795 1.34255C3.23198 1.5687 2.7359 1.90017 2.31804 2.31804V2.31804Z"
                                        stroke="#121212" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 21H15M3 6L6 7L3 6ZM6 7L3 16C3.8657 16.649 4.91852 16.9999 6.0005 16.9999C7.08248 16.9999 8.1353 16.649 9.001 16L6 7ZM6 7L9 16L6 7ZM6 7L12 5L6 7ZM18 7L21 6L18 7ZM18 7L15 16C15.8657 16.649 16.9185 16.9999 18.0005 16.9999C19.0825 16.9999 20.1353 16.649 21.001 16L18 7ZM18 7L21 16L18 7ZM18 7L12 5L18 7ZM12 3V5V3ZM12 21V5V21ZM12 21H9H12Z"
                                        stroke="#121212" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Nút See All -->
            <button v-if="hasMoreProductsMens" @click="loadMoreMens" class="load-more-button">
                See All
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
const isHovering = ref(false);
const selectedSize = ref(null);
const selectedColor = ref(null);
const selectedProduct = ref(null);
const selectedImage = ref(null);

const onHoverProduct = (product) => {
    selectedProduct.value = product;
    selectedSize.value = product.sizes[0]; // Mặc định chọn size đầu tiên
    selectedColor.value = product.colors[0].name; // Mặc định chọn màu đầu tiên
    selectedImage.value = product.colors[0].mainImage; // Ảnh theo màu đầu tiên
    isHovering.value = true;
};

const selectColor = (color) => {
    selectedColor.value = color.name;
    selectedImage.value = color.mainImage;
};


const addToCart = () => {
    if (!selectedProduct.value) return;

    cartStore.addToCart({
        id: selectedProduct.value.id,
        name: selectedProduct.value.name,
        color: selectedColor.value,
        size: selectedSize.value,
        price: selectedProduct.value.price,
        image: `/images/${selectedImage.value}`
    });

    isHovering.value = false; // Ẩn popup sau khi thêm vào giỏ hàng
};

// Các tab cho sản phẩm (dành cho WOMEN'S và MEN'S)
const tabs = ref([
    'NEW ARRIVALS',
    'SPECIALS',
    'BEST SELLERS',
    'MOST VIEWED',
    'FEATURED PRODUCTS'
]);

// Biến activeTab cho WOMEN'S và MEN'S, mặc định là tab đầu tiên "NEW ARRIVALS"
const activeTabWomens = ref(0);
const activeTabMens = ref(0);

// Dữ liệu sản phẩm cho WOMEN'S và MEN'S
const products = ref({
    'WOMEN\'S': {
        'NEW ARRIVALS': [
            {
                id: 1,
                name: 'Cluse La Boheme Rose Gold',
                image: 'p1.png',
                description: 'Descriptionss',
                price: 99.00,
                rating: 3,
                sale: 20,
                sizes: ['S', 'M', 'L'],
                colors: [
                    { name: 'Black', code: '#000000', mainImage: 'p1.png', price: 99},
                    { name: 'Red', code: '#FF0000', mainImage: 'p2.png', price: 109 },
                    { name: 'Green', code: '#008000', mainImage: 'p3.png', price: 119 }
                ]
            },
            {
                id: 2,
                name: 'Product 2',
                image: 'p2.png',
                description: 'Descriptionss',
                price: 120.00,
                rating: 4,
                sale: 10,
                sizes: ['S', 'M'],
                colors: [
                    { name: 'Black', code: '#000000', mainImage: 'p4.png', price: 66 },
                    { name: 'Red', code: '#FFFFFF', mainImage: 'p5.png', price: 80 },
                    { name: 'Green', code: '#008000', mainImage: 'p6.png', price: 101 }
                ]
            },
            {
                id: 3,
                name: 'Product 3',
                image: 'p3.png',
                description: 'Descriptionss',
                price: 80.00,
                rating: 2,
                sale: 0,
                sizes: ['M', 'L', 'XL'],
                colors: [
                    { name: 'Black', code: '#000000', mainImage: 'p7.png', price: 111 },
                    { name: 'Red', code: '#FFFFFF', mainImage: 'p5.png', price: 222 },
                    { name: 'Green', code: '#008000', mainImage: 'p2.png', price: 333 }
                ]
            },
            {
                id: 4,
                name: 'Product 4',
                image: 'p4.png',
                description: 'Descriptionss',
                price: 110.00,
                rating: 5,
                sale: 15,
                sizes: ['S', 'L'],
                colors: [
                    { name: 'Black', code: '#000000', mainImage: 'p4.png', price: 66 },
                    { name: 'Red', code: '#FFFFFF', mainImage: 'p5.png', price: 80 },
                    { name: 'Green', code: '#008000', mainImage: 'p6.png', price: 101 }
                ]
            },
        ],
        'SPECIALS': [
            {
                id: 10,
                name: 'Special Women\'s Dress',
                image: 'p1.png',
                description: 'Descriptionss',
                price: 100.00,
                rating: 4,
                sale: 5,
                sizes: ['M', 'L', 'XL'],
                colors: [
                    { name: 'Black', code: '#000000', mainImage: 'p4.png', price: 66 },
                    { name: 'Red', code: '#FFFFFF', mainImage: 'p5.png', price: 80 },
                    { name: 'Green', code: '#008000', mainImage: 'p6.png', price: 101 }
                ]
            },
        ],
        'BEST SELLERS': [
            {
                id: 11,
                name: 'Best Seller 1',
                image: 'p2.png',
                description: 'Descriptionss',
                price: 80.00,
                rating: 3,
                sale: 5,
                sizes: ['S', 'M', 'L'],
                colors: [
                    { name: 'Black', code: '#000000', mainImage: 'p4.png', price: 66 },
                    { name: 'Red', code: '#FFFFFF', mainImage: 'p5.png', price: 80 },
                    { name: 'Green', code: '#008000', mainImage: 'p6.png', price: 101 }
                ]
            },
        ],
    },
    'MEN\'S': {
        'NEW ARRIVALS': [
            {
                id: 17,
                name: 'Men\'s Watch',
                image: 'p1.png',
                description: 'Descriptionss',
                price: 99.00,
                rating: 4,
                sale: 10,
                sizes: ['M', 'L'],
                colors: [
                    { name: 'Black', code: '#000000', mainImage: 'p4.png', price: 66 },
                    { name: 'Red', code: '#FFFFFF', mainImage: 'p5.png', price: 80 },
                    { name: 'Green', code: '#008000', mainImage: 'p6.png', price: 101 }
                ]
            },
            {
                id: 18,
                name: 'Men\'s Shoes',
                image: 'p2.png',
                description: 'Descriptionss',
                price: 120.00,
                rating: 5,
                sale: 15,
                sizes: ['40', '41', '42', '43'],
                colors: [
                    { name: 'Black', code: '#000000', mainImage: 'p4.png', price: 66 },
                    { name: 'Red', code: '#FFFFFF', mainImage: 'p5.png', price: 80 },
                    { name: 'Green', code: '#008000', mainImage: 'p6.png', price: 101 }
                ]
            },
            {
                id: 19,
                name: 'Men\'s Shirt',
                image: 'p3.png',
                description: 'Descriptionss',
                price: 80.00,
                rating: 3,
                sale: 5,
                sizes: ['S', 'M', 'L', 'XL'],
                colors: [
                    { name: 'Black', code: '#000000', mainImage: 'p4.png', price: 66 },
                    { name: 'Red', code: '#FFFFFF', mainImage: 'p5.png', price: 80 },
                    { name: 'Green', code: '#008000', mainImage: 'p6.png', price: 101 }
                ]
            },
            {
                id: 20,
                name: 'Men\'s Jacket',
                image: 'p4.png',
                description: 'Descriptionss',
                price: 110.00,
                rating: 4,
                sale: 10,
                sizes: ['M', 'L'],
                colors: [
                    { name: 'Black', code: '#000000', mainImage: 'p4.png', price: 66 },
                    { name: 'Red', code: '#FFFFFF', mainImage: 'p5.png', price: 80 },
                    { name: 'Green', code: '#008000', mainImage: 'p6.png', price: 101 }
                ]
            },
        ],
        'SPECIALS': [
            {
                id: 26,
                name: 'Special Men\'s Shirt',
                image: 'p1.png',
                description: 'Descriptionss',
                price: 100.00,
                rating: 4,
                sale: 5,
                sizes: ['M', 'L', 'XL'],
                colors: [
                    { name: 'Black', code: '#000000', mainImage: 'p4.png', price: 66 },
                    { name: 'Red', code: '#FFFFFF', mainImage: 'p5.png', price: 80 },
                    { name: 'Green', code: '#008000', mainImage: 'p6.png', price: 101 }
                ]
            },
        ],
        'BEST SELLERS': [
            {
                id: 27,
                name: 'Best Seller 1',
                image: 'p2.png',
                description: 'Descriptionss',
                price: 80.00,
                rating: 3,
                sale: 5,
                sizes: ['S', 'M', 'L'],
                colors: [
                    { name: 'Black', code: '#000000', mainImage: 'p4.png', price: 66 },
                    { name: 'Red', code: '#FFFFFF', mainImage: 'p5.png', price: 80 },
                    { name: 'Green', code: '#008000', mainImage: 'p6.png', price: 101 }
                ]
            },
        ],
    }
});


// Số lượng sản phẩm hiển thị tối đa mỗi lần (8 sản phẩm)
const itemsPerPage = 8;
const maxStars = 5;
const hoveredProduct = ref(null);

// Các biến để theo dõi sản phẩm hiển thị cho WOMEN'S và MEN'S
const displayedProductsWomens = ref([]);
const displayedProductsMens = ref([]);

// Các biến kiểm tra xem có sản phẩm thêm hay không
const hasMoreProductsWomens = ref(true);
const hasMoreProductsMens = ref(true);

// Cập nhật sản phẩm khi thay đổi tab WOMEN'S
watch([activeTabWomens], () => {
    loadProducts('WOMEN\'S');
});

// Cập nhật sản phẩm khi thay đổi tab MEN'S
watch([activeTabMens], () => {
    loadProducts('MEN\'S');
});

// Hàm tính giá sau khi giảm giá
function calculateDiscountedPrice(price, sale) {
    const priceNumber = parseFloat(price); // Chuyển giá sang số
    const discountedPrice = priceNumber * (1 - sale / 100); // Tính giá sau giảm giá
    return `$${discountedPrice.toFixed(2)}`; // Trả về giá đã giảm
}

// Hàm load sản phẩm cho WOMEN'S và MEN'S
function loadProducts(category) {
    const selectedTabWomens = tabs.value[activeTabWomens.value];
    const selectedTabMens = tabs.value[activeTabMens.value];

    const productsToDisplay = category === 'WOMEN\'S' ?
        products.value['WOMEN\'S'][selectedTabWomens] :
        products.value['MEN\'S'][selectedTabMens];

    const displayed = category === 'WOMEN\'S' ? displayedProductsWomens : displayedProductsMens;

    // Hiển thị 8 sản phẩm đầu tiên cho mỗi tab
    displayed.value = productsToDisplay.slice(0, itemsPerPage);

    // Kiểm tra xem có sản phẩm thêm hay không
    if (displayed.value.length >= productsToDisplay.length) {
        category === 'WOMEN\'S' ? hasMoreProductsWomens.value = false : hasMoreProductsMens.value = false;
    }
}

// Load thêm sản phẩm khi nhấn nút "Load More"
function loadMoreWomens() {
    const selectedTab = tabs.value[activeTabWomens.value];
    const allProducts = products.value['WOMEN\'S'][selectedTab];
    const displayed = displayedProductsWomens.value;
    const remainingProducts = allProducts.slice(displayed.length, displayed.length + itemsPerPage);
    displayedProductsWomens.value = [...displayed, ...remainingProducts];

    if (displayedProductsWomens.value.length >= allProducts.length) {
        hasMoreProductsWomens.value = false;
    }
}

function loadMoreMens() {
    const selectedTab = tabs.value[activeTabMens.value];
    const allProducts = products.value['MEN\'S'][selectedTab];
    const displayed = displayedProductsMens.value;
    const remainingProducts = allProducts.slice(displayed.length, displayed.length + itemsPerPage);
    displayedProductsMens.value = [...displayed, ...remainingProducts];

    if (displayedProductsMens.value.length >= allProducts.length) {
        hasMoreProductsMens.value = false;
    }
}

// Chức năng thay đổi tab
function changeTabWomens(index) {
    activeTabWomens.value = index;
}

function changeTabMens(index) {
    activeTabMens.value = index;
}

// Mặc định khi trang được tải, hiển thị sản phẩm của tab "NEW ARRIVALS"
loadProducts('WOMEN\'S');
loadProducts('MEN\'S');
</script>




<style>
.sizes .size-button{
    width: 24px;
    height: 24px;
}
.select-color-img.selected{
    border-color: black;
    border: 2px solid;

}
.select-color-img{
    cursor: pointer;
    width: 40px;
    height: 40px;
}
.pointer {
    cursor: pointer;
}

.original-price {
    text-decoration: line-through;
    color: #8c8c8c;
    margin-left: 5px;
    font-style: italic;
    ;
}

.category-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
}

.category-header h3 {
    font-size: 22px;
    font-weight: 600;
    line-height: 24.64px;
    letter-spacing: 0.06em;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #121212;
    text-transform: uppercase;
}

.category-header .tabs a {
    margin: 0px 16px;
    font-style: normal;
    font-weight: 400px;
    font-size: 16px;
    line-height: 1.25;
    color: #121212;
    border-bottom: 1px solid transparent;
    transition: .3s;
}

.category-header .tabs .active {
    font-weight: 700;
    line-height: 13.44px;
    letter-spacing: 0.06em;
    text-align: right;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

}

/* Mặc định cho Desktop */
.container {
    max-width: calc(1440px - 170px);
    width: 100%;
    margin: auto;
    margin-bottom: 60px;
}

.products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

/* Màn hình Tablet */
@media (max-width: 1024px) {
    .products {
        grid-template-columns: repeat(3, 1fr);
        /* 3 cột */
    }
}

/* Màn hình Mobile */
@media (max-width: 768px) {
    .category-header {
        flex-direction: column;
        align-items: flex-start;
    }

    .products {
        grid-template-columns: repeat(2, 1fr);
        /* 2 cột */
    }

    .products .img-container img {
        transition: transform 0.2s ease;
    }

    .sale-label {
        top: 5px;
        left: 5px;
        font-size: 12px;
        /* Giảm kích thước nhãn SALE */
    }

    /* Điều chỉnh kích thước nút "See All" */
    .load-more-button {
        padding: 8px 16px;
    }
}

/* Màn hình rất nhỏ (Mobile nhỏ hơn 480px) */
@media (max-width: 480px) {
    .products {
        grid-template-columns: 1fr;
    }

    .sale-label {
        font-size: 10px;
        padding: 3px 7px;
    }

    /* .product-content a {
        font-size: 12px;
    } */

    .price {
        font-size: 12px;
    }
}


.container .tab a {
    text-decoration: none;
    color: #000;
    margin: 0px 16px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: #121212;
    border-bottom: 1px solid transparent;
    transition: .3s;
    text-transform: uppercase;
}

.container a.font-bold {
    font-weight: 700;
}

.stars .fa {
    color: #FFD700;
}

.stars .fa-star-o {
    color: #e0e0e0;
}

.rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.img-container {
    position: relative;
}

.products .img-container img {
    position: relative;
    width: 100%;
    transition: transform 0.3s ease;
}

.products .img-container:hover img {
    transform: scale(0.9);
}


.sale-label {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: red;
    color: white;
    padding: 5px 10px;
    font-weight: bold;
    font-size: 14px;
    z-index: 10;
}

.load-more-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #F8F8F8;
    border: none;
    cursor: pointer;
    width: 100%;
}

.load-more-button:hover {
    background-color: #d3d0d0;
}

/* .product-content a {
    text-decoration: none;
    color: #1A1A1A;
    font-size: 14px;
    font-weight: 400;
    line-height: 15.68px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

} */

.price span {
    font-size: 14px;
    line-height: 15.68px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

}

.buttons {
    text-decoration: none !important;
}
</style>