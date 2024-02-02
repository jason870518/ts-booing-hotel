<template>
    <div class="home-page">
        <nav class="top-nav">
            <div class="logo">
                <img src="@/assets/img/logo.png" alt="" />
            </div>

            <span class="menu-btn" @click="menuOpen = !menuOpen">
                <template v-if="!menuOpen">☰</template>
                <template v-else>X</template>
            </span>
            <div class="link" :class="{ open: menuOpen }">
                <div class="link-inner">
                    <RouterLink to="/">客房旅宿</RouterLink>
                    <RouterLink to="/login">會員登入</RouterLink>
                    <RouterLink class="go-order" to="/about">立即訂房</RouterLink>
                </div>
            </div>
        </nav>
        <div class="banner">
            <img src="@/assets/img/banner.png" alt="" />

            <div class="banner-text">
                <div class="name">
                    享樂酒店<br />
                    <span>Enjoyment Luxury Hotel</span>
                </div>
                <div class="blur-wrap">
                    <div class="blur-wrap-inner">
                        <div class="title">
                            高雄<br />
                            豪華住宿之選
                        </div>

                        <span class="desc">我們致力於為您提供無與倫比的奢華體驗與優質服務</span>

                        <RouterLink class="go-to-order-btn" to="/about"
                            >立即訂房 ———————</RouterLink
                        >
                    </div>
                </div>
            </div>
        </div>

        <section class="news-section">
            <div class="section-inner">
                <img class="top-dot" src="@/assets/img/dot.png" alt="" />
                <div class="section-title">最新<br />消息</div>

                <div class="news-list">
                    <div class="news">
                        <img src="@/assets/img/news1.png" alt="" />
                        <div class="news-text">
                            <div class="title">秋季旅遊，豪華享受方案</div>
                            <div class="desc">
                                秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。
                            </div>
                        </div>
                    </div>

                    <div class="news">
                        <img src="@/assets/img/news2.png" alt="" />
                        <div class="news-text">
                            <div class="title">輕鬆住房專案</div>
                            <div class="desc">
                                我們知道，有時候您只是需要一個舒適的地方放鬆心情。因此，我們推出了「輕鬆住房專案」，讓您無壓力地享受住宿。不管是短期的休息，還是長期的住宿，我們都會以最貼心的服務，讓您感到賓至如歸。
                            </div>
                        </div>
                    </div>

                    <div class="news">
                        <img src="@/assets/img/news3.png" alt="" />
                        <div class="news-text">
                            <div class="title">耶誕快樂，住房送禮</div>
                            <div class="desc">
                                聖誕節來臨，我們為您準備了特別的禮物！在聖誕期間訂房，不僅有特別優惠，還會送上我們精心準備的聖誕禮物。讓我們一起慶祝這個溫馨的節日吧！
                            </div>
                        </div>
                    </div>
                </div>

                <img class="bottom-dot" src="@/assets/img/dot.png" alt="" />
            </div>
        </section>

        <div style="background-color: #000; height: 100px"></div>
        <section class="about-section">
            <div class="text-wrap">
                <div class="title">
                    <span
                        >關於
                        <br />
                        我們</span
                    >
                </div>
                <div class="desc">
                    享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。<br />
                    我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。
                    <br />

                    們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。<br />
                    我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。
                    <br />

                    在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。<br />

                    享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。<br />
                </div>
            </div>
        </section>

        <div style="background-color: #000; height: 200px"></div>

        <section class="room-section">
            <img src="@/assets/img/room1.png" alt="" />

            <div class="info">
                <div class="img-wrap">
                    <img src="@/assets/img/line3.png" alt="" />
                </div>
                <div class="text-wrap">
                    <div class="name">尊爵雙人房</div>
                    <div class="desc">
                        享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
                    </div>
                    <div class="price">NT$ 10,000</div>

                    <a href="#" class="view-more">查看更多 ———————</a>
                </div>
            </div>
        </section>

        <section class="food-section">
            <div class="section-title">
                <span>佳餚<br />美饌</span>
            </div>

            <carousel :items-to-show="4">
                <slide v-for="slide in 10" :key="slide">
                    <div class="slide-wrap">
                        <div class="side-wrap-inner">
                            <img src="@/assets/img/food1.png" alt="" />
                            <div class="text-wrap">
                                <div class="info">
                                    <span class="title">海霸</span>
                                    <span class="time">SUN-MON 11:00-20:30</span>
                                </div>

                                <div class="desc">
                                    以新鮮海產料理聞名，我們的專業廚師選用高雄當地的海鮮，每一道菜都充滿海洋的鮮美與清甜。無論是烤魚、蒸蝦還是煮蛤蜊，都能讓您品嚐到最新鮮的海洋風味。
                                </div>
                            </div>
                        </div>
                    </div>
                </slide>

                <template #addons>
                    <navigation />
                    <pagination />
                </template>
            </carousel>
        </section>

        <section class="map-section">
            <div class="section-inner">
                <div class="section-title">
                    <span>交通<br />方式</span>
                </div>

                <div class="address">台灣高雄市新興區六角路123號</div>

                <img class="map" src="@/assets/img/map.png" alt="" />

                <div class="info-list">
                    <div class="info">
                        <div class="title">自行開車</div>
                        <div class="desc">
                            如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。
                        </div>
                    </div>
                    <div class="info">
                        <div class="title">高鐵/火車</div>
                        <div class="desc">
                            如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。
                        </div>
                    </div>
                    <div class="info">
                        <div class="title">禮賓車服務</div>
                        <div class="desc">
                            承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567
                        </div>
                    </div>
                </div>
            </div>
            <img class="line" src="@/assets/img/line2.png" />
        </section>

        <section class="footer-section">
            <div class="section-inner">
                <div class="flex-wrap">
                    <div class="logo-wrap">
                        <img src="@/assets/img/logo.png" alt="" />
                    </div>
                    <table class="info-wrap">
                        <tr>
                            <td class="info">
                                <label>TEL</label>
                                +886-7-1234567
                            </td>
                            <td class="info">
                                <label>MAIL</label>
                                elh@hexschool.com
                            </td>
                        </tr>
                        <tr>
                            <td class="info">
                                <label>FAX</label>
                                +886-7-1234567
                            </td>
                            <td class="info">
                                <label>WEB</label>
                                www.elhhexshcool.com.tw
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="copy-right-wrap">
                    <span>806023 台灣高雄市新興區六角路123號</span>
                    <span>© 享樂酒店 2023 All Rights Reserved.</span>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts" setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { ref } from "vue";

