<template>
    <div>
        <div class="container">
            <!-- Tab chuyển đổi giữa WOMEN'S và MEN'S -->
            <div class="category-header">
                <h3>{{ activeCategory === 'WOMEN\'S' ? 'WOMEN\'S' : 'MEN\'S' }}</h3>
                <div class="tab">
                    <a  v-for="(tab, index) in tabs" :key="tab" class="btn" @click="activeTab = index"
                       :class="{ active: activeTab === index, 'font-bold': activeTab === index }">{{ tab }}</a>
                </div>
            </div>

            <!-- Hiển thị sản phẩm -->
            <div v-if="displayedProducts.length === 0" class="no-data">
                <p>Không có sản phẩm trong danh mục này.</p>
            </div>

            <div v-else>
                <div class="products">
                    <div v-for="(product, index) in displayedProducts" :key="index" class="single-product">
                        <div class="img-container">
                            <span v-if="product.sale > 0" class="sale-label">SALE {{ product.sale }}%</span>
                            <a href="#">
                                <img class="img-fluid" :src="`./src/assets/images/${product.image}`" :alt="product.name" />
                            </a>
                        </div>
                        <div class="product-content">
                            <h6 class="name">
                                <a href="#">{{ product.name }}</a>
                            </h6>
                        </div>
                        <div class="rating">
                            <span class="price">
                                <span v-if="product.sale > 0" class="original-price">{{ product.price }}</span>
                                <span v-if="product.sale > 0">{{ calculateDiscountedPrice(product.price, product.sale) }}</span>
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

                <!-- Button Load More -->
                <button @click="loadMore" v-if="displayedProducts.length < products[activeCategory][tabs[activeTab]].length" class="load-more-btn">See All</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

// Các tab cho sản phẩm (dành cho WOMEN'S và MEN'S)
const tabs = ref([
    'NEW ARRIVALS',
    'SPECIALS',
    'BEST SELLERS',
    'MOST VIEWED',
    'FEATURED PRODUCTS'
]);

// Biến activeTab dùng để chọn tab
const activeTab = ref(0);

// Biến activeCategory để chọn danh mục (WOMEN'S hoặc MEN'S)
const activeCategory = ref('WOMEN\'S');

// Dữ liệu sản phẩm cho WOMEN'S và MEN'S
const products = ref({
    'WOMEN\'S': {
        'NEW ARRIVALS': [
            { name: 'Cluse La Boheme Rose Gold', image: 'p1.png', price: '$99.00', rating: 3, sale: 20 },
            { name: 'Product 2', image: 'p2.png', price: '$120.00', rating: 4, sale: 10 },
        ],
        'SPECIALS': [
            { name: 'Product 3', image: 'p3.png', price: '$80.00', rating: 2, sale: 0 },
        ],
        'BEST SELLERS': [
            { name: 'Product 4', image: 'p4.png', price: '$110.00', rating: 5, sale: 15 },
        ],
        'MOST VIEWED': [
            { name: 'Product 5', image: 'p5.png', price: '$95.00', rating: 3, sale: 5 },
        ],
        'FEATURED PRODUCTS': [
            { name: 'Product 6', image: 'p6.png', price: '$70.00', rating: 4, sale: 0 },
        ]
    },
    'MEN\'S': {
        'NEW ARRIVALS': [
            { name: 'Men\'s Watch', image: 'm1.png', price: '$99.00', rating: 4, sale: 10 },
            { name: 'Men\'s Shoes', image: 'm2.png', price: '$120.00', rating: 5, sale: 15 },
        ],
        'SPECIALS': [
            { name: 'Men\'s T-Shirt', image: 'm3.png', price: '$30.00', rating: 3, sale: 5 },
        ],
        'BEST SELLERS': [
            { name: 'Men\'s Jacket', image: 'm4.png', price: '$150.00', rating: 4, sale: 20 },
        ],
        'MOST VIEWED': [
            { name: 'Men\'s Jeans', image: 'm5.png', price: '$80.00', rating: 4, sale: 10 },
        ],
        'FEATURED PRODUCTS': [
            { name: 'Men\'s Sneakers', image: 'm6.png', price: '$90.00', rating: 5, sale: 5 },
        ]
    }
});

const maxStars = 5;
const itemsPerPage = 8;
const displayedProducts = ref([]);

// Tính giá sau giảm
const calculateDiscountedPrice = (price, sale) => {
    const numericPrice = parseFloat(price.replace('$', ''));
    const discountedPrice = numericPrice - (numericPrice * sale / 100);
    return `$${discountedPrice.toFixed(2)}`;
};

// Watch khi activeTab hoặc activeCategory thay đổi
watch([activeTab, activeCategory], () => {
    const selectedCategory = activeCategory.value;
    const selectedTab = tabs.value[activeTab.value];  // Lấy tên tab
    displayedProducts.value = products.value[selectedCategory][selectedTab].slice(0, itemsPerPage);  // Lấy sản phẩm đầu tiên
});

// Hàm load thêm sản phẩm
const loadMore = () => {
    const selectedCategory = activeCategory.value;
    const selectedTab = tabs.value[activeTab.value];
    const startIndex = displayedProducts.value.length;
    const nextPage = products.value[selectedCategory][selectedTab].slice(startIndex, startIndex + itemsPerPage);

    if (nextPage.length > 0) {
        displayedProducts.value.push(...nextPage); // Thêm sản phẩm mới vào
    }
};

// Khởi tạo sản phẩm ban đầu cho tab đầu tiên của WOMEN'S
displayedProducts.value = products.value['WOMEN\'S'][tabs.value[activeTab.value]].slice(0, itemsPerPage);
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

/* Mặc định cho Desktop */
.container {
    max-width: calc(1440px - 170px);
    width: 100%;
    margin: auto;
    margin-bottom: 100px;
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

    .img-container img {
        transition: transform 0.2s ease;
        /* Tăng tốc độ hiệu ứng zoom-out */
    }

    .sale-label {
        top: 5px;
        left: 5px;
        font-size: 12px;
        /* Giảm kích thước nhãn SALE */
    }

    /* Điều chỉnh kích thước nút "See All" */
    .load-more-btn {
        padding: 8px 16px;
    }
}

/* Màn hình rất nhỏ (Mobile nhỏ hơn 480px) */
@media (max-width: 480px) {
    .products {
        grid-template-columns: 1fr;
        /* 1 cột cho màn hình nhỏ */
    }

    .sale-label {
        font-size: 10px;
        /* Giảm kích thước nhãn SALE cho màn hình cực nhỏ */
        padding: 3px 7px;
    }

    .product-content a {
        font-size: 12px;
        /* Giảm kích thước chữ cho tiêu đề sản phẩm */
    }

    .price {
        font-size: 12px;
        /* Giảm kích thước chữ cho giá */
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

.img-container img {
    position: relative;
    width: 100%;
    transition: transform 0.3s ease;
}

.img-container:hover img {
    transform: scale(0.9);
    /* Thu nhỏ ảnh khi hover */
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

.load-more-btn {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #F8F8F8;
    border: none;
    cursor: pointer;
    width: 100%;
}

.load-more-btn:hover {
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
</style>