<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col-sm-6">
                <div class="gallery-container">
                    <!-- Thumbnail Container with Navigation Controls -->
                    <div class="thumbnail-wrapper">
                        <div class="button-left">
                            <button class="control-button left" id="thumbnailPrev"><svg width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.6">
                                        <path d="M5 15L12 8L19 15" stroke="#121212" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </g>
                                </svg>

                            </button>
                            <button class="control-button right" id="thumbnailNext"><svg width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.6">
                                        <path d="M19 9L12 16L5 9" stroke="#121212" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </g>
                                </svg>

                            </button>
                        </div>

                        <div class="thumbnail-container" id="thumbnailContainer">
                            <div class="thumbnail">
                                <img src="https://s3-alpha-sig.figma.com/img/928b/c5be/0c6375ab1c11315af8ae4f1122ce3335?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=d4ys74rB6M-0i0CCIn6gV2jBpETAMRSJs--Qp3BM5eOj-ofuR7IDtn-YWnBpMH2C27YCN58sR-t4ZI10JApGIQdYTkM-oCNpr4pZ~sdNDbQnGpkIhSs2ZjH-GdjqC3dYNuaCXRrRqxa2-10oDNZGgxe-AfR3Z4V~IWbfBOTzINUhX3NpSU3SHIJ2cIyYEMZX2U6cr5Q5CFZ9BT2~xfqloYrtZfkrJSZg5g8TrfdTceDVRyKlI3QK5ycy1-mycD6XLYWIVyfqhF~lwZ7UzsA-hNex1ZoKMqnvwPxNKthYYccuA5LzxjTxE7KRR~TXgflGwHcpd1R-RS8-XNE~mtyluA__"
                                    alt="Thumbnail 1">
                            </div>
                            <div class="thumbnail">
                                <img src="https://s3-alpha-sig.figma.com/img/439b/062b/e28cb2d4ef6eb7a3fc9ce84865906483?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UWGirIf63gzfe1oQh-arbDW2I0mn0kTF40~HY3~wiOwi-Yu8dnQqQpEqs9VjEpmNYgO0VesgA4KBLGhX6g2VXD9u5HeY9f9R8FWORhoIe95dsq3xlpK9UsGUk-IS3W9jOHOur6C9k5z-~JweYSf2iepekR~4mGGJXAyG62NW70sh29H7ONLZ2pKowu8DfIQlNSwmSD5-iEEZz6rWenWdv4-bKuQQG5cuybAyonpO244~M4raU0r-Gk8cNBxpJ2UdQSiQ4EcE-zZyqFUZ0-i3Ljib1pDPGHW8E-v8GConeGpccHvzCQW9JsfWOI1djE7qtyybj8bYJiis1dkhL1rHlg__"
                                    alt="Thumbnail 2">
                            </div>
                            <div class="thumbnail">
                                <img src="https://s3-alpha-sig.figma.com/img/9f26/1ede/0e071db44fff2bea2cae6a91dcd04bd7?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rm8BYQ5TJ-SIfMxOGmBZFcLenfvTdaJ1Smw1j64puSG7TAE67R-itlvsareQPLuiT8xge~UbC5Hs7aCkMJ9YAWVBZitPL-gonoUntNuVDxxO88AQzmA89vBQrcjwBPhiYcZ-Z8POOXPYnvkju0NZsHWrA1Qp0lZOnYUwLTPs1TxblKsNlZQDq3HFv~MdpVyQsqOCafB0FfxCqCP~cdhpnEPbMK~rfnSAXJ0qmEbRnfj965Qd8g2wNdKB88tKzmq~QRSch2Y-7WPDCcZNR1OkKtrgSSqQbfGaN~Yhxi0FlQfX7cfSm7UgSzMkP4Qhwt6HC5jGWU~1uajo9kteQLMILA__"
                                    alt="Thumbnail 3">
                            </div>
                            <div class="thumbnail">
                                <img src="https://s3-alpha-sig.figma.com/img/0644/8fb8/6beb3a5714e2969e4094c6fc2cdcd2e4?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FkeVMXFNur-YTDOh94mKvBdlfqGKrsHAafp7NhIa4hlU2Bq0t01V~D7m~e8PnjfMb~D-3GbYU9q8XDBpUXA8vKdY8cVKLP6-WDsc8gpwCYwoRpa2e9ePOFNzOnbwhz9PV2CrVMme4IUAkXAeAWEII4OYCFiNlU~WziJUZVDe9FXluS-E7g-c49n7VBC6WZMqs9UA3OfcRaPXrCjvTTzsukSuNUL3n1BirNXbxHWycFDWUsLKcrvErpD8EGbqWlNTgFxu933NlKhGEBk2vt24kLOCQ1YzPFB8Z3EfoFFLf-jls5V6czDYEyNxiLmpaQTB9TyMH7PBiRDR2VRljJIAUw__"
                                    alt="Thumbnail 4">
                            </div>
                        </div>
                    </div>
                    <!-- Main Image with Navigation Controls -->
                    <div class="main-image-wrapper">
                        <button class="control-button left" id="mainPrev">&lt;</button>
                        <img src="https://s3-alpha-sig.figma.com/img/928b/c5be/0c6375ab1c11315af8ae4f1122ce3335?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=d4ys74rB6M-0i0CCIn6gV2jBpETAMRSJs--Qp3BM5eOj-ofuR7IDtn-YWnBpMH2C27YCN58sR-t4ZI10JApGIQdYTkM-oCNpr4pZ~sdNDbQnGpkIhSs2ZjH-GdjqC3dYNuaCXRrRqxa2-10oDNZGgxe-AfR3Z4V~IWbfBOTzINUhX3NpSU3SHIJ2cIyYEMZX2U6cr5Q5CFZ9BT2~xfqloYrtZfkrJSZg5g8TrfdTceDVRyKlI3QK5ycy1-mycD6XLYWIVyfqhF~lwZ7UzsA-hNex1ZoKMqnvwPxNKthYYccuA5LzxjTxE7KRR~TXgflGwHcpd1R-RS8-XNE~mtyluA__"
                            alt="Main Product Image" class="main-image" id="mainImage">
                        <button class="control-button right" id="mainNext">&gt;</button>
                    </div>


                </div>
            </div>
            <div class="col-sm-6">
                <div class="product-container">
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
                        <div class="size-guide">
                            <a href="#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.6">
                                        <path
                                            d="M20.95 15.3024L12.5859 10.7403V10.4008C12.5859 10.0137 12.8206 9.65367 13.1984 9.46115C14.0496 9.02747 14.5556 8.19215 14.5189 7.28119C14.4692 6.0498 13.4056 5.04854 12.0977 5.00181C11.4055 4.9768 10.7501 5.21197 10.2521 5.66322C9.75371 6.1148 9.47926 6.72206 9.47926 7.37307C9.47926 7.67766 9.7416 7.92459 10.0652 7.92459C10.3888 7.92459 10.6511 7.67766 10.6511 7.37307C10.6511 7.02459 10.798 6.6996 11.0648 6.45785C11.3313 6.21643 11.6818 6.09043 12.0532 6.10403C12.7526 6.12903 13.3212 6.66448 13.3479 7.32303C13.3675 7.8112 13.0965 8.25877 12.6406 8.49111C11.8841 8.87658 11.4141 9.60833 11.4141 10.4008V10.7403L3.05004 15.3024C2.40234 15.6558 2 16.313 2 17.0177C2 18.1108 2.94461 19 4.1057 19H19.8943C21.0554 19 22 18.1107 22 17.0177C22 16.313 21.5977 15.6558 20.95 15.3024ZM19.8943 17.897H4.1057C3.59078 17.897 3.17188 17.5025 3.17188 17.0177C3.17188 16.7051 3.35031 16.4135 3.63762 16.2569L12 11.6956L20.3624 16.2569C20.6496 16.4136 20.8281 16.7051 20.8281 17.0177C20.8281 17.5025 20.4092 17.897 19.8943 17.897Z"
                                            fill="#121212" />
                                    </g>
                                </svg>
                                <span class="greys">Size Guide</span>
                            </a>
                        </div>

                        <div class="price-cart d-flex align-items-center">
                            <div class="product-price">$ {{ selectedPrice }}</div>
                            <div class="add-to-cart">
                                <button class="btn-add-to-cart" @click="addToCart">Add to Cart</button>
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

                    <div class="info-section d-flex justify-content-between">
                        <div class="shipping d-flex align-items-center">
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11 12V2C11 1.73478 10.8946 1.48043 10.7071 1.29289C10.5196 1.10536 10.2652 1 10 1H2C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2V12C1 12.2652 1.10536 12.5196 1.29289 12.7071C1.48043 12.8946 1.73478 13 2 13H3M11 12C11 12.2652 10.8946 12.5196 10.7071 12.7071C10.5196 12.8946 10.2652 13 10 13H7M11 12V4C11 3.73478 11.1054 3.48043 11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3H14.586C14.8512 3.00006 15.1055 3.10545 15.293 3.293L18.707 6.707C18.8946 6.89449 18.9999 7.14881 19 7.414V12C19 12.2652 18.8946 12.5196 18.7071 12.7071C18.5196 12.8946 18.2652 13 18 13H17M11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13H13M3 13C3 13.5304 3.21071 14.0391 3.58579 14.4142C3.96086 14.7893 4.46957 15 5 15C5.53043 15 6.03914 14.7893 6.41421 14.4142C6.78929 14.0391 7 13.5304 7 13M3 13C3 12.4696 3.21071 11.9609 3.58579 11.5858C3.96086 11.2107 4.46957 11 5 11C5.53043 11 6.03914 11.2107 6.41421 11.5858C6.78929 11.9609 7 12.4696 7 13M17 13C17 13.5304 16.7893 14.0391 16.4142 14.4142C16.0391 14.7893 15.5304 15 15 15C14.4696 15 13.9609 14.7893 13.5858 14.4142C13.2107 14.0391 13 13.5304 13 13M17 13C17 12.4696 16.7893 11.9609 16.4142 11.5858C16.0391 11.2107 15.5304 11 15 11C14.4696 11 13.9609 11.2107 13.5858 11.5858C13.2107 11.9609 13 12.4696 13 13"
                                    stroke="#121212" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span class="greys">Shipping & Delivery</span>
                        </div>
                        <div class="return d-flex align-items-center"><svg width="24" height="24" viewBox="0 0 24 24"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.6">
                                    <path
                                        d="M4.582 8.99993H4V3.99993L4.582 8.99993ZM4.582 8.99993C5.24585 7.35806 6.43568 5.98284 7.96503 5.08979C9.49438 4.19674 11.2768 3.83634 13.033 4.06507C14.7891 4.2938 16.4198 5.09872 17.6694 6.3537C18.919 7.60869 19.7168 9.24279 19.938 10.9999M4.582 8.99993H9M19.419 14.9999H20V19.9999L19.419 14.9999ZM19.419 14.9999C18.7542 16.6408 17.564 18.015 16.0348 18.9072C14.5056 19.7995 12.7237 20.1595 10.9681 19.9308C9.21246 19.7022 7.5822 18.8978 6.33253 17.6437C5.08287 16.3895 4.28435 14.7564 4.062 12.9999M19.419 14.9999H15"
                                        stroke="#121212" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg>
                            <span class="greys">Returns & Exchanges</span>
                        </div>
                        <div class="question d-flex align-items-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.6">
                                    <g opacity="0.8">
                                        <path
                                            d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
                                            stroke="#121212" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </g>
                            </svg>
                            <span class="greys">Ask a Question</span>
                        </div>
                    </div>
                    <div class="text-uppercase align-middle align-items-center d-flex justify-content-between">
                        guaranteed safe checkout
                        <svg width="400" height="2" viewBox="0 0 370 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="400" height="1" fill="white" stroke="#E6E6E6" />
                        </svg>
                    </div>

                    <div class="checkout-icons d-flex justify-content-between">
                        <img  v-for="guaranteed in icons" :key="guaranteed.id" :src="guaranteed.imgIcon" :alt="guaranteed.alt">
                    </div>
                    <div class="description pt-4 pb-4">
                        <span class="greys text-uppercase">
                            Description
                        </span>
                    </div>
                    <div class="information-add pt-4 pb-4">
                        <p>Color: <span class="greys">Blue, White, Black, Grey</span></p>
                        <p>Size: <span class="greys">XS, S, M, L</span></p>
                        <p>Material: <span class="greys"> 100% Polyester</span></p>
                    </div>
                    <div class="reviews pt-4 pb-4">
                        <p>REVIEWS</p>
                        <div class="review d-flex justify-content-between">
                            <div class="review-stars-total d-flex justify-content-between">
                                <div class="stars">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star fa-star-o"></span>
                                    <span class="fa fa-star fa-star-o"></span>
                                </div>
                                <div class="count-review">
                                    <span>3 Reviews</span>
                                </div>
                            </div>
                            <div class="review-button">
                                <a href="" class="d-flex align-items-center text-decoration-none">
                                    <span class="greys">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.6">
                                                <path
                                                    d="M7 8H17H7ZM7 12H11H7ZM12 20L8 16H5C4.46957 16 3.96086 15.7893 3.58579 15.4142C3.21071 15.0391 3 14.5304 3 14V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V14C21 14.5304 20.7893 15.0391 20.4142 15.4142C20.0391 15.7893 19.5304 16 19 16H16L12 20Z"
                                                    stroke="#121212" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                        </svg>
                                    </span>
                                    <span class="greys">Write a review</span>
                                </a>
                            </div>
                        </div>
                        <div class="review-box pt-2 pb-2">
                            <div class="review-name-stars d-flex justify-content-between">
                                <div class="review-name">
                                    Oleh Chabanov
                                </div>
                                <div class="review-stars-total d-flex justify-content-between">
                                    <div class="count-review greys">
                                        3 months ago
                                    </div>
                                    <div class="stars">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star fa-star-o"></span>
                                        <span class="fa fa-star fa-star-o"></span>
                                    </div>

                                </div>
                            </div>
                            <p class="greys">
                                On the other hand, we denounce with righteous indignation and like men who are so
                                beguiled and demoralized by the charms of pleasure of the moment
                            </p>
                        </div>
                        <div class="review-box pt-2 pb-2">
                            <div class="review-name-stars d-flex justify-content-between">
                                <div class="review-name">
                                    Oleh Chabanov
                                </div>
                                <div class="review-stars-total d-flex justify-content-between">
                                    <div class="count-review greys">
                                        3 months ago
                                    </div>
                                    <div class="stars">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star fa-star-o"></span>
                                        <span class="fa fa-star fa-star-o"></span>
                                    </div>

                                </div>
                            </div>
                            <p class="greys">
                                On the other hand, we denounce with righteous indignation and like men who are so
                                beguiled and demoralized by the charms of pleasure of the moment
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="related-product pt-5">
            <div class="related-title">
                <h4 class="text-uppercase">Related Products</h4>
            </div>
            <div class="carousel-container pt-3">
                <div class="products">
                    <div class="single-product">
                        <div class="img-container">
                            <span class="sale-label">SALE 20%</span>
                            <a href="#">
                                <img class="img-fluid"
                                    src="https://s3-alpha-sig.figma.com/img/2eab/e200/deb73c900aa92074f727b85d02e8bae8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aQpoEohbmjxG4SXS2XQ75vgtZQpMvplxuUewtYbbCJ52gCzNiemfNrTOYl1pYZBjP5zjJqXF4X-epwIxAnEIt~t3UWmzAVLkcH8pVlAicAQt4UXxEn20bQqr7OPyjL6IjJBjxpcsB2FMyfTclcgBH4Mg9vbwL9Wc-zlB1ZB3nBeI~1WQCiN2XFmINAV70YZviG1RgupuS~~OiWYzt0-lvAUHG7vO3aT3ulURRaITVzPHlv78fLQCrbYxc2jkcnYsJA99zfyujVIFS9IbcSJzVwKU1TWje2KxHSvzHuH3PkFlMujwzzqDoLQNzx9fD1x9pGloJ98KZTAu4BKFdlfl9Q__"
                                    alt="p1" />
                            </a>

                        </div>
                        <div class="product-content">
                            <h6 class="name">
                                <a href="#">product 1</a>
                            </h6>
                        </div>
                        <div class="rating">
                            <span class="price">
                                <span class="original-price"> $100</span>
                                <span> $100</span>

                            </span>
                            <div class="stars">
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star fa-star-o"></span>
                                <span class="fa fa-star fa-star-o"></span>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="products">
                    <div class="single-product">
                        <div class="img-container">
                            <span class="sale-label">SALE 20%</span>
                            <a href="#">
                                <img class="img-fluid"
                                    src="https://s3-alpha-sig.figma.com/img/d744/2dce/2267fe345b78cada62ef0c6fe2d731f6?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kkeqMM7UKksW8gfPeXuNYNsO9qPNR6sG7Yi3IKcQl11u9HXw1OiC9jknQqI4GPwaSzpbImyitwMHNdNg-XdUbM3aGcpZ72DxFLgu9oGt4-reVlpqjhnX2WymaZYQAqSi12TfchX8goJebgjBPcwpj2XocB1RCxhSGLsmxDfx1qQlZmF-TLla54oYZ00-u3TAsO2BqWNuQwGpdW3JLey~jOMxzr8A2IpVmgYYSITjgZhObmmruIoyhGLb-DIyTwSAfKyC2JSqoTkNa5opbmlUpD6jDUbojyf~-3jBFfU36jQ8DmXAzO-Yt7ZvSYItbMlQYk7PsUeCJyWbvdSNzSQwmA__"
                                    alt="p1" />
                            </a>

                        </div>
                        <div class="product-content">
                            <h6 class="name">
                                <a href="#">product 2</a>
                            </h6>
                        </div>
                        <div class="rating">
                            <span class="price">
                                <span class="original-price"> $100</span>
                            </span>
                            <div class="stars">
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star fa-star-o"></span>
                                <span class="fa fa-star fa-star-o"></span>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="products">
                    <div class="single-product">
                        <div class="img-container">
                            <span class="sale-label">SALE 20%</span>
                            <a href="#">
                                <img class="img-fluid"
                                    src="https://s3-alpha-sig.figma.com/img/7925/91fa/2ad9bb4b4df7c58562a12888df52910b?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bmPIVNpGIpNJz4Vh~XELn6AY8xEBi3wkzXBZzd6HgqKs327WEO3Md~pCAg6YFLAks83~FRBfVgbyanW5uvn9x4TUChq2oKBhtwbbXdgpoapNUG~Rq4mqNNdRTP6-HVRQW7WW6dVIedQuwpUnCuc3YQaf~a8R5BePzm-DUc63VSfZAOZdm9xImuh4eDaesk15EhvrVUL0ztzEJYYhcMPoe~6jf3EaSxGK8ntVWX1n7aN6QiEasdtLdCyg5AMnH0vDWUQhGY303WM7UUM-BR5Qfqzw9boy37GfuO7EKbEcw5fNXLBIpE64-bgVcXjz8jM5V2F~MAbcPzZUzsgYj~AsZg__"
                                    alt="p1" />
                            </a>

                        </div>
                        <div class="product-content">
                            <h6 class="name">
                                <a href="#">product 3</a>
                            </h6>
                        </div>
                        <div class="rating">
                            <span class="price">
                                <span class="original-price"> $100</span>
                            </span>
                            <div class="stars">
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star fa-star-o"></span>
                                <span class="fa fa-star fa-star-o"></span>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="products">
                    <div class="single-product">
                        <div class="img-container">
                            <span class="sale-label">SALE 20%</span>
                            <a href="#">
                                <img class="img-fluid"
                                    src="https://s3-alpha-sig.figma.com/img/5e3e/bbb3/e6ac9b90a036c06f585190bc81c6c22e?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cNh10rY0~ZQYwO2JdpcDbxT5wSD4teDS9KND8c1EeUEoLG-kJg0UpdJ~JzceniisNDdhJ52GN9~x~qOudCdIfgPFNmgkySauWoucRgQ96gmORunBgxeYzFC2NnqNPowf~fdf-5MkZ1vu1Tetcqm9Ru1~9I48mt7C7c6PZ6V88WCdLKm0OaHJbueX82MSyGK7yAyNNd-2AXJ2LxbG6escKY2qkWxntfwD~3JYjg6TYYILHb0DwJLVueXW~vdxDiIg1PPgQBTItdwtCgx1WD4qB0Kda~kpRbkVqTDCBbD2SGP4sNeiw1bPIQIoVyD-o90LOyNkkLk9KUeLSX2UIwt5Ww__"
                                    alt="p1" />
                            </a>

                        </div>
                        <div class="product-content">
                            <h6 class="name">
                                <a href="#">product 4</a>
                            </h6>
                        </div>
                        <div class="rating">
                            <span class="price">
                                <span class="original-price"> $100</span>
                            </span>
                            <div class="stars">
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star fa-star-o"></span>
                                <span class="fa fa-star fa-star-o"></span>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="products">
                    <div class="single-product">
                        <div class="img-container">
                            <span class="sale-label">SALE 20%</span>
                            <a href="#">
                                <img class="img-fluid" src="@/assets/images/p1.png" alt="p1" />
                            </a>

                        </div>
                        <div class="product-content">
                            <h6 class="name">
                                <a href="#">product 5</a>
                            </h6>
                        </div>
                        <div class="rating">
                            <span class="price">
                                <span class="original-price"> $100</span>
                            </span>
                            <div class="stars">
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star fa-star-o"></span>
                                <span class="fa fa-star fa-star-o"></span>
                            </div>
                        </div>
                    </div>
                </div>
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
  images: ['https://s3-alpha-sig.figma.com/img/928b/c5be/0c6375ab1c11315af8ae4f1122ce3335?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=d4ys74rB6M-0i0CCIn6gV2jBpETAMRSJs--Qp3BM5eOj-ofuR7IDtn-YWnBpMH2C27YCN58sR-t4ZI10JApGIQdYTkM-oCNpr4pZ~sdNDbQnGpkIhSs2ZjH-GdjqC3dYNuaCXRrRqxa2-10oDNZGgxe-AfR3Z4V~IWbfBOTzINUhX3NpSU3SHIJ2cIyYEMZX2U6cr5Q5CFZ9BT2~xfqloYrtZfkrJSZg5g8TrfdTceDVRyKlI3QK5ycy1-mycD6XLYWIVyfqhF~lwZ7UzsA-hNex1ZoKMqnvwPxNKthYYccuA5LzxjTxE7KRR~TXgflGwHcpd1R-RS8-XNE~mtyluA__', 'https://s3-alpha-sig.figma.com/img/5e3e/bbb3/e6ac9b90a036c06f585190bc81c6c22e?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cNh10rY0~ZQYwO2JdpcDbxT5wSD4teDS9KND8c1EeUEoLG-kJg0UpdJ~JzceniisNDdhJ52GN9~x~qOudCdIfgPFNmgkySauWoucRgQ96gmORunBgxeYzFC2NnqNPowf~fdf-5MkZ1vu1Tetcqm9Ru1~9I48mt7C7c6PZ6V88WCdLKm0OaHJbueX82MSyGK7yAyNNd-2AXJ2LxbG6escKY2qkWxntfwD~3JYjg6TYYILHb0DwJLVueXW~vdxDiIg1PPgQBTItdwtCgx1WD4qB0Kda~kpRbkVqTDCBbD2SGP4sNeiw1bPIQIoVyD-o90LOyNkkLk9KUeLSX2UIwt5Ww__', 'https://s3-alpha-sig.figma.com/img/5e3e/bbb3/e6ac9b90a036c06f585190bc81c6c22e?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cNh10rY0~ZQYwO2JdpcDbxT5wSD4teDS9KND8c1EeUEoLG-kJg0UpdJ~JzceniisNDdhJ52GN9~x~qOudCdIfgPFNmgkySauWoucRgQ96gmORunBgxeYzFC2NnqNPowf~fdf-5MkZ1vu1Tetcqm9Ru1~9I48mt7C7c6PZ6V88WCdLKm0OaHJbueX82MSyGK7yAyNNd-2AXJ2LxbG6escKY2qkWxntfwD~3JYjg6TYYILHb0DwJLVueXW~vdxDiIg1PPgQBTItdwtCgx1WD4qB0Kda~kpRbkVqTDCBbD2SGP4sNeiw1bPIQIoVyD-o90LOyNkkLk9KUeLSX2UIwt5Ww__', 'https://s3-alpha-sig.figma.com/img/5e3e/bbb3/e6ac9b90a036c06f585190bc81c6c22e?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cNh10rY0~ZQYwO2JdpcDbxT5wSD4teDS9KND8c1EeUEoLG-kJg0UpdJ~JzceniisNDdhJ52GN9~x~qOudCdIfgPFNmgkySauWoucRgQ96gmORunBgxeYzFC2NnqNPowf~fdf-5MkZ1vu1Tetcqm9Ru1~9I48mt7C7c6PZ6V88WCdLKm0OaHJbueX82MSyGK7yAyNNd-2AXJ2LxbG6escKY2qkWxntfwD~3JYjg6TYYILHb0DwJLVueXW~vdxDiIg1PPgQBTItdwtCgx1WD4qB0Kda~kpRbkVqTDCBbD2SGP4sNeiw1bPIQIoVyD-o90LOyNkkLk9KUeLSX2UIwt5Ww__'],
  colors: [
    { 
        name: "Blue", 
        image: "https://s3-alpha-sig.figma.com/img/5e3e/bbb3/e6ac9b90a036c06f585190bc81c6c22e?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cNh10rY0~ZQYwO2JdpcDbxT5wSD4teDS9KND8c1EeUEoLG-kJg0UpdJ~JzceniisNDdhJ52GN9~x~qOudCdIfgPFNmgkySauWoucRgQ96gmORunBgxeYzFC2NnqNPowf~fdf-5MkZ1vu1Tetcqm9Ru1~9I48mt7C7c6PZ6V88WCdLKm0OaHJbueX82MSyGK7yAyNNd-2AXJ2LxbG6escKY2qkWxntfwD~3JYjg6TYYILHb0DwJLVueXW~vdxDiIg1PPgQBTItdwtCgx1WD4qB0Kda~kpRbkVqTDCBbD2SGP4sNeiw1bPIQIoVyD-o90LOyNkkLk9KUeLSX2UIwt5Ww__" },
    { 
        name: "White", 
        image: "https://s3-alpha-sig.figma.com/img/5e3e/bbb3/e6ac9b90a036c06f585190bc81c6c22e?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cNh10rY0~ZQYwO2JdpcDbxT5wSD4teDS9KND8c1EeUEoLG-kJg0UpdJ~JzceniisNDdhJ52GN9~x~qOudCdIfgPFNmgkySauWoucRgQ96gmORunBgxeYzFC2NnqNPowf~fdf-5MkZ1vu1Tetcqm9Ru1~9I48mt7C7c6PZ6V88WCdLKm0OaHJbueX82MSyGK7yAyNNd-2AXJ2LxbG6escKY2qkWxntfwD~3JYjg6TYYILHb0DwJLVueXW~vdxDiIg1PPgQBTItdwtCgx1WD4qB0Kda~kpRbkVqTDCBbD2SGP4sNeiw1bPIQIoVyD-o90LOyNkkLk9KUeLSX2UIwt5Ww__" }
  ],
  sizes: ["XS", "S"]
});