const menuOpen = ref(false);
</script>

<style lang="scss" scoped>
.footer-section {
    background-color: #140f0a;
    color: #fff;
    font-size: 0.8em;
    padding-bottom: 30px;

    .section-inner {
        max-width: 1160px;
        margin: 0 auto;
        @media screen and (max-width: 850px) {
            padding: 10px;
        }
    }

    .flex-wrap {
        display: flex;
        @media screen and (max-width: 850px) {
            display: block;
        }

        .logo-wrap {
            flex: 1;
            img {
                width: 200px;
            }
        }
        .info-wrap {
            .info {
                padding: 20px;
                padding-right: 0;
                @media screen and (max-width: 850px) {
                    display: block;
                }

                label {
                    font-size: 1.2em;
                    font-weight: 700;
                    display: block;
                }
            }
        }
    }
    .copy-right-wrap {
        display: flex;
        justify-content: space-between;
        @media screen and (max-width: 850px) {
            display: block;
            margin-top: 40px;

            span {
                display: block;
            }
        }
    }
}
.map-section {
    background-color: #140f0a;
    padding: 60px 0;

    @media screen and (max-width: 850px) {
        padding: 60px 10px;
    }
    .section-inner {
        max-width: 1160px;
        margin: 0 auto;
        .section-title {
            color: #bf9d7d;
            font-size: 32px;
            font-weight: 700;
            margin-right: 70px;
            letter-spacing: 5px;

            span {
                display: inline-block;
                vertical-align: middle;
            }
            &:after {
                content: "";
                display: inline-block;
                vertical-align: middle;
                width: 100px;
                background: rgb(191, 157, 125);
                background: linear-gradient(
                    90deg,
                    rgba(191, 157, 125, 1) 0%,
                    rgba(191, 157, 125, 0) 100%
                );
                height: 2px;
            }
        }
        .address {
            font-size: 0.8em;
            color: #fff;
            margin-top: 30px;
            margin-bottom: 10px;
        }
        .map {
            width: 100%;
            margin-bottom: 20px;
        }
        .info-list {
            display: flex;
            @media screen and (max-width: 850px) {
                display: block;
            }
            .info {
                flex: 1;
                color: #fff;
                padding: 0 20px;
                margin-bottom: 20px;
                .title {
                    font-size: 1.5em;
                    font-weight: 700;

                    @media screen and (max-width: 850px) {
                        font-size: 1.1em;
                    }
                }
                .desc {
                    font-size: 0.8em;
                    line-height: 175%;
                    font-weight: 100;
                }
            }
        }
    }
    .line {
        width: 100%;
        margin-top: 40px;
    }
}
.food-section {
    background-color: #f7f2ee;
    padding: 40px 0;
    background-image: url("@/assets/img/line.png");
    background-position: left center;
    background-size: 150px auto;
    background-repeat: no-repeat;
    padding-left: 200px;

    @media screen and (max-width: 850px) {
        padding-left: 0;
        background-image: none;
    }

    .section-title {
        color: #bf9d7d;
        font-size: 32px;
        font-weight: 700;
        margin-right: 70px;
        letter-spacing: 5px;
        @media screen and (max-width: 850px) {
            font-size: 20px;
            margin-left: 10px;
        }

        span {
            display: inline-block;
            vertical-align: middle;
        }
        &:after {
            content: "";
            display: inline-block;
            vertical-align: middle;
            width: 100px;
            background: rgb(191, 157, 125);
            background: linear-gradient(
                90deg,
                rgba(191, 157, 125, 1) 0%,
                rgba(191, 157, 125, 0) 100%
            );
            height: 2px;
        }
    }
    .slide-wrap {
        padding: 10px;
        .side-wrap-inner {
            position: relative;
            border-radius: 10px;
            overflow: hidden;
            img {
                width: 100%;
            }
            .text-wrap {
                position: absolute;
                bottom: 0;
                left: 0;
                padding: 20px;
                background: linear-gradient(180deg, rgba(#140f0a, 0.1) 0%, rgba(#140f0a, 0.8) 100%);
                color: #fff;
                backdrop-filter: blur(5px);
                .info {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 10px;
                    .title {
                        font-size: 1.2em;
                        font-weight: bold;
                    }
                }
                .desc {
                    text-align: left;
                    line-height: 175%;
                }
            }
        }
    }
}
.room-section {
    background-color: #000;
    display: flex;
    background-image: url("@/assets/img/bg.png");
    background-size: 100% auto;
    background-position: bottom;
    background-repeat: no-repeat;
    @media screen and (max-width: 850px) {
        display: block;
        padding: 10px;
    }
    img {
        width: 50%;
        @media screen and (max-width: 850px) {
            width: 100%;
        }
    }
    .info {
        color: #fff;
        width: 50%;
        display: flex;
        flex-direction: column;
        @media screen and (max-width: 850px) {
            width: 100%;
        }

        .img-wrap {
            flex: 1;
            img {
                width: 100%;
            }
        }
        .text-wrap {
            padding: 40px;
            max-width: 490px;
            @media screen and (max-width: 850px) {
                max-width: 100%;
                padding: 0;
            }

            .name {
                font-weight: 700;
                font-size: 40px;
            }
            .desc {
                font-weight: 500;
                font-size: 14px;
                margin-bottom: 20px;
            }
            .price {
                font-weight: 700;
                font-size: 32px;
                margin-bottom: 20px;
            }
            .view-more {
                padding: 15px 20px;
                display: block;
                text-decoration: none;
                border-radius: 5px;
                text-align: right;
                color: #000;
                background-color: #fff;
            }
        }
    }
}
.about-section {
    background-image: url("@/assets/img/about.png");
    background-size: cover;
    padding: 20px;
    padding-top: 60px;
    .text-wrap {
        max-width: 960px;
        margin: 0 auto;
        border-radius: 25px 25px 0 25px;
        backdrop-filter: blur(5px);
        box-shadow: -1px 1px 0 #fff;
        background: linear-gradient(90deg, rgba(#140f0a, 0.8) 0%, rgba(#be9c7c, 0.8) 100%);
        padding: 40px;
        color: #fff;
        margin-bottom: -70px;
        .title {
            font-weight: 700;
            font-size: 48px;
            margin-bottom: 20px;
            @media screen and (max-width: 850px) {
                font-size: 20px;
            }

            span {
                display: inline-block;
                vertical-align: middle;
                margin-right: 40px;
            }

            &::after {
                content: "";
                width: 200px;
                height: 1px;
                background-color: #fff;
                vertical-align: middle;
                display: inline-block;
            }
        }
        .desc {
            @media screen and (max-width: 850px) {
                font-size: 12px;
                line-height: 175%;
            }
        }
    }
}
.home-page {
    font-family: "Noto Serif TC";
}
.top-nav {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    z-index: 99;
    .logo {
        img {
            width: 200px;
        }
    }

    .menu-btn {
        display: none;
        position: relative;
        z-index: 1;
        color: #fff;
        cursor: pointer;
        @media screen and (max-width: 850px) {
            display: block;
        }
    }
    .link {
        .link-inner {
            @media screen and (max-width: 850px) {
                flex: 1;
                padding: 20px;
            }
        }
        a {
            text-decoration: none;
            color: #fff;
            font-size: 0.8em;
            font-weight: 400;
            margin-left: 10px;
            border-radius: 5px;
            padding: 10px 20px;
            letter-spacing: 2px;
            @media screen and (max-width: 850px) {
                margin-left: 0px;
                margin-bottom: 10px;
            }
        }
        a.go-order {
            background-color: #bf9d7d;
        }

        @media screen and (max-width: 850px) {
            position: fixed;
            left: 0;
            top: 0;
            height: 100vh;
            background-color: #000;
            width: 100vw;
            display: flex;
            align-items: center;
            transform: translate(-100%);
            transition: all 0.3s;

            &.open {
                transform: translate(0);
            }

            a {
                display: block;
                text-align: center;
            }
        }
    }
}
.banner {
    height: 100vh;
    position: relative;
    &::after {
        content: "";
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .banner-text {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        z-index: 2;
        width: 90%;
        align-items: center;
        .name {
            flex: 1;
            margin-right: 100px;
            color: #bf9d7d;
            font-size: 40px;
            font-weight: 700;

            @media screen and (max-width: 850px) {
                font-size: 20px;
            }

            span {
                font-size: 24px;
                margin-bottom: 30px;
                display: block;
                @media screen and (max-width: 850px) {
                    font-size: 12px;
                }
            }

            &:after {
                content: "";
                display: block;
                background: rgb(191, 157, 125);
                background: linear-gradient(
                    90deg,
                    rgba(191, 157, 125, 1) 0%,
                    rgba(255, 255, 255, 1) 100%
                );
                height: 2px;
                @media screen and (max-width: 850px) {
                    height: 50px;
                    width: 2px;
                    display: inline-block;
                }
            }

            @media screen and (max-width: 850px) {
                text-align: center;
            }
        }

        .blur-wrap {
            border-radius: 25px;
            backdrop-filter: blur(5px);
            box-shadow: 1px -1px 0 #fff;
            background-color: rgba(#fff, 0.1);
            padding: 40px;
            color: #fff;
            .blur-wrap-inner {
                position: relative;
                left: -70px;

                @media screen and (max-width: 850px) {
                    left: -50px;
                }
                .title {
                    font-size: 70px;
                    font-weight: 700;
                    line-height: 120px;
                    margin-bottom: 10px;
                    letter-spacing: 3px;
                    @media screen and (max-width: 850px) {
                        font-size: 30px;
                        line-height: 40px;
                    }
                }
                .desc {
                    display: block;
                    font-size: 26px;
                    font-weight: 600;
                    margin-bottom: 20px;
                    letter-spacing: 3px;

                    @media screen and (max-width: 850px) {
                        font-size: 12px;
                        font-weight: 100;
                    }
                }
                .go-to-order-btn {
                    display: block;
                    background-color: #fff;
                    text-decoration: none;
                    padding: 20px;
                    text-align: right;
                    border-radius: 5px;
                    color: #000;
                }
            }
        }

        @media screen and (max-width: 850px) {
            display: block;
        }
    }
}

.news-section {
    background-color: #f7f2ee;
    padding: 100px;
    @media screen and (max-width: 850px) {
        padding: 100px 10px;
    }
    .section-inner {
        display: flex;
        max-width: 1160px;
        position: relative;
        margin: 0 auto;
        @media screen and (max-width: 850px) {
            display: block;
        }
        .section-title {
            color: #bf9d7d;
            font-size: 48px;
            font-weight: 700;
            margin-right: 70px;
            letter-spacing: 5px;
            @media screen and (max-width: 850px) {
                font-size: 20px;
            }

            &:after {
                content: "";
                display: block;
                background: rgb(191, 157, 125);
                background: linear-gradient(
                    90deg,
                    rgba(191, 157, 125, 1) 0%,
                    rgba(191, 157, 125, 0) 100%
                );
                height: 2px;
                @media screen and (max-width: 850px) {
                    width: 70px;
                }
            }
        }

        .news-list {
            flex: 1;
            position: relative;
            z-index: 5;
            .news {
                display: flex;
                align-items: center;
                margin-bottom: 40px;
                @media screen and (max-width: 850px) {
                    display: block;
                }
                img {
                    border-radius: 5px;
                    width: 474px;
                    margin-right: 20px;
                    @media screen and (max-width: 850px) {
                        margin-right: 0;
                        width: 100%;
                    }
                }

                .news-text {
                    .title {
                        font-size: 32px;
                        font-weight: 700;
                        margin-bottom: 20px;

                        @media screen and (max-width: 850px) {
                            font-size: 20px;
                        }
                    }
                    .desc {
                        font-size: 16px;
                        font-weight: 500;
                        @media screen and (max-width: 850px) {
                            font-size: 12px;
                        }
                    }
                }
            }
        }

        .top-dot {
            position: absolute;
            width: 200px;
            right: 0;
            top: 0;

            @media screen and (max-width: 850px) {
                width: 70px;
            }
        }
        .bottom-dot {
            position: absolute;
            width: 200px;
            left: 0;
            bottom: 0;
        }
    }
}
</style>
