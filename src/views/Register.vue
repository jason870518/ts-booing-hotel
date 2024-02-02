<template>
    <div class="register-page">
        <nav class="top-nav">
            <div class="logo">
                <RouterLink class="go-order" to="/">
                    <img src="@/assets/img/logo.png" alt="" />
                </RouterLink>
            </div>
        </nav>
        <div class="content-wrap">
            <div class="img-wrap">
                <img src="@/assets/img/register.png" alt="" />
            </div>
            <div class="form-wrap">
                <div class="form-inner">
                    <div class="sub-title">享樂酒店，誠摯歡迎</div>
                    <div class="form-title">立即註冊</div>
                    <div class="steps">
                        <div class="step fill">
                            <div class="status">
                                <template v-if="currentStep === 1">1</template>
                                <template v-else>✓</template>
                            </div>
                            <div class="text">輸入信箱及密碼</div>
                        </div>
                        <div class="line"></div>
                        <div class="step" :class="{ fill: currentStep === 2 }">
                            <div class="status">2</div>
                            <div class="text">填寫基本資料</div>
                        </div>
                    </div>

                    <form class="form" action="">
                        <template v-if="currentStep === 1">
                            <label for="">電子信箱</label>
                            <input type="text" placeholder="" v-model="form.email"/>
                            <label for="">密碼</label>
                            <input type="password" placeholder="請輸入密碼" v-model="form.password"/>
                            <label for="">確認密碼</label>
                            <input type="password" placeholder="請再輸入一次密碼" v-model="form.checkPassword"/>

                            <button class="btn gray" @click.prevent="currentStep = 2">下一步</button>
                        </template>

                        <template v-if="currentStep === 2">
                            <label for="">姓名</label>
                            <input type="text" placeholder="請輸入姓名" v-model="form.name"/>
                            <label for="">手機號碼</label>
                            <input type="text" placeholder="請輸入手機號碼" v-model="form.phone"/>
                            <label for="">生日</label>
                            <div class="flex">
                                <select name="" id="" v-model="form.year">
                                    <option v-for="year in years" :key="year" :value="`${year}`">{{ year }}年</option>
                                </select>
                                <select name="" id="" v-model="form.month">
                                    <option v-for="month in months" :key="month" :value="`${month}`">{{ month }}月</option>
                                </select>
                                <select name="" id="" v-model="form.day">
                                    <option v-for="day in days" :key="day" :value="`${day}`">{{ day }}日</option>
                                </select>
                            </div>

                            <label for="">地址</label>
                            <div class="flex">
                                <select name="" id="" v-model="form.city" @change="selectCity">
                                    <option  v-for="(city, index) in cityData" :key="index" :value="city.CityName">{{ city.CityName }}</option>
                                </select>
                                <select name="" id="" v-model="form.address.zipcode">
                                    <option  v-for="(area, index) in areaData" :key="index" :value="area.ZipCode">{{ area.AreaName}}</option>
                                </select>
                            </div>

                            <input type="text" placeholder="請輸入詳細地址" v-model="form.address.detail" />

                            <label for="" class="read"
                                ><input type="checkbox" /> 我已閱讀並同意本站使用規範</label
                            >

                            <button class="btn yellow" @click.prevent="register">完成註冊</button>
                        </template>

                        <div class="has-account">已經有會員了嗎? <RouterLink to="/login">立即登入</RouterLink></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import router from "@/router";

import { useCommon } from "@/composables/useCommon"

import type { SignForm } from "@/types/User/user.types";
import { signup } from "@/api/User/auth";


let { cityData, years, months, days } = useCommon();

const currentStep = ref(1);

let form = ref<SignForm>({
    name: null,
    email: null,
    password: null,
    checkPassword: null,
    phone: null,
    year: null,
    month: null,
    day: null,
    birthday: null,
    city: null,
    area: null,
    address: {
        zipcode: null,
        detail: null,
    }
});

let areaData = ref([]);


const selectCity = (): void => {
    let { city } = form.value;
    let choice = cityData.value.find(item => city === item.CityName);

    areaData.value = choice.AreaList;
};

const register = async() => {
    let params:SignForm = {
        name: form.value.name,
        email: form.value.email,
        password: form.value.password,
        phone: form.value.phone,
        birthday: `${form.value.year}/${form.value.month}/${form.value.day}`,
        address: {
            zipcode: form.value.address.zipcode,
            detail: form.value.address.detail,
        }
    }

    const { status, result, token } = await signup(params);

    if(status) {
        localStorage.setItem("User", JSON.stringify(result));
        localStorage.setItem("Token", token);

        router.push('./room');
    }
};


</script>

<style lang="scss">
.register-page {
    display: flex;
    flex-direction: column;
    background-color: #000;
    height: 100vh;
    overflow: hidden;

    .top-nav {
        z-index: 99;
        padding: 10px;
        .logo {
            img {
                width: 200px;

                @media screen and (max-width: 850px) {
                    width: 150px;
                }
            }
        }
    }
    .content-wrap {
        flex: 1;
        min-height: 1px;
        display: flex;

        // overflow: auto;

        .img-wrap {
            width: 50%;

            @media screen and (max-width: 850px) {
                display: none;
            }
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
    .form-wrap {
        flex: 1;
        background-image: url("@/assets/img/line2.png");
        background-repeat: no-repeat;
        background-size: 100% auto;

        .sub-title {
            color: #bf9d7d;
            font-size: 0.7em;
            margin-bottom: 5px;
            display: none;
            @media screen and (max-width: 850px) {
                display: block;
            }
        }

        .form-title {
            color: #fff;
            font-weight: 700;
            font-size: 38px;
            margin-bottom: 20px;
            @media screen and (max-width: 850px) {
                font-size: 30px;
            }
        }
        .form-inner {
            max-width: 480px;
            margin: 0 auto;
            padding: 10px;
        }
        .steps {
            display: flex;
            align-items: center;
            margin-bottom: 40px;
            .step {
                text-align: center;
                opacity: 0.8;
                .status {
                    width: 30px;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    border: 1px solid #fff;
                    color: #fff;
                    border-radius: 50%;
                    display: inline-block;
                    margin-bottom: 20px;
                }
                .text {
                    color: #fff;
                    font-size: 0.7em;
                }

                &.fill {
                    opacity: 1;
                    .status {
                        background-color: #bf9d7d;
                        border: 1px solid #bf9d7d;
                        color: #fff;
                    }
                }
            }
            .line {
                flex: 1;
                height: 1px;
                background-color: #fff;
            }
        }
        .form {
            label {
                color: #fff;
                font-size: 0.8em;
                margin-top: 20px;
                display: block;
                margin-bottom: 10px;
            }
            input:not([type="checkbox"]),
            select {
                background-color: #fff;
                line-height: 45px;
                height: 45px;
                border-radius: 5px;
                padding: 0 15px;
                display: block;
                border: none;
                width: 100%;
                margin-bottom: 5px;
            }

            .flex {
                display: flex;
                input,
                select {
                    margin-right: 5px;
                    &:last-child {
                        margin-right: 0;
                    }
                }
            }
            .btn {
                width: 100%;
                background-color: #ccc;
                border: none;
                display: block;
                height: 45px;
                line-height: 45px;
                border-radius: 5px;
                padding: 0;
                margin-top: 30px;
                cursor: pointer;

                &.yellow {
                    background-color: #bf9d7d;
                    color: #fff;
                }
            }

            .read {
                color: #fff;
            }

            .has-account {
                font-size: 0.7em;
                margin-top: 20px;
                color: #fff;
                a {
                    color: #bf9d7d;
                }
            }
        }
    }
}
</style>
