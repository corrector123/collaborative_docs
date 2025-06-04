// 用户相关API
import { fetch } from "@/core/index.js";

export const login_API = (data) => {
  return fetch({
    url: "/user/login",
    method: "post",
    data,
  });
};

export const register_API = (data) => {
  return fetch({
    url: "/user/register",
    method: "post",
    data,
  });
};

export const findUser_API = (data) => {
  return fetch({
    url: "/user/findUser",
    method: "post",
    data,
  });
};
