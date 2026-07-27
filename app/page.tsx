import Image from "next/image";
import Header from "./ui/header.tsx"
import Footer from "./ui/footer.tsx"
import Hero from "./ui/hero.tsx"
import Contact from "./ui/contact.tsx"
import Techs from "./ui/techs.tsx"
import Slider from "./ui/slider.tsx"
import {surfer} from "./lib/utils.ts"

export default function Home() {

    return (
        <>
            <main className=" flex flex-col gap-6 font-serif font-lg text-gray-400 bg-gray-800 min-h-[95vh] transition-all duration-500">
                <Hero />

                <div className="md:p-6 p-4 md:px-[10%] flex flex-col md:gap-6 md:items-start w-full h-full">
                    <section className="flex flex-col md:gap-6 items-center md:w-full">
                        <Techs techs={['html-5', 'javascript', 'css-3', 'nextjs-icon', 'tailwind-icon', 'wordpress-icon']} />
                    
                        <div className="my-6 flex flex-col items-center"> 
                            <h2 className="text-2xl md:text-4xl font-semibold">Projects</h2>
                            <Slider />
                        </div>
                    </section>

                    <Contact />
                </div>
            </main>
        </>
    );
}
