import { useLazyQuery, useMutation, useQuery } from '@apollo/client'

import {
    POSTS_QUERY,
    POST_QUERY,
    UPDATE_POST_VIEW_MUTATION,
} from 'apollo/queries/posts'

export const usePostsQuery = () =>
    useQuery<{ posts: IPost[]; postsConnection: IConnection }>(POSTS_QUERY)

export const useUpdatePostViewMutation = () =>
    useMutation<{ updatePost: IPost }, { id: string; views: number }>(
        UPDATE_POST_VIEW_MUTATION
    )

export const usePostLazyQuery = () =>
    useLazyQuery<{ post: IPost }, { slug: string }>(POST_QUERY)
