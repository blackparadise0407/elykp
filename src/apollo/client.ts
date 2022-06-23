import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

import { APP_CONFIG } from 'shared/config'

export const cache = new InMemoryCache({})

const httpLink = new HttpLink({
    uri: APP_CONFIG.apiUrl,
})

export const client = new ApolloClient({
    link: httpLink,
    cache,
})
