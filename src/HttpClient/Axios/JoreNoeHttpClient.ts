import axios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';

// 封装 Axios Get、Put、Delete、Post 操作
export class JoreNoeAxiosHttpClient {

    // axios 实例
    public _instance: AxiosInstance
    // 默认配置
    private _defaultConfig: AxiosRequestConfig = {
        baseURL: '/api',
        timeout: 5000
    }
    constructor(config: AxiosRequestConfig, interceptorsRequest?, interceptorsResponse?) {
        // 使用axios.create创建axios实例
        this._instance = axios.create(Object.assign(this._defaultConfig, config))
        // this._instance.interceptors.request.use(interceptorsRequest);
        // this._instance.interceptors.response.use(interceptorsResponse);
    }

    // Get 请求
    async get<T>(url: string, params?: object): Promise<T> {
        const response: AxiosResponse<T> = await this._instance.get(url, { params });
        return response.data;
    }

    // Put 请求
    async put<T>(url: string, data?: object): Promise<T> {
        const response: AxiosResponse<T> = await this._instance.put(url, data);
        return response.data;
    }

    // Delete 请求
    async delete<T>(url: string, params?: object): Promise<T> {
        const response: AxiosResponse<T> = await this._instance.delete(url, { params });
        return response.data;
    }

    // Post 请求
    async post<T>(url: string, data?: object): Promise<T> {
        const response: AxiosResponse<T> = await this._instance.post(url, data);
        return response.data;
    }
}

// // 使用示例
// interface User {
//     id: number;
//     name: string;
//     age: number;
// }

// async function testAxios() {
//     console.log("我开始执行");

//     const users: User[] = await JoreNoeAxiosHttpClient.get<User[]>('https://example.com/users');
//     console.log(users);

//     // const user: User = await AxiosService.post<User>('https://example.com/users', { name: 'Alice', age: 25 });
//     // console.log(user);

//     // const updatedUser: User = await AxiosService.put<User>('https://example.com/users/1', { name: 'Bob', age: 30 });
//     // console.log(updatedUser);

//     // await AxiosService.delete<void>('https://example.com/users/1');
// }

// testAxios();