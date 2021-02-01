import axios from 'axios'
import {
  baseURL,
  responseErrorInterceptor,
  responseInterceptor,
} from './apiConfig'

const axiosInstance = axios.create({
  baseURL: baseURL || '',
  headers: {
    'content-type': 'application/json',
  },
})

axiosInstance.interceptors.response.use(
  responseInterceptor,
  responseErrorInterceptor
)

/**
 * GET Method for HTTP Request with axios instance
 *
 * @param {string} path
 */
const get = (path: string) => axiosInstance(path)

/**
 * POST Method for HTTP Request with axios instance
 *
 * @param {string} path
 * @param {Object} data
 */
const post = <T>(path: string, data: T) =>
  axiosInstance(path, { method: 'POST', data })

/**
 * PUT Method for HTTP Request with axios instance
 *
 * @param {string} path
 * @param {Object} data
 */
const put = <T>(path: string, data: T) =>
  axiosInstance(path, { method: 'PUT', data })

/**
 * PATCH Method for HTTP Request with axios instance
 *
 * @param {string} path
 * @param {string} data
 */
const patch = <T>(path: string, data: T) =>
  axiosInstance(path, { method: 'PATCH', data })

/**
 * DELETE Method for HTTP Request with axios instance
 *
 * @param {string} path
 */
const remove = (path: string) => axiosInstance(path, { method: 'DELETE' })

export { get, post, put, patch, remove }
