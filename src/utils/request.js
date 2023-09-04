import axios from 'axios'
// create an axios instance
let baseUrl = 'http://192.168.1.106:3000/'
function service (url, type = 'get', data) {
  if (type === 'get') return axios.get(baseUrl + url)
  if (type === 'post') return axios.post(baseUrl + url, data)

}
export default service
