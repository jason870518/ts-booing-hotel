import axios from 'axios';
import type { AxiosInstance, InternalAxiosRequestConfig, AxiosRequestConfig, AxiosResponse } from "axios";

import { tip, toLogin } from "./utils";
import { showLoading, hideLoading } from '@/components/Loading/Loading'

const errorHandle = (status: number | string, msg: string) => {
    switch (status) {
        // 400: 程式邏輯錯誤
        case 400:
            tip(msg);

            break;

        // 401: token 過期
        case 401:
            tip(msg);

            toLogin();

            break;

        // 403: 登入驗證失敗
        case 403:
            tip("登入失敗。");

            break;

        // 404: 找不到網頁
        case 404:
            tip("A 404 ERROR，請聯繫系統管理員。");

            break;

        // 500: Server Error
        case 500:
            tip("500 Internal Server Error，請聯繫系統管理員。");

            break;

        default:
            console.error("沒有攔截到的錯誤:" + msg);
    }
};

//  axios 實例
const instance: AxiosInstance = axios.create({
    baseURL: 'https://booking-api-vh13.onrender.com',
    timeout: 300000
});

//  request 攔截器
instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig<any> => {
        showLoading();

        let headers = {
            // "Authorization":"Bearer " + VueCookies.get("AUTH_TOKEN"),
            "Content-Type":"application/json; charset=utf-8"
        }

        config = { ...headers, ...config }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

//  response 攔截器
instance.interceptors.response.use(
    (config: AxiosResponse) => {
        hideLoading();

        return config;
    },
    (error) => {
        hideLoading();
        const { response } = error;
        if (response) {
            // 成功發出請求且收到 response，但有 error
            errorHandle(response.status, response.data.message);
            return Promise.reject(error);
        } else {
            //  成功發出請求但沒收到 response
            if (!window.navigator.onLine) {
                // 如果網路斷線
                tip("網路出了點問題，請重新連線後刷新網頁。");
            } else {
                // 可能是跨域或是程式問題
                tip("系統程式發生錯誤，請聯繫系統管理員。");
                return Promise.reject(error);
            }
        }
    }
);


const req = {
    get<T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<T> {
        return instance.get(url, { params, ...config });
    },
    post<T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<T> {
        return instance.post(url, params, config);
    },
    put<T>(url: string, params?: object): Promise<T> {
        return instance.put(url, params);
    },
    patch<T>(url: string, params?: object): Promise<T> {
        return instance.patch(url, params);
    },
    delete<T>(url: string, params?: object): Promise<T> {
        return instance.delete(url, {  data: params });
    },
}

export default req;
