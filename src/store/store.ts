import create from 'zustand'

interface State {
    posts?: IPost[]
    updatePosts: (posts: IPost[]) => void
}

export const useStore = create<State>((set) => ({
    posts: undefined,
    updatePosts: (posts: IPost[]) => set((state) => ({ ...state, posts })),
}))
