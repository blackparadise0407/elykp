import { ApolloClient, InMemoryCache } from '@apollo/client'

import { APP_CONFIG } from 'shared/config'

export const cache = new InMemoryCache({})

export const client = new ApolloClient({
    uri: APP_CONFIG.apiUrl,
    cache,
})
