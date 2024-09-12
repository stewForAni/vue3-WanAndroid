/* --- === Axios packaging === --- */
import axios from 'axios'
import { showMessage, isEmpty } from '../util.js'

axios.defaults.baseURL = 'https://ypeditor-test.fozmoly.com'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.timeout = 5000

/* --- === Axios 请求拦截器 === --- */
axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = localStorage.getItem('acekit_auth_token')
    return config
  },
  (error) => {
    return Promise.reject(error.data.error.message)
  }
)

/* --- === Axios 响应拦截器 === --- */
axios.interceptors.response.use(
  (res) => {
    if (res.status === 200) {
      switch (res.data.code) {
        case 0:
          return res.data.data && Promise.resolve(res)
        case 101:
          hint(res.data.message, 'warning')
          break
        default:
          hint('Error 请求服务异常 !', 'warning')
          break
      }
    } else {
      return Promise.reject(res)
    }
  },
  (error) => {
    switch (error.response.status) {
      case 404:
        hint('Error 请求地址错误 !', 'error')
        break
      case 503:
        hint('Error 服务器不可用 !', 'error')
        break
      default:
        hint('Error 请求服务异常 !', 'error')
    }
    return Promise.reject(error.response)
  }
)

export default {
  post(url, data) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: data
      })
        .then((res) => {
          if (isEmpty(res)) {
            return
          }
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  get(url, data) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params: data
      })
        .then((res) => {
          if (isEmpty(res)) {
            return
          }
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

/* --- === Hint info === --- */
function hint(message, type) {
  showMessage(type, message)
}
