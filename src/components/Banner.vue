<template>
    <div class="banner">
        <div class="container">
            <div class="banner-content">
                <div class="main-banner">
                    <div class="img-container">
                        <!-- <img src="@/assets/images/banner.png" alt="Banner" /> -->
                        <img alt="Vue logo" src="@/assets/images/banner.png" />
                        <div class="img-content">
                            <span>
                                Banner
                            </span>
                            <h3>
                                Your title text
                            </h3>
                        </div>
                    </div>


                    <!-- <div id="controls-carousel" class="relative w-full" data-carousel="static">
                        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                            <div class="hidden duration-700 ease-in-out" style="height: 100%;" data-carousel-item>
                                <img src="@/assets/images/banner.png"
                                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-100" 
                                    alt="...">
                            </div>
                            <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                                <img src="@/assets/images/men.png"
                                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                    alt="...">
                            </div>
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="@/assets/images/women.png"
                                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                    alt="...">
                            </div>
                        
                        </div>
                        <button type="button"
                            class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            data-carousel-prev>
                            <span
                                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M5 1 1 5l4 4" />
                                </svg>
                                <span class="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button"
                            class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            data-carousel-next>
                            <span
                                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span class="sr-only">Next</span>
                            </span>
                        </button>
                    </div> -->

                </div>
                <div class="category-banner">
                    <div class="top">
                        <div class="img-container">
                            <img alt="Vue logo" src="@/assets/images/women.png" />
                            <div class="img-content">
                                Women
                            </div>
                        </div>
                        <div class="img-container">
                            <img alt="Vue logo" src="@/assets/images/men.png" />
                            <div class="img-content">
                                Men

                            </div>
                        </div>
                    </div>
                    <div class="botom">
                        <div class="img-container">
                            <img alt="Vue logo" src="@/assets/images/accessories.png" />
                            <div class="img-content">
                                Women
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="banner-services">
                <div class="service">
                    <span class="icon">
                        <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.6667 19.6667V3.00004C17.6667 2.55801 17.4911 2.13409 17.1785 1.82153C16.8659 1.50897 16.442 1.33337 16 1.33337H2.66667C2.22464 1.33337 1.80072 1.50897 1.48816 1.82153C1.17559 2.13409 1 2.55801 1 3.00004V19.6667C1 20.1087 1.17559 20.5327 1.48816 20.8452C1.80072 21.1578 2.22464 21.3334 2.66667 21.3334H4.33333M17.6667 19.6667C17.6667 20.1087 17.4911 20.5327 17.1785 20.8452C16.8659 21.1578 16.442 21.3334 16 21.3334H11M17.6667 19.6667V6.33337C17.6667 5.89135 17.8423 5.46742 18.1548 5.15486C18.4674 4.8423 18.8913 4.66671 19.3333 4.66671H23.6433C24.0853 4.6668 24.5092 4.84246 24.8217 5.15504L30.5117 10.845C30.8242 11.1575 30.9999 11.5814 31 12.0234V19.6667C31 20.1087 30.8244 20.5327 30.5118 20.8452C30.1993 21.1578 29.7754 21.3334 29.3333 21.3334H27.6667M17.6667 19.6667C17.6667 20.1087 17.8423 20.5327 18.1548 20.8452C18.4674 21.1578 18.8913 21.3334 19.3333 21.3334H21M4.33333 21.3334C4.33333 22.2174 4.68452 23.0653 5.30964 23.6904C5.93477 24.3155 6.78261 24.6667 7.66667 24.6667C8.55072 24.6667 9.39857 24.3155 10.0237 23.6904C10.6488 23.0653 11 22.2174 11 21.3334M4.33333 21.3334C4.33333 20.4493 4.68452 19.6015 5.30964 18.9764C5.93477 18.3512 6.78261 18 7.66667 18C8.55072 18 9.39857 18.3512 10.0237 18.9764C10.6488 19.6015 11 20.4493 11 21.3334M27.6667 21.3334C27.6667 22.2174 27.3155 23.0653 26.6904 23.6904C26.0652 24.3155 25.2174 24.6667 24.3333 24.6667C23.4493 24.6667 22.6014 24.3155 21.9763 23.6904C21.3512 23.0653 21 22.2174 21 21.3334M27.6667 21.3334C27.6667 20.4493 27.3155 19.6015 26.6904 18.9764C26.0652 18.3512 25.2174 18 24.3333 18C23.4493 18 22.6014 18.3512 21.9763 18.9764C21.3512 19.6015 21 20.4493 21 21.3334"
                                stroke="#121212" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </span>
                    <div class="details">
                        <h3>Free Shipping</h3>
                        <p>On all UA order or order above $100</p>
                    </div>
                </div>
                <div class="service">
                    <span class="icon">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.8">
                                <path
                                    d="M7.63666 14.9999H6.66666V6.66659L7.63666 14.9999ZM7.63666 14.9999C8.74307 12.2635 10.7261 9.97143 13.275 8.48302C15.8239 6.99461 18.7947 6.39394 21.7216 6.77515C24.6485 7.15637 27.3663 8.49791 29.4489 10.5895C31.5316 12.6812 32.8614 15.4047 33.23 18.3333M7.63666 14.9999H15M32.365 24.9999H33.3333V33.3333L32.365 24.9999ZM32.365 24.9999C31.257 27.7348 29.2734 30.025 26.7247 31.5121C24.1761 32.9992 21.2062 33.5991 18.2802 33.218C15.3541 32.837 12.637 31.4964 10.5542 29.4061C8.47144 27.3159 7.14058 24.594 6.76999 21.6666M32.365 24.9999H25"
                                    stroke="#121212" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </svg>


                    </span>
                    <div class="details">
                        <h3>30 DAYS RETURN</h3>
                        <p>Simply return it within 30 days for an exchange</p>
                    </div>
                </div>
                <div class="service">
                    <span class="icon">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.8">
                                <path
                                    d="M30.6067 9.39333L24.7133 15.2867L30.6067 9.39333ZM24.7133 24.7133L30.6067 30.6067L24.7133 24.7133ZM15.2867 15.2867L9.39333 9.39333L15.2867 15.2867ZM15.2867 24.7133L9.39333 30.6067L15.2867 24.7133ZM35 20C35 21.9698 34.612 23.9204 33.8582 25.7403C33.1044 27.5601 31.9995 29.2137 30.6066 30.6066C29.2137 31.9995 27.5601 33.1044 25.7403 33.8582C23.9204 34.612 21.9698 35 20 35C18.0302 35 16.0796 34.612 14.2597 33.8582C12.4399 33.1044 10.7863 31.9995 9.3934 30.6066C8.00052 29.2137 6.89563 27.5601 6.14181 25.7403C5.38799 23.9204 5 21.9698 5 20C5 16.0218 6.58035 12.2064 9.3934 9.3934C12.2064 6.58035 16.0218 5 20 5C23.9782 5 27.7936 6.58035 30.6066 9.3934C33.4196 12.2064 35 16.0218 35 20ZM26.6667 20C26.6667 21.7681 25.9643 23.4638 24.714 24.714C23.4638 25.9643 21.7681 26.6667 20 26.6667C18.2319 26.6667 16.5362 25.9643 15.286 24.714C14.0357 23.4638 13.3333 21.7681 13.3333 20C13.3333 18.2319 14.0357 16.5362 15.286 15.286C16.5362 14.0357 18.2319 13.3333 20 13.3333C21.7681 13.3333 23.4638 14.0357 24.714 15.286C25.9643 16.5362 26.6667 18.2319 26.6667 20V20Z"
                                    stroke="#121212" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </svg>


                    </span>
                    <div class="details">
                        <h3>SUPPORT 24/7</h3>
                        <p>Contact us 24 hours a day, 7 days a week</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
img {
    /* height: 100%; */
    /* width: 100%; */
    /* object-fit: cover; */
}

.banner {
    border-bottom: 2px solid #f8f8f8;
    margin-bottom: 40px;
}

.banner .container {
    max-width: calc(1440px - 170px);
    /* height: calc(100vh - 92px); */
    width: 100%;
    margin: auto;
}

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
    line-height: 25px;
    font-size: 22px;
    font-weight: 600;
    color: #121212;
    text-transform: uppercase;
    margin-top: 5px;
}

.category-banner .top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}

.category-banner .top>div {
    flex: 0 0 calc(50% - 20px);
    max-width: calc(50% - 20px);
    width: 100%;
}

.banner-services {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    align-items: center;
}

.banner-services .service {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.banner-services .service .icon {
    height: 32px;
    width: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
}

.banner-services .service .details h3 {
    font-size: 18px;
    font-weight: 600;
    color: #121212;
    text-transform: uppercase;
}

.banner-services .service .details p {
    font-size: 14px;
    font-weight: 400;
    color: #121212;
    opacity: 0.6;
}
</style>