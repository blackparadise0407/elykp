import { request } from 'apis/request'

const ENDPOINT = '/posts'

export const getPosts = () => request<IPost[]>('GET', ENDPOINT)
