'use server'

//server utils
import { parse } from './utils.client.ts'

//types

interface surferArgs {
    api: string,
    endpoint: string,
    query?: string
    index?: string
}


//utils

//it basically get api data (needs improvment)
const surfer = async ({api, endpoint, query} : surferArgs) => {
    'use cache'

    if(!api || !endpoint) {
        throw new Error(JSON.stringify({
            status: 400,
            message: 'api or endpoint missing/misstyped'
        }))
    }

    const url = query 
        ? `${api}${endpoint}${query}`
        : `${api}${endpoint}`;

    const res = await fetch(url)

    if(!res.ok) {

        throw new Error(JSON.stringify({
            status: res.status,
            message: 'request failed'
        }))
    }

    const data = await res.json()


   return data
}

export {
    surfer,
}
