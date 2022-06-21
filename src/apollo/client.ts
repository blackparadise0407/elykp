import { ApolloClient, InMemoryCache, Reference } from '@apollo/client'

import { APP_CONFIG } from 'shared/config'

export const cache = new InMemoryCache({
    // typePolicies: {
    //     Query: {
    //         fields: {
    //             posts: {
    //                 keyArgs: false,
    //                 merge(existing, incoming) {
    //                     let tweets: Reference[] = []
    //                     if (existing && existing.tweets) {
    //                         tweets = tweets.concat(existing.tweets)
    //                     }
    //                     if (incoming && incoming.tweets) {
    //                         tweets = tweets.concat(incoming.tweets)
    //                     }
    //                     return {
    //                         ...incoming,
    //                         tweets,
    //                     }
    //                 },
    //             },
    //         },
    //     },
    // },
})

export const client = new ApolloClient({
    uri: APP_CONFIG.apiUrl,
    cache,
})
