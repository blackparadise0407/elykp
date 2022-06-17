import { AxiosRequestConfig, Method } from 'axios'

import { axiosClient } from './client'

export async function request<T = unknown, D = unknown>(
    method: Method,
    url: string,
    data?: D
): Promise<T> {
    const config: AxiosRequestConfig = {
        url,
        method,
    }
    if (method === 'GET' || method === 'get') {
        config.params = data
    } else config.data = data
    return axiosClient.request(config) as unknown as T
}
