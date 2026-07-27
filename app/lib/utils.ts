'use server'

//server utils

//types

interface surferArgs {
    api: string,
    endpoint: string,
    query?: string
}

//utils

//it basically get api data (needs improvment)
const surfer = async ({ api, endpoint, query }: surferArgs) => {
    if(!api || !endpoint) {
        throw new Error(JSON.stringify({
            status: 400,
            message: 'api or endpoint missing/misstyped'
        }))
    }

    const url = query 
        ? `${api}${endpoint}${query}`
        : `${api}${endpoint}`;

    const res = await fetch(url, { 
        cache: 'force-cache'
    })

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
