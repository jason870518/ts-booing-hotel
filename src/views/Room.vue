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
                    <RouterLink to="/register">Jessica</RouterLink>
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
                        <div class="title">客房旅宿</div>
                    </div>
                </div>
            </div>
        </div>

        <section class="room-section">
            <div class="section-inner">
                <div class="section-sub-title">房型選擇</div>
                <div class="section-title">各種房型，任您挑選</div>

                <div class="room-list">
                    <div class="room" v-for="item in 10">
                        <div class="img-wrap">
                            <carousel :items-to-show="1">
                                <slide v-for="slide in 10" :key="slide">
                                    <div class="s-img">
                                        <img src="@/assets/img/room2-1.png" alt="" />
                                    </div>
                                </slide>

                                <template #addons>
                                    <navigation />
                                    <pagination />
                                </template>
                            </carousel>
                        </div>

                        <div class="room-info">
                            <div class="name">尊爵雙人房</div>
                            <div class="desc">
                                享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
                            </div>

                            <div class="detail-list">
                                <span>24坪</span>
                                <span>一張大床</span>
                                <span>2-4人</span>
                            </div>

                            <div class="line"></div>

                            <div class="price">
                                <span>NT$ 10,000</span>

                                <span>→</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

<script lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { ref } from "vue";
export default {
    name: "App",
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    setup() {
        const menuOpen = ref(false);
        return { menuOpen };
    },
};
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
.room-section {
    background-color: #f7f2ee;
    padding: 60px 10px;
    .section-inner {
        max-width: 1160px;
        margin: 0 auto;
    }

    .section-title {
        color: #bf9d7d;
        font-size: 42px;
        font-weight: 700;
        margin-bottom: 40px;
    }
    .section-sub-title {
        font-size: 16px;
    }

    .room-list {
        ::v-deep .carousel__track {
            margin: 0;
        }

        ::v-deep .carousel__pagination {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
        }
        .room {
            background-color: #fff;
            display: flex;
            overflow: hidden;
            border-radius: 10px;
            margin-bottom: 30px;

            @media screen and (max-width: 850px) {
                display: block;
            }

            .img-wrap {
                width: 40%;
                @media screen and (max-width: 850px) {
                    width: 100%;
                }
                .s-img {
                    width: 100%;
                    height: 325px;
                    @media screen and (max-width: 850px) {
                        height: auto;
                    }
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }
            .room-info {
                flex: 1;
                padding: 30px;
                @media screen and (max-width: 850px) {
                    padding: 15px;
                }
                .name {
                    font-size: 32px;
                    font-weight: 700;
                    margin-bottom: 15px;
                }
                .desc {
                    font-size: 16px;
                    margin-bottom: 30px;
                }
                .detail-list {
                    span {
                        display: inline-block;
                        border: 1px solid #f1eae4;
                        padding: 15px 10px;
                        border-radius: 5px;
                        margin-right: 10px;
                    }

                    @media screen and (max-width: 850px) {
                        display: flex;
                        justify-content: space-between;
                    }
                }

                .line {
                    display: block;
                    background: linear-gradient(90deg, rgba(#be9c7c, 1) 0%, rgba(#fff, 1) 100%);
                    height: 2px;
                    width: 100%;
                    margin: 30px 0;
                }

                .price {
                    display: flex;
                    justify-content: space-between;
                    color: #bf9d7d;
                    font-size: 20px;
                }
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
        max-width: 960px;
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
                margin-right: 0;
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
            color: #fff;
            .blur-wrap-inner {
                position: relative;
                left: -70px;

                @media screen and (max-width: 850px) {
                    left: 0;
                    text-align: center;
                }
                .title {
                    font-size: 40px;
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
</style>
