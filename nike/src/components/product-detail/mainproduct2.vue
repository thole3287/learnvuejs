<template>
    <div class="product-container">
      <h1>{{ product.name }}</h1>
  
      <div class="product-title">
        <span class="greys">Color:</span>
        <span>{{ selectedColor }}</span>
      </div>
      <div class="product-images">
        <img
          v-for="(color, index) in product.colors"
          :key="index"
          :src="color.image"
          @click="selectColor(color)"
          :class="{ selected: color.name === selectedColor }"
        />
      </div>
  
      <div class="product-details">
        <div class="product-size">
          <span class="greys">Size:</span> {{ selectedSize }}
        </div>
        <div class="size-selector">
          <button
            v-for="size in product.sizes"
            :key="size"
            class="size-button"
            @click="selectSize(size)"
            :class="{ selected: size === selectedSize }"
          >
            {{ size }}
          </button>
        </div>
        <div class="price-cart d-flex align-items-center">
          <div class="product-price">$ {{ selectedPrice }}</div>
          <button class="btn-add-to-cart" @click="addToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  </template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/stores/cart'; // Import Pinia Store

const cartStore = useCartStore();

const product = ref({
  id: 1,
  name: "Women's tracksuit Q109",
  variants: {
    "Blue-XS": 100,
    "Blue-S": 95,
    "White-XS": 110,
    "White-S": 105
  },
  images: ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'],
  colors: [
    { name: "Blue", image: "blue.jpg" },
    { name: "White", image: "white.jpg" }
  ],
  sizes: ["XS", "S"]
});

const selectedColor = ref(product.value.colors[0].name);
const selectedSize = ref(product.value.sizes[0]);
const selectedPrice = ref(product.value.variants[`${selectedColor.value}-${selectedSize.value}`]);

const selectColor = (color) => {
  selectedColor.value = color.name;
  selectedPrice.value = product.value.variants[`${selectedColor.value}-${selectedSize.value}`];
};

const selectSize = (size) => {
  selectedSize.value = size;
  selectedPrice.value = product.value.variants[`${selectedColor.value}-${selectedSize.value}`];
};

const addToCart = () => {
  cartStore.addToCart({
    id: product.value.id,
    name: product.value.name,
    color: selectedColor.value,
    size: selectedSize.value,
    price: selectedPrice.value,
    image: product.value.images[0] // Lấy ảnh đầu tiên làm ảnh hiển thị
  });
};

const updatePrice = () => {
  selectedPrice.value = product.value.variants[`${selectedColor.value}-${selectedSize.value}`];
};

const selectImage = (image) => {
  selectedImage.value = image;
};


const prevImage = () => {
  const currentIndex = product.value.images.indexOf(selectedImage.value);
  selectedImage.value = product.value.images[(currentIndex - 1 + product.value.images.length) % product.value.images.length];
};

const nextImage = () => {
  const currentIndex = product.value.images.indexOf(selectedImage.value);
  selectedImage.value = product.value.images[(currentIndex + 1) % product.value.images.length];
};
</script>

<style>
.selected {
  border: 2px solid blue;
}
.carousel-container .products.slick-slide {
    width: 255px !important;
    height: 378px !important;
    margin-right: 57px;

}

/* related */
.carousel-container {
    max-height: 400px;
}

.product-item {
    text-align: center;
    padding: 10px;
}

.product-item img {
    width: 100%;
    border-radius: 8px;
}

.product-item h4 {
    margin: 10px 0 5px;
    font-size: 1rem;
}

.product-item p {
    margin: 5px 0;
    font-size: 0.9rem;
    color: #555;
}

.product-item .price {
    font-weight: bold;
    color: #333;
}

/* Custom navigation arrows */
.slick-prev,
.slick-next {
    position: absolute;
    top: -23px;
    z-index: 100;
    color: #2b2a2a;
    width: 35px;
    height: 35px;
    display: flex !important;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
}

.carousel-container .slick-prev {
    left: 1140px;
}

.slick-next {
    right: 25px;
}

.slick-prev:hover,
.slick-next:hover {
    background-color: #a7a6a6;
    opacity: 0.3;
}

.slick-prev::before,
.slick-next::before {
    content: '';
}

/* Slick dots customization */
.related-product .carousel-container .slick-dots {
    /* bottom: -30px; */
    display: none !important;
}

