import { gql } from '@apollo/client'

export const POSTS_QUERY = gql`
    query Posts {
        postsConnection {
            pageInfo {
                hasNextPage
                endCursor
            }
        }
        posts(first: 10, orderBy: publishedAt_DESC) {
            author
            content
            createdAt
            id
            published
            publishedAt
            slug
            title
            upvotes
            views
        }
    }
`

export const POST_QUERY = gql`
    query Post($slug: String!) {
        post(where: { slug: $slug }) {
            author
            content
            createdAt
            id
            publishedAt
            published
            slug
            title
            upvotes
            views
        }
    }
`

export const UPDATE_POST_VIEW_MUTATION = gql`
    mutation UpdatePostViews($id: ID!, $views: Int!) {
        updatePost(data: { views: $views }, where: { id: $id }) {
            id
            views
        }
    }
`
