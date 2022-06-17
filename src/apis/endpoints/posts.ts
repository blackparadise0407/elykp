import { request } from 'apis/request'

const ENDPOINT = '/posts'

export const getPosts = () => request<IPost[]>('GET', ENDPOINT)

export const getPostBySlug = (slug: string) =>
    request<IPost>('GET', `${ENDPOINT}/${slug}`)
