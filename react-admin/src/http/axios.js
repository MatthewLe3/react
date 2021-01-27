import axios from 'axios'
import QS from 'qs'
import { message } from 'antd'

let service = axios.create();

// 环境的切换
if (process.env.NODE_ENV === 'development') {
    service.defaults.baseURL = '/apis';
} else if (process.env.NODE_ENV === 'mock') {
    service.defaults.baseURL = '/mock';
} else if (process.env.NODE_ENV === 'production') {
    service.defaults.baseURL = 'http://www.xxx.com/';
}
// message.success(service.defaults.baseURL )
export const baseUrl = service.defaults.baseURL

// 请求超时时间
service.defaults.timeout = 10000;

// post请求头
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截
service.interceptors.request.use(config => {
    // 获取token信息
    const token = window.localStorage.getItem('token') || window.sessionStorage.getItem('token') || 'empty';
    // 在每次请求中添加token信息
    //设置请求头
    config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        'Authorization': token
    }
    return config
}, error => {
    return Promise.error(error);
})

// 响应拦截器
service.interceptors.response.use(response => {
    if (Number(response.code) === 200) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(response);
    }
}, error => {
    if (error.response.status) {
        const code = Number(error.response.status)
        switch (code) {
            case 401:
                message.error('未登录，需要跳转到登录页面')
                break;
            case 403:
                message.error('token过期,清楚token并重新登录')
                break;
            case 404:
                message.error('链接不存在')
                break;
            default:
                message.error(error.response.data.message)
        }
        return Promise.reject(error.response);
    }
})

export function fetchData(url, method, params = {}) {
    // 首先判断是get请求还是post请求
    let data = method.toLocaleLowerCase() === 'get' ? 'params' : 'data';
    return service({
        method,
        url,
        [data]: data === 'params' ? params :  QS.stringify(params)// 差异点在于data的值
    }).then((res) => {
        return Promise.resolve(res.data);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
