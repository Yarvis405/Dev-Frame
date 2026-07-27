'use client'

import { useRef, useState, useEffect } from 'react'

interface buttonArgs {
    dir: number,
    value: string,
    length: number, //content length
    index: number,
    setIndex: React.Dispatch<React.setStateAction<number>>,
}


const slideStyles = `m-2 p-1 flex-1 text-4xl font-bold bg-gray-700 rounded-md text-white shadow-md shadow-gray-700/50 active:bg-gray-900 active:scale-70 transition duration-200 md:hidden`

const SliderButton = ({dir, length, value, index, setIndex}: buttonArgs) => {
    const move = () => {

        if(dir === -1 && index > 0 ) {
            setIndex(index + (dir))
            return index
        }

        if(dir === 1 && index < length) {
            setIndex(index + (dir))
            return index
        }
        
        setIndex(Math.floor(length/2))
        //setDir(dir * (-1))
    }

    return (
        <>  
            <input type="button" onClick={move} value={value} className={slideStyles}/>
        </>
    )
}

export default SliderButton
