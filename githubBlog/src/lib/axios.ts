import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://github.com',
})
