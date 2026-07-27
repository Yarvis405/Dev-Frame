import Social from './social'

const Header = () => {
    return (
        <>
            <header className="p-4 font-serif text-gray-400 bg-gray-900 shadow-lg shadow-gray-900/50 sticky top-0 left-0 z-50 flex flex-col justify-between sm:justify-around items-around min-w-full">
                <div className="flex justify-around md:justify-between items-around min-w-full">
                    <h2 className="text-4xl md:text-2xl text-purple-300 font-bold">Dev Artus</h2>

                    <span className="hidden md:block"><Social /></span>
                </div>

                {/*
                <hr className="h-[3px] border-black min-w-full bg-radial from-gray-400 from-20% to-black"/>
                */}
            </header>
        </>
    )
}

export default Header
