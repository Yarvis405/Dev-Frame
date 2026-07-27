//import "@/node_modules/devicons/dist/devicons.css"

interface techsArg {
    techs: string[]
}

const Techs = ({techs}: techsArg) => {
    return (
        <>
            <div className="p-2 md:p-4 md:pt-6 flex justify-around items-end gap-4 bg-gray-700 rounded-md text-4xl text-white md:w-full">
                {techs.map(tech => (
                    <span key={tech} className="text-4xl md:text-6xl" >
                        <i className={`devicons devicons-${tech}`} />
                    </span>
                ))}
            </div>
        </>
    )
}

export default Techs
