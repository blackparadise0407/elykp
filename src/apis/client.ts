import axios, { AxiosError } from 'axios'
import qs from 'query-string'

import { APP_CONFIG } from 'shared/config'

export const axiosClient = axios.create({
    baseURL: APP_CONFIG.apiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
    paramsSerializer: (params) => qs.stringify(params),
})

axiosClient.interceptors.request.use(async (config) => {
    return config
})

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) return response.data
        return response
    },
    (error: AxiosError) => {
        return Promise.reject(error.message)
    }
)
