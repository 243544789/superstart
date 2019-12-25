import axios from 'axios'

export function baseRequest(config) {
  const instancel = axios.create({
    baseURL: '/api',
    timeout: 5000
  })
  return instancel(config)
}
