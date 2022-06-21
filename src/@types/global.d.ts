declare global {
    interface IPost {
        id: string
        slug: string
        title: string
        content: string
        upvotes: number
        views: number
        createdAt: Date
        author: string
        publishedAt: Date
    }

    interface IConnection {
        pageInfo: {
            endCursor: string | null
            hasNextPage: boolean
        }
    }

    interface Heading {
        id: string
        title: string
        nodeName: string
    }
}
export {}
