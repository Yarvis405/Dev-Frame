'use client'

//add data later
import { useEffect, useState } from 'react'
import { fetchRepositories } from '@/app/lib/actions'
import PostLoading from '@/app/ui/loading/post'
import Image from 'next/image'

interface postArgs {
    index: number,
    length: number | null,
    setLength: React.Dispatch<React.SetStateAction<number | null>>
}

interface RepositoryItem {
    name: string
    description: string
    html_url: string
    homepage: string | null
}

const followStyle = `p-1 bg-purple-300 active:bg-purple-400 active:shadow-sm active:shadow-purple-400 active:scale-107 rounded-md text-white font-medium transition-all`

const Post = ({ index, length, setLength }: postArgs) => {

    const [item, setItem] = useState<RepositoryItem[] | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        let alive = true
        setError(null)
        setItem(null)

        fetchRepositories({
            query: '?q=owner:yarvis405 topic:devartusysdev'
        }).then((r: any) => {
            if(alive) setItem(r.items);
            if(alive) setLength(r.items.length - 1)
        }).catch((e: any) => {
            if(alive) setError(e?.message ?? 'failed')
        })

        return () => { alive = false }
    }, [setLength])

    
    if(error) return <div>{error || "couldn't access data" }</div>
    if(!item) return <PostLoading />
    
    
    if(!item || index == null || index >= item.length){
        throw(JSON.stringify({
            status: 500,
            message: 'probably server error'
        }))
    }


    const homepage = (i: number) => {
        return item[i].homepage 
            ? [`${item[i].homepage}`, "homepage"]
            : ["#", "no homepage"]
    }

    return (
        <>
            <article className={`bg-white min-w-[16rem] min-h-[12rem] md:min-w-[20rem] md:min-h-[16rem] rounded-md active:scale-105 hover:scale-120 transition-all duration-300 relative select-none`}>
                <Image src={`https://raw.githubusercontent.com/yarvis405/${item[index].name}/master/thumbnail.webp`}  fill alt={item[index].name} quality={70} draggable={false} className="rounded-md object-cover" />


                <div className="bg-[#151515cc] p-2 h-full flex flex-col justify-between rounded-md opacity-5 active:opacity-100 hover:opacity-100 transition duration-300 absolute inset-0 z-10" >
                    <div className="flex flex-col gap-2 p-2">
                        <h3 className="text-2xl text-white">{item[index].name}</h3>
                    
                        <p className="line-clamp-3 text-gray-300">{item[index].description}</p>
                    </div>

                    <nav className="flex nowrap gap-2 justify-start">
                        <a href={homepage(index)[0]} target="_blank" rel="noopener noreferrer"><input type="button" value={homepage(index)[1]} className={followStyle} /></a>
                        <a href={item[index].html_url} target="_blank" rel="noopener noreferrer"><input type="button" value="github" className={followStyle}/></a>
                    </nav>
                </div>
            </article>
        </>
    )
}

export default Post
