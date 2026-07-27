'use server'

//server actions for client components

import { surfer } from './utils'

interface RepositorySearchParams {
    query: string
}

export async function fetchRepositories({ query }: RepositorySearchParams) {
    const result = await surfer({
        api: 'https://api.github.com',
        endpoint: '/search/repositories',
        query
    })
    return result
}
