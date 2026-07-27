const Footer = () => {
    return (
        <>
            <footer className="p-2 font-serif relative bottom-0 left-0 flex flex-col justify-between text-gray-400 bg-gray-800 min-w-full">
                {/*
                <hr className="h-[3px] border-black min-w-full bg-radial from-gray-400 from-20% to-black"/>
                */}

                <div className="flex justify-between">
                    <h2 className="font-semibold text-2xl">&copy;Dev Artus</h2>

                    <nav>
                        <a href="#top" >Up Top</a>
                    </nav>
                </div>

            </footer>
        </>
    )
}

export default Footer
