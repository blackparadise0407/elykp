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
    }

    interface Heading {
        id: string
        title: string
        nodeName: string
    }
}
export {}
