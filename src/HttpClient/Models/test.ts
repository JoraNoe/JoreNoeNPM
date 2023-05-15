
// import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// interface ResponseData<T = any> {
//   code: number;
//   message: string;
//   data: T;
// }

// // 创建 axios 实例
// const service = axios.create({
//   baseURL: "http://localhost:3000",
//   timeout: 5000,
// });

// // 添加请求拦截器
// service.interceptors.request.use(
//   (config: AxiosRequestConfig) => {
//     // 可以在这里对请求做一些处理，例如添加请求头
//     config.headers["Content-Type"] = "application/json;charset=UTF-8";
//     return config;
//   },
//   (error: any) => {
//     Promise.reject(error);
//   }
// );

// // 添加响应拦截器
// service.interceptors.response.use(
//   (response: AxiosResponse<ResponseData>) => {
//     // 可以在这里对响应做一些处理，例如检查返回的状态码
//     const res = response.data;
//     if (res.code !== 200) {
//       console.error("请求失败：", res.message);
//     }
//     return res.data;
//   },
//   (error: any) => {
//     Promise.reject(error);
//   }
// );

// // GET 方法封装
// export function get<T = any>(url: string, params?: any): Promise<T> {
//   return service.get<ResponseData<T>>(url, {
//     params,
//   });
// }

// // PUT 方法封装
// export function put<T = any>(url: string, data?: any): Promise<T> {
//   return service.put<ResponseData<T>>(url, data);
// }

// // DELETE 方法封装
// export function del<T = any>(url: string): Promise<T> {
//   return service.delete<ResponseData<T>>(url);
// }

// // POST 方法封装
// export function post<T = any>(url: string, data?: any): Promise<T> {
//   return service.post<ResponseData<T>>(url, data);
// }
