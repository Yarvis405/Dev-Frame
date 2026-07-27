import Social from "./social.tsx"

const dotStyle = `text-4xl`

const Hero = () => {
    return (
        <>
            <section className="flex flex-col justify-around items-around min-h-[60vh] md:min-h-[75vh] lg:min-h-[100vh] bg-gray-900 shadow-lg shadow-gray-900/50 md:p-8">

                <article className="flex flex-col gap-2 justify-center items-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-purple-300 hidden md:block">Dev Artus</h2>
                    <h2 className="text-2xl md:text-4xl">The Push You Need To Grow</h2>

                    <h5 className="flex gap-1 items-center text-lg md:text-2xl">
                        <span>Features</span>
                        <span className={dotStyle} >&#xB7;</span>
                        <span>Systems</span>
                        <span className={dotStyle} >&#xB7;</span>
                        <span>Support</span>
                    </h5>
                </article>

                <article className="flex flex-col gap-2 justify-center items-center">
                    <a href="#contact"><input type="button" value="CONTACT" className="p-2 md:p-4 text-lg md:text-2xl text-white font-semibold bg-purple-300 active:bg-purple-400 active:shadow-sm active:shadow-purple-400 active:scale-107 transition rounded-md" /></a>

                    <span className="md:hidden"><Social /></span>
                </article>
            </section>
        </>
    )
}

export default Hero
