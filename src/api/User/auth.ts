import req from "../http";

import type { SignForm, User } from "@/types/User/user.types";

export const login = (params: any) => {
    return req.post<User>(`/api/v1/user/login`, params);
};

export const signup = (params: SignForm) => {
    return req.post<User>(`/api/v1/user/signup`, params);
};
