<template>
    <div class="product-detail-header-bg">
        <div class="product-detail-header">
            <div class="breadcum">
                <div class="links">
                    <a href="#">Home &nbsp; <svg width="8" height="5" viewBox="0 0 8 5" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.6" d="M0.561 4.262V0.643L7.502 2.458L0.561 4.262Z" fill="#121212" />
                        </svg></a>
                    <a href="#">Women &nbsp; <svg width="8" height="5" viewBox="0 0 8 5" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.6" d="M0.561 4.262V0.643L7.502 2.458L0.561 4.262Z" fill="#121212" />
                        </svg></a>
                    <a>{{ dataHeader.productName }}</a>
                </div>
                <!-- iconn -->
                <div class="icons-share">
                    <a href="#"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.6">
                                <path
                                    d="M13.4998 7.20005C14.048 7.20007 14.5833 7.03319 15.0344 6.72161C15.4855 6.41003 15.831 5.96851 16.0251 5.45577C16.2191 4.94302 16.2525 4.38335 16.1207 3.85118C15.989 3.31901 15.6984 2.83956 15.2875 2.47658C14.8766 2.1136 14.365 1.8843 13.8206 1.81917C13.2763 1.75404 12.725 1.85617 12.2401 2.11197C11.7552 2.36777 11.3596 2.76512 11.1061 3.25119C10.8525 3.73725 10.7529 4.289 10.8205 4.83305L6.37449 7.05605C5.9931 6.68827 5.51193 6.44083 4.99091 6.34455C4.4699 6.24827 3.93208 6.30742 3.44444 6.51461C2.9568 6.72181 2.54089 7.0679 2.24854 7.50977C1.95618 7.95164 1.80029 8.46977 1.80029 8.9996C1.80029 9.52943 1.95618 10.0476 2.24854 10.4894C2.54089 10.9313 2.9568 11.2774 3.44444 11.4846C3.93208 11.6918 4.4699 11.7509 4.99091 11.6547C5.51193 11.5584 5.9931 11.3109 6.37449 10.9432L10.8205 13.1662C10.7417 13.7982 10.8889 14.4377 11.2361 14.9717C11.5832 15.5056 12.108 15.8997 12.7176 16.0842C13.3272 16.2687 13.9823 16.2318 14.5674 15.98C15.1524 15.7281 15.6295 15.2776 15.9145 14.708C16.1994 14.1384 16.2738 13.4864 16.1246 12.8673C15.9753 12.2481 15.612 11.7016 15.0988 11.3244C14.5856 10.9472 13.9556 10.7636 13.3201 10.806C12.6846 10.8484 12.0845 11.114 11.626 11.5561L7.17999 9.33305C7.20723 9.11189 7.20723 8.88822 7.17999 8.66705L11.626 6.44405C12.1102 6.91205 12.7708 7.20005 13.4998 7.20005Z"
                                    fill="#121212" />
                            </g>
                        </svg>
                        Share
                    </a>
                </div>
            </div>
            <div class="product-title">
                <h2>{{ dataHeader.productName }}</h2>
            </div>
            <div class="review-stock">
                <div class="reviews">
                    <div class="star">
                        <span v-for="star in dataHeader.maxStars" :key="star" class="fa"
                            :class="{ 'fa-star checked': star <= dataHeader.averageRating, 'fa-star-o': star > dataHeader.averageRating }">
                        </span>
                    </div>
                    <div class="count-review">
                        <span>{{ dataHeader.reviewLength }} Reviews</span>
                    </div>
                </div>
                <div class="stocks">
                    <span>SKU: <span style="color: green;">77</span></span> &nbsp; &nbsp;
                    <span>Availability: <span style="color: green;">In Stock</span></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const dataHeader = defineProps(['productName', 'reviewLength', 'averageRating', 'maxStars'])
console.log(dataHeader, 'products');

</script>

<style scoped>
.review-stock{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
}
.checked {
  color: #FFD700;
}

.reviews {
    display: flex;
    align-items: center;
    gap: 1rem;
}
.product-title h2 {
    text-align: center;
    /* margin: 1rem 0; */
}

.product-detail-header {
    max-width: calc(1440px - 170px);
    /* height: calc(100vh - 92px); */
    width: 100%;
    margin: auto;
    /* background-color: #F8F8F8; */
}
.product-detail-header-bg {
    background-color: #F8F8F8;
}
.breadcum {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    /* border-bottom: 1px solid #e0e0e0; */

}

.icons-share a {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
    color: #121212;
    opacity: 0.6;
}

.links {
    display: flex;
}

.product-detail-header .links a {
    text-decoration: none;
    color: #121212;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    margin-right: 5px;
    display: flex;
    align-items: center;
}
</style>