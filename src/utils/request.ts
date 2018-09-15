import axios from "axios";
import { notification } from "antd";
import stores from "stores";
import constant from "./constant";

const service = axios.create({
  baseURL: process.env.REACT_APP_GATEWAY_URL, // api的base_url
  timeout: 20000 // 请求超时时间
});

service.interceptors.request.use(
  config => {
    // 是否存在
    const accessToken = localStorage.getItem(constant.AUTH_TOKEN);
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  error => {
    // Do something with request error
    throw Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const { status } = error.response;
    if (status === 401) {
      // 未登录，直接弹出
      stores.appStore.logout();
    }
    if (status === 403) {
      // TODO 跳转到无权限页面
      notification.error({
        message: "你没有权限访问",
        description: "权限不足以访问此页面"
      });
    }
    throw error;
    // message.error(error.message, 2)
  }
);

export default service;
