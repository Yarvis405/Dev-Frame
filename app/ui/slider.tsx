'use client'

import Post from "@/app/ui/post"
import SliderButton from "@/app/ui/sliderButton"
import { useState } from 'react'

const slideStyles = `m-2 p-1 flex-1 text-4xl font-bold bg-gray-700 rounded-md text-white shadow-md shadow-gray-700/50 active:bg-gray-900 active:scale-70 transition duration-200`

const Slider = () => {
    const [index, setIndex] = useState<number>(0)
    const [length, setLength] = useState<null | number>(null)
    const count = length !== null ? [...Array(length + 1).keys()] : [];

    return (
        <>
            <article className="m-2 flex justify-around select-none touch-none rounded-md">
                {/*<input type="button" value="<" className={slideStyles}/>*/}

                <SliderButton dir={-1} value={'\u27EA'} length={length} index={index} setIndex={setIndex} />
                
                <div className="md:hidden"> 
                    <Post index={index} length={length} setLength={setLength} />
                </div>

                <div className="hidden md:flex flex-wrap justify-around items-around rounded-md">
                    {count.map(i => (
                        <div className="m-8 rounded-md" key={i}>
                            <Post index={i} length={length} setLength={setLength} />
                        </div>
                    ))}
                </div>
                
                <SliderButton dir={1} value={'\u27EB'} length={length} index={index} setIndex={setIndex} />
                
                {/*<input type="button" value=">" className={slideStyles} />*/}
            </article>


            {/*<pre>{error ? error : JSON.stringify(data, null, 2)}</pre>*/}
        </>
    )
}

export default Slider