const icons = ref([
    {
        id: 1,
        alt: 'Stripe',
        imgIcon: 'https://s3-alpha-sig.figma.com/img/118a/b1cd/509ffeb0c79c0d68cd71f1deb6b0e63f?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iCrLnNF3U0Sfj1GOc6Kh325ieBeH2SU23m5g57o~zgUbh8zYCoXCU1aijUCxuaoIhPy9E~EOdzILbsVn7LSfC~YqpBlli18XvccswmPCcx7v6sobc0dkrQ8scz1o9og8~l0ycnK2Rq4-hcoqUMBsSoqIJK9C5EJSnpy17kj-pvpVbpiLJQN7h-jW11i7ccEKwepkJTKpCa2mfStWk9aX4CW1SHijIfjGVpwYR3aNYbc~Jcu8HEadM~bw2oPvialFXRDKrsHkIAnU2SbIq6JOCsJSMt5McBGpr3iQut-w0Sb-LsASH2QzsuyGvRJOKMWo~Dtwixss~SWlUwrVfnkN9Q__'
    },
    {
        id: 2,
        alt: 'Aes',
        imgIcon: 'https://s3-alpha-sig.figma.com/img/7988/a2ed/df39cd6ce75dd6daece96c9ffd135bd4?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=R3-JAbA830JefOvOc1BNxc9tmnqCm~Ell~4EmMR80ws0PhT5e2wg2SnwaK-N4WKKuSV0V0n93H9POa2Pf8ouUfhM1OOnu6eMxDt-KpyV-8NYCul0lxfpgPP3ClG-O~k27wwv64XgQKwrWk2lDKs-TNW1A-BclshT9NbnrYMI7HlhOqT1oidJT40--GGECar64aLYhnI~B9gn5UEiTFeYHFxAZcEaZOZneyUyQkEEwN7VNP~ZmCnxoFapWd0lTyE~Cn3Sz6ZuNRSV6oGVt-IXfphUS9yHeqhbGlazfot588ZPNo1FbePBda0RyPx2HB8Q5YznpeFgDLow0Q4xx6uL4A__'
    },
    {
        id: 3,
        alt: 'PayPal',
        imgIcon: 'https://s3-alpha-sig.figma.com/img/9f68/ca6e/0bd6acf971b252f36b2f4da901331c74?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=M5kLzit3~UOnyhOLA17scM5l19R-PMwdhLeP6TPEy1133aa0jFZOq9lHAwKehuk~cKjzLFK5l4tQDE3y7NG1Hf9ZccXtq0M8sopprQQ657OL4BCFS4rLgBBI~R4YLrCRsLyCz8R4gU6O6aEI6NNJNTWYe3NKY-OFSKC7KWngLMx5OJlICVG3KtMFvtj0zZHMnlz3BId42F7mkHSsEGiSCsTdERQCad0eZicx0Mbw~o3j0xlPNpnVjIbtWJ3XjpBueqxnYah1HATu~Rz7z4G6FzkMyZkzQ-IazllxInQVCp5S2~WAMQnSTx~STlhC2MKhsbM9GcYH6u9eml1h6v-0Pw__'
    },
    {
        id: 4,
        alt: 'Visa',
        imgIcon: 'https://s3-alpha-sig.figma.com/img/f5c2/433b/884256ccd391d41c93d031c4aa573c26?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C3YH3WDUSvXSZUYeMp3Yf4GySpkYMpxC7k~N2u4Xi2AJMMQgf9p9XJNjmL2gLSXiUVA4wJccftycx0EVAK6y3piUSo92rIuh1o-I9MuPdZjcoRzfdJ~dSaXJsV1RfNfImSUAmzsYR2saz0lpB8BnYrnwvTrr0w2PJEqNGhugOVqtxsfIhsh3pe28VXCkYSau33b2smhbwZ7Wj1e4v9PqhAmpI47A0i5OeptLh5QW7K8YK-qwxqYP0DK2mnh47IZbACRdTfcBMqZGxZ~kCLtBwhEwyDMQ~KI-lePOuBzSuizX22WiDTSVyxYJwVy~uHbEJIBTHnvSf6E9kGy6dSL~0w__'
    },
    {
        id: 5,
        alt: 'MasterCard',
        imgIcon: 'https://s3-alpha-sig.figma.com/img/e267/12a4/e76a1c3216365d74bde81a54361dcf3d?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QIiwd8utWy1KWN-CL91fUErOvDY5KGfIp79zcADCSSmNbBgJvEiuZDO7T7zJoI4AGXfFpI4tUqKTu0ehfCGMpEk7LrUtH1bhkx7y6lPCQ80VIqjq~8B4P1WKGL0ROcqJfYnF5Ui0N4Z9OxpoHf7PcL467RMppJqBid1qpsKRFL1uq1OM3f~V1glUz-8HKCbIlhyQp1i-zKTo1AWGyp55k-3~yWYDIMJEESwztJHwLmupF7vHFMW-3CE-BtQ8SM2oPKMV4NVzeLIB1rblGo2YRehAUvKE2q3zI2R9hRlBEICZE9Jv9cC3yxHJsv8xMPSkCrrb59bd94kXh6FRrm~s5g__'
    },
    {
        id: 6,
        alt: 'Discover',
        imgIcon: 'https://s3-alpha-sig.figma.com/img/bedd/7aa2/01110c16fa8b8b414a59a973600342a4?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZxvOArUH6oGVhC21p9OVYbfD4W44O5kYhI4eaO9eIJLoq-K7rMEAtzIe2C2A~9xZz9VyCiGnlx8~8pgffJwWIZplVcDJ3dlug3JzHV9LM8pskNANYg1GWYNwlH7Whgq584rP8QcYsAFjsWhtGA2CUSdIzqEPitWX0EyV6ci5ssxwtYQ3AYBFgQ6JQ9VuK~TMBPqZVMpFwS6gVxlt3A7sCqz9l7PhBqY7dqqVdPhZdDyDYfmUwfJH5PeMKWv1orQF-Q2HNNzuSGH5vXvMbxeml9h2hxwiI4mA-IWTU7qP0u983tIQaZm4JoFDFgrK22JhqPwcFtNAofLRir5G1RW~Iw__'
    },
    {
        id: 7,
        alt: 'American Express',
        imgIcon: 'https://s3-alpha-sig.figma.com/img/9b1a/ced2/21b3454fe78c09679d16d55b964fc5e0?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LRJi8m7410am-oCmkH43sfrvzEO6BbPiso0BTUl5Qmho0FZOHSI8vsu-wqWTc4pVJD7EOwIAVpDpJPmMLgHjPs1x32cLe8HzmO1mP456zaYe0YpgjNznntiD3038EwxBRSzG9~C~v7tk5dPstdPo~N52Bf4ywD23y5Sj3Jcw-yoJy36JMYnRyCe5mbJg53fxv7B~ZIyubplhYH0xr~wDVZMefP8Tg78NR8AgMzuihY5JkNo4S2pD0uobfycoPRxNLRmPEdptxFASA34g0J60pKxcZbRSCPuTAzankeIFi28R~rbq-4daS8r1259Xj57NBeNuDxtXNJSIiuLmVstzyw__'
    }
])
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

