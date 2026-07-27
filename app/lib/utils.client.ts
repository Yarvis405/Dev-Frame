'use client'

//client utils

//types (in case needed)

interface parseArgs {
    data: any,
    index?: string,
    query?: string[]
}

//utils

const date = new Date().toISOString().slice(0, 10)

const parse = async ({data, query, index} : parseArgs) => {
    const res = [];

    const obj = index 
        ? data[index]
        : data

    Object.entries(obj).map(([key, value]) => {
        const temp = {}

        for(let i of query) {

            temp[i] = value[i]
        }

        res.push(temp)
    })

    return res

}

export {
    date,
    parse
}
