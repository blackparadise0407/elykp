export const getMinRead = (content: string) => {
    return Math.ceil(content.split(' ').length / 100)
}
