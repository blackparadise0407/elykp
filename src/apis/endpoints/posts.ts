import { request } from 'apis/request'

const ENDPOINT = '/posts'

export const getPosts = () =>
    request<{ posts: IPost[]; total: number }>('GET', ENDPOINT)

export const getPostBySlug = (slug: string) =>
    request<IPost>('GET', `${ENDPOINT}/${slug}`)
