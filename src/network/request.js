import axios from "axios";

export function request(config){
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5/',
    timeout: 5000
  })

  //请求拦截器
  instance.interceptors.request.use(config => {
    return config
  },error => {

  })

  //响应拦截器
  instance.interceptors.response.use(response =>{
    // 拦截从服务器请求到的数据剔除不需要的返回data即可
    return response.data
  },error => {

  })

  return instance(config)
}
