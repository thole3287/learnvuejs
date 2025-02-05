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
                <div v-for="(product, index) in displayedProductsWomens" :key="index" class="single-product">
                    <div class="img-container">
                        <span v-if="product.sale > 0" class="sale-label">SALE {{ product.sale }}%</span>
                        <router-link :to="`/product-detail/${product.id}`" :product-data="product">
                            <img class="img-fluid" :src="`./src/assets/images/${product.image}`" :alt="product.name" />
                        </router-link>

                    </div>
                    <div class="product-content">
                        <h6 class="name">
                            <a href="#">{{ product.name }}</a>
                        </h6>
                    </div>
                    <div class="rating">
                        <span class="price">
                            <span v-if="product.sale > 0" class="original-price">{{ product.price }}</span>
                            <span v-if="product.sale > 0">{{ calculateDiscountedPrice(product.price, product.sale)
                                }}</span>
                            <span v-else>{{ product.price }}</span>
                        </span>
                        <div class="stars">
                            <span v-for="star in maxStars" :key="star" class="fa"
                                :class="{ 'fa-star': star <= product.rating, 'fa-star-o': star > product.rating }">
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Nút Load More -->
            <button v-if="hasMoreProductsWomens" @click="loadMoreWomens" class="load-more-button" style="margin-bottom: 40px;">
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
                <div v-for="(product, index) in displayedProductsMens" :key="index" class="single-product">
                    <div class="img-container">
                        <span v-if="product.sale > 0" class="sale-label">SALE {{ product.sale }}%</span>
                        <router-link :to="`/product-detail/${product.id}`">
                            <img class="img-fluid" :src="`./src/assets/images/${product.image}`" :alt="product.name" />
                        </router-link>

                    </div>
                    <div class="product-content">
                        <h6 class="name">
                            <a href="#">{{ product.name }}</a>
                        </h6>
                    </div>
                    <div class="rating">
                        <span class="price">
                            <span v-if="product.sale > 0" class="original-price">{{ product.price }}</span>
                            <span v-if="product.sale > 0">{{ calculateDiscountedPrice(product.price, product.sale)
                                }}</span>
                            <span v-else>{{ product.price }}</span>
                        </span>
                        <div class="stars">
                            <span v-for="star in maxStars" :key="star" class="fa"
                                :class="{ 'fa-star': star <= product.rating, 'fa-star-o': star > product.rating }">
                            </span>
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
            { id: 1, name: 'Cluse La Boheme Rose Gold', image: 'p1.png', description: 'Descriptionss', price: '$99.00', rating: 3, sale: 20 },
            { id: 2, name: 'Product 2', image: 'p2.png', description: 'Descriptionss', price: '$120.00', rating: 4, sale: 10 },
            { id: 3, name: 'Product 3', image: 'p3.png', description: 'Descriptionss', price: '$80.00', rating: 2, sale: 0 },
            { id: 4, name: 'Product 4', image: 'p4.png', description: 'Descriptionss', price: '$110.00', rating: 5, sale: 15 },
            { id: 5, name: 'Product 5', image: 'p5.png', description: 'Descriptionss', price: '$95.00', rating: 3, sale: 5 },
            { id: 6, name: 'Product 6', image: 'p6.png', description: 'Descriptionss', price: '$70.00', rating: 4, sale: 0 },
            { id: 7, name: 'Product 7', image: 'p7.png', description: 'Descriptionss', price: '$60.00', rating: 3, sale: 10 },
            { id: 8, name: 'Product 8', image: 'p8.png', description: 'Descriptionss', description: 'Descriptionss', price: '$130.00', rating: 4, sale: 20 },
            { id: 9, name: 'Product 9', image: 'p1.png', description: 'Descriptionss', price: '$150.00', rating: 5, sale: 25 },
        ],
        'SPECIALS': [
            { id: 10, name: 'Special Men\'s Shirt', image: 'p1.png', description: 'Descriptionss', price: '$100.00', rating: 4, sale: 5 },
        ],
        'BEST SELLERS': [
            { id: 11, name: 'Best Seller 1', image: 'p2.png', description: 'Descriptionss', price: '$80.00', rating: 3, sale: 5 },
            { id: 12, name: 'Best Seller 2', image: 'p3.png', description: 'Descriptionss', price: '$110.00', rating: 4, sale: 15 },
        ],
        'MOST VIEWED': [
            { id: 13, name: 'Most Viewed 1', image: 'p4.png', description: 'Descriptionss', price: '$95.00', rating: 3, sale: 0 },
            { id: 14, name: 'Most Viewed 2', image: 'p5.png', description: 'Descriptionss', price: '$70.00', rating: 4, sale: 10 },
        ],
        'FEATURED PRODUCTS': [
            { id: 15, name: 'Featured Product 1', image: 'p6.png', description: 'Descriptionss', price: '$150.00', rating: 5, sale: 30 },
            { id: 16, name: 'Featured Product 2', image: 'p7.png', description: 'Descriptionss', price: '$90.00', rating: 4, sale: 10 },
        ]
    },
    'MEN\'S': {
        'NEW ARRIVALS': [
            { id: 17, name: 'Men\'s Watch', image: 'p1.png', description: 'Descriptionss', price: '$99.00', rating: 4, sale: 10 },
            { id: 18, name: 'Men\'s Shoes', image: 'p2.png', description: 'Descriptionss', price: '$120.00', rating: 5, sale: 15 },
            { id: 19, name: 'Men\'s Shirt', image: 'p3.png', description: 'Descriptionss', price: '$80.00', rating: 3, sale: 5 },
            { id: 20, name: 'Men\'s Jacket', image: 'p4.png', description: 'Descriptionss', price: '$110.00', rating: 4, sale: 10 },
            { id: 21, name: 'Men\'s Pants', image: 'p5.png', description: 'Descriptionss', price: '$95.00', rating: 3, sale: 20 },
            { id: 22, name: 'Men\'s Jeans', image: 'p6.png', description: 'Descriptionss', price: '$70.00', rating: 4, sale: 0 },
            { id: 23, name: 'Men\'s Sneakers', image: 'p7.png', description: 'Descriptionss', price: '$150.00', rating: 5, sale: 30 },
            { id: 24, name: 'Men\'s Hoodie', image: 'p8.png', description: 'Descriptionss', price: '$90.00', rating: 4, sale: 10 },
            { id: 25, name: 'Men\'s Sweater', image: 'p9.png', description: 'Descriptionss', price: '$130.00', rating: 3, sale: 0 },
        ],
        'SPECIALS': [
            { id: 26, name: 'Special Men\'s Shirt', image: 'p1.png', description: 'Descriptionss', price: '$100.00', rating: 4, sale: 5 },
        ],
        'BEST SELLERS': [
            { id: 27, name: 'Best Seller 1', image: 'p2.png', description: 'Descriptionss', price: '$80.00', rating: 3, sale: 5 },
            { id: 28, name: 'Best Seller 2', image: 'p3.png', description: 'Descriptionss', price: '$110.00', rating: 4, sale: 15 },
        ],
        'MOST VIEWED': [
            { id: 29, name: 'Most Viewed 1', image: 'p4.png', description: 'Descriptionss', price: '$95.00', rating: 3, sale: 0 },
            { id: 30, name: 'Most Viewed 2', image: 'p5.png', description: 'Descriptionss', price: '$70.00', rating: 4, sale: 10 },
        ],
        'FEATURED PRODUCTS': [
            { id: 31, name: 'Featured Product 1', image: 'p6.png', description: 'Descriptionss', price: '$150.00', rating: 5, sale: 30 },
            { id: 32, name: 'Featured Product 2', image: 'p7.png', description: 'Descriptionss', price: '$90.00', rating: 4, sale: 10 },
        ]
    }
});

// Số lượng sản phẩm hiển thị tối đa mỗi lần (8 sản phẩm)
const itemsPerPage = 8;
const maxStars = 5;
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
    const priceNumber = parseFloat(price.replace('$', '').replace(',', '')); // Chuyển giá sang số
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
.pointer {
    cursor: pointer;
}

.original-price {
    text-decoration: line-through;
    color: #8c8c8c;
    margin-right: 5px;
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

    .product-content a {
        font-size: 12px;
    }

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

.product-content a {
    text-decoration: none;
    color: #1A1A1A;
    font-size: 14px;
    font-weight: 400;
    line-height: 15.68px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

}

.price span {
    font-size: 14px;
    line-height: 15.68px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

}
.buttons{
    text-decoration: none !important;
}
</style>