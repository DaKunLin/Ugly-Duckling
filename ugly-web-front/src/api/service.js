import axios from 'axios';
import router from '@/router';

const service = axios.create({
    timeout: 8000
});

try {
    service.interceptors.request.use(config => {
        config.headers['token'] = sessionStorage.getItem('token');
        // !window.navigator.onLine && Toast({message: `网络错误，请检查网络`});
        return window.navigator.onLine ? config : Promise.reject(new Error('无网络'));
    }, error => {
        // Toast({message: `网络错误，请检查网络`});
        return Promise.reject(error);
    });
} catch (exception) {
    // Toast.fail({message: '网络错误，请检查网络'});
    console.log(exception);
}

try {
    service.interceptors.response.use(response => {
        return response.data;
    }, error => {
        switch (error.response && error.response.status) {
            case 400:
                // Toast({ message: `错误请求` });
                break;
            case 401: //token过期，刷新整个页面
                // Dialog.alert({
                //     message: '登录失效,请重新进行登录'
                // }).then(() => {
                //     router.replace({
                //         path: '/'
                //     });
                // });
                break;
            case 500:
                // Toast({ message: `服务端错误` });
                break;
            case 502:
                // Toast({ message: `网关错误` });
                break;
            case 504:
                // Toast({ message: `网关超时` });
                break;
            default:
                // Toast({message: `接口请求失败`});
                break;
        }
        return Promise.reject(error);
    });
} catch (exception) {
    // Toast.fail({message: '网络错误，请检查网络'});
    console.log(exception);
}

export default service;