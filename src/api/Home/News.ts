import req from "../http";

import type { New } from "@/types/Home/home.types";

export const getNews = () => {      //  取得最新消息
    return req.get<New>(`/api/v1/home/news`);
};
