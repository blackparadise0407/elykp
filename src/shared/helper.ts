export const getMinRead = (content?: string) => {
    if (!content) return 0
    return Math.ceil(content.split(' ').length / 100)
}
