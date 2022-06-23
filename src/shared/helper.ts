export const getMinRead = (content?: string) => {
    if (!content) return 0
    return Math.ceil(content.split(' ').length / 100)
}

export const copyToClipboard = async (text: string) => {
    if ('navigator' in window) {
        const cb = navigator.clipboard
        await cb.writeText(text)
    }
}
