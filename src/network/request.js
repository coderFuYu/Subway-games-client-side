import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    method: 'post',
    'baseURL':'api/app',
    timeout: 5000,
    headers: {
      'user_id': '1',
      'term_type': '0',
      'term_token': '123456',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    }
  })
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  return instance(config)
}

