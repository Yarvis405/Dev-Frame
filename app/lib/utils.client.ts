'use client'

//client utils

//types (in case needed)

interface parseArgs {
    data: any,
    index?: string,
    query: string[]
}

//utils

const getDate = () => new Date().toISOString().slice(0, 10)

const parse = async ({ data, query, index }: parseArgs) => {
    const res: any[] = [];

    const obj = index 
        ? data[index]
        : data

    Object.entries(obj).forEach(([key, value]:any) => {
        const temp: Record<string, any> = {}

        for(let i of query) {
            temp[i] = value[i]
        }

        res.push(temp)
    })

    return res

}

export {
    getDate,
    parse
}
