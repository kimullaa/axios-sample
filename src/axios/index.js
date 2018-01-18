import Vue from 'vue'
import Axios from 'axios'

const http = Axios.create({
  // for cors
  withCredentials: true
})
http.interceptors.response.use(function (response) {
}, function (error) {
  if (error.response.status === 401) {
    Vue.toasted.clear()
    Vue.toasted.error(error.response.data.message)
  } else if (error.response.status === 500) {
    Vue.toasted.clear()
    Vue.toasted.error(error.response.data.message)
  }
  return Promise.reject(error)
})

export default http
