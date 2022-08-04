import Request from "uview-ui/libs/request/index";
import { RequestModel } from "./RequestModel";



//Ajax 封装类   Auth:Jth 2021年4月2日16:36:02
export const JoreNoeRequest = {
    JoreNoeApi: function (url: string, method = 'get', TokenInfo: RequestModel = null, params = null, headers = null) {
        //Request.setConfig();
        if (url == "" || url == undefined || url == null)
            return "请求地址为空";
        if (headers == null) {
            headers = {};
            headers["token"] = TokenInfo.UserId; //uni.getStorageSync("UserId");
            headers["Content-Type"] = "application/x-www-form-urlencoded";
        }
        if (method.toString().toLowerCase() == 'get')
            return this.Get(url, params, headers);
        else if (method.toString().toLowerCase() == 'post')
            return this.Post(url, params, headers);
        else if (method.toString().toLowerCase() == 'delete')
            return this.Delete(url, params, headers);
        else if (method.toString().toLowerCase() == 'put')
            return this.Put(url, params, headers);
        else
            return this.Get(url, params, headers);
    },
    Post: function (url, params = {}, headers = {}) {
        headers['Content-Type'] = "application/json";
        return Request.post(url, params, headers);
    },
    Get: function (url, params = null, headers = {}) {
        //处理参数
        var tempParams = "";
        if (params != null) {
            tempParams = "?";
            for (var key in params)
                tempParams += `${key}=${params[key]}&`;
            //去除最后 & 符号
            tempParams.substring(0, tempParams.lastIndexOf('&') - 1);
        }
        return Request.get(url + tempParams, null, headers);
    },
    Put: function (url, params = {}, headers = {}) {
        return Request.put(url, params, headers);
    },
    Delete: function (url, params = {}, headers = {}) {
        return Request.delete(url, params, headers);
    }
    // 基于 UviewUi   
}