/* related */

.reviews {
    border-bottom: 2px solid #E6E6E6;
}

.count-review {
    margin-right: 10px;
}

.review-button span svg {
    margin-right: 10px;
}

.stars {
    margin-right: 10px;
}

.description {
    border-bottom: 2px solid #E6E6E6;
}

.information-add {
    border-bottom: 2px solid #E6E6E6;
}

.checkout-icons img {
    width: 68px;
    height: 21px;
    object-fit: contain;

}

.checkout-icons {
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 2px solid #E6E6E6;
}

.info-section {
    padding-top: 20px;
    padding-bottom: 20px;
}

.info-section svg {
    margin-right: 10px;
}

.price-cart {
    border-top: 2px solid #E6E6E6;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 2px solid #E6E6E6;
}

.btn-add-to-cart {
    margin-right: 40px;
}

.add-to-cart .icons svg {
    margin-right: 40px;
}

.add-to-cart .icons {
    display: flex;
    align-items: center;
    gap: 10px;
}

.size-guide {
    margin-bottom: 20px;
}

.size-guide svg {
    margin-right: px;
}

.size-guide a {
    display: flex;
    text-decoration: none;
    text-align: center;
    align-items: center;
}

.product-container {
    max-width: 800px;
    /* margin: 50px auto; */
    /* padding: 20px; */
    background: #fff;
    border-radius: 10px;
    /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
}

.product-images {
    display: flex;
    gap: 10px;
}

.product-images img {
    width: 64px;
    height: 64px;
    object-fit: cover;
    border: 2px solid transparent;
    border-radius: 5px;
    cursor: pointer;
}

.product-images img.selected {
    border-color: black;
}

.product-details {
    margin-top: 20px;
}

.product-title {
    margin-bottom: 10px;
}

.greys {
    color: #333;
    opacity: 0.6;
}

.product-price {
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

    color: #333;
    margin-right: 40px;
}

.size-selector {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
}

.size-button {
    /* padding: 10px 15px; */
    /* border: 2px solid ; */
    /* border-radius: 5px; */
    background: #F8F8F8;
    cursor: pointer;
    transition: all 0.3s;
    width: 40px;
    height: 40px;
}

.size-button.selected {
    border-color: black;
    background: #fff;

    border: 2px solid;
}

.add-to-cart {
    display: flex;
    align-items: center;
    gap: 10px;
    /* margin-top: 20px; */
}

.add-to-cart button {
    flex: 1;
    /* padding: 15px; */
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    text-transform: uppercase;
    transition: background 0.3s;
    width: 156px;
    height: 48px;
}

.add-to-cart button:hover {
    background-color: #333;
}

.button-left {
    position: relative;
    display: flex;
    gap: 10px;
    /* Khoảng cách giữa hai nút */
    z-index: 10;
    margin-bottom: 20px;
}

.button-left .control-button:hover {
    background-color: rgba(150, 145, 145, 0.8);
    /* border: #252525; */
    /* border-style: solid; */
    opacity: 0.5;
}

.gallery-container {
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    position: relative;
}

.main-image-wrapper {
    position: relative;
}

.main-image {
    width: 448px;
    height: 560px;
    margin-bottom: 20px;
    border-radius: 10px;
    object-fit: cover;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.main-image-wrapper .control-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 18px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s;
}

.main-image-wrapper .control-button:hover {
    background-color: rgba(0, 0, 0, 0.8);
}

.main-image-wrapper .control-button.left {
    left: 17px;
}

.main-image-wrapper .control-button.right {
    right: 17px;
}

.thumbnail-wrapper {
    display: flex;
    align-items: center;
    position: relative;
    /* width: 500px; */
    margin-right: 10px;
    flex-direction: column;
}

.thumbnail-container {
    /* display: flex; */
    gap: 10px;
    overflow: hidden;
    /* width: 500px; */
    justify-content: center;
    max-height: 500px;
}

.thumbnail {
    margin-bottom: 12px;
}

.thumbnail img {
    width: 80px;
    height: 80px;
    border: 2px solid transparent;
    border-radius: 8px;
    cursor: pointer;
    object-fit: cover;
    transition: border-color 0.3s;
    height: 114px;
}

.thumbnail img.active {
    border-color: #007bff;
    height: 114px;
}
</style>