import { createDiscreteApi } from "naive-ui";
import router from "@/router/index";

const { notification } = createDiscreteApi(["notification"]);

export const tip = (msg: string) => {   //  錯誤msg消息提示
    notification["error"]({
        content: "錯誤",
        meta: msg,
        duration: 3500,
        keepAliveOnHover: true,
    });
};


export const toLogin = () => {  //  跳轉回首頁，攜帶當前頁面路由，登入完成後跳轉回原本頁面
    router.push({ path: "/" });
};
