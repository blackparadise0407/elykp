declare global {
    interface IPost {
        id: string
        slug: string
        title: string
        content: string
        upvotes: number
        downvotes: number
        createdAt: Date
        author: string
    }
}
export {}