$(document).ready(function () {
    $('.carousel-container').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true, // Enables arrows
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: `<button type="button" class="slick-prev">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.6">
                                <path d="M15 19L8 12L15 5" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        </svg>
                    </button>`,
        nextArrow: `<button type="button" class="slick-next">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.6">
                            <path d="M9 5L16 12L9 19" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        </svg>
                    </button>`,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail img');
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    const mainPrev = document.getElementById('mainPrev');
    const mainNext = document.getElementById('mainNext');
    const thumbnailPrev = document.getElementById('thumbnailPrev');
    const thumbnailNext = document.getElementById('thumbnailNext');

    let currentIndex = 0;

    // Update active state
    function updateActiveImage(index) {
        thumbnails.forEach((img, i) => {
            if (i !== index) {
                img.style.opacity = 0.5;
            } else {
                img.style.opacity = 1;
            }
            img.classList.remove('active');
        });
        thumbnails[index].classList.add('active');
        mainImage.src = thumbnails[index].src;  // Cập nhật ảnh chính
    }


    // Main image controls
    mainPrev.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        updateActiveImage(currentIndex);
    });

    mainNext.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        updateActiveImage(currentIndex);
    });

    // Thumbnail navigation
    thumbnailPrev.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        updateActiveImage(currentIndex);
        thumbnailContainer.scrollBy({ left: -100, behavior: 'smooth' });
    });

    thumbnailNext.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        updateActiveImage(currentIndex);
        thumbnailContainer.scrollBy({ left: 100, behavior: 'smooth' });
    });

    // Thumbnail click event
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function () {
            currentIndex = index;
            updateActiveImage(currentIndex);
        });
    });

    // Initialize first image as active
    updateActiveImage(currentIndex);


});
</script>

<style>
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