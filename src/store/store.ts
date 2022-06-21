import create from 'zustand'

interface State {
    loading: boolean
    posts?: IPost[]
    updatePosts: (posts: IPost[]) => void
    updateLoading: (loading: boolean) => void
}

export const useStore = create<State>((set) => ({
    loading: false,
    posts: undefined,
    updatePosts: (posts) => set(() => ({ posts })),
    updateLoading: (loading) => set(() => ({ loading })),
}))
