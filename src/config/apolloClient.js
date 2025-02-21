import { ApolloClient, InMemoryCache } from '@apollo/client'

export const cache = new InMemoryCache()

export const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URI,
  cache,
  headers: {
    'x-hasura-admin-secret': process.env.REACT_APP_API_ADMIN_SECRET
  }
})
