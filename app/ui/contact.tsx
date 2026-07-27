'use client'

import { useRef, useState, useEffect } from 'react'
import { getDate } from "@/app/lib/utils.client"

const inputStyle = `apperance-none outline-none rounded-md border-solid border-2 border-gray-800 border-b-gray-400 w-full`
const inputContainer = `flex flex-col md:text-2xl`
const serviceStyle = `p-1 flex gap-1 items-center rounded-md has-[:checked]:bg-purple-300 has-[:checked]:text-white has-[:checked]:font-medium has-[:checked]:scale-105 transition-all active:scale-100`

const Contact = () => {
    const url = useRef("https://formsubmit.co/5d3d0e16608cd5ebb31494f00030b0f7")
    const [currentDate, setCurrentDate] = useState<string>("")

    useEffect(() => {
        setCurrentDate(getDate())
    }, [])

    return (
        <>
            <section id="contact" className="p-4 md:px-[15%] my-4 flex flex-col justify-center items-center gap-2 md:w-full">
                <h2 className="text-2xl md:text-4xl font-semibold">Contact</h2>

                <form className="flex flex-col gap-6 md:gap-12 w-full" action={url.current} method="POST" target="_blank">
                    <div id="metadata" className="hidden">
                        <input type="hidden" name="_subject" value="GIG from Dev Artus" />
                        <input type="hidden" name="_replyto" id="replyTo" />
                        <input type="hidden" name="_next" value="/legal/terms.html" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="box" />
                    </div>

                    <div className={inputContainer}>
                        <label htmlFor="client">Name/Org:</label>
                        <input type="text" maxLength={100} id="client" name="client" alt="Name or Organization" placeholder="Name or Organization" required className={inputStyle} />
                    </div>

                    <div className={inputContainer}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" maxLength={200} id="email" name="email" alt="Type your email" placeholder="user@example.com" required className={inputStyle} />
                    </div>

                    <input type="date" name="date" value={currentDate} title="Automatic date value" disabled hidden />

                    <ul alt="select one of the following" className="flex nowrap gap-2 justify-between text-sm md:text-2xl">
                        <li className={serviceStyle}>
                            <input type="radio" id="dev" name="service" alt="development" defaultChecked className="checked:bg-purple-300 checked:border-purple-300" />
                            <label htmlFor="dev"> Development </label>
                        </li>

                        <li className={serviceStyle}>
                            <input type="radio" id="deploy" name="service" alt="deployment/hosting" className="checked:bg-purple-300 checked:border-purple-300"/>
                            <label htmlFor="deploy"> Deployment </label>
                        </li>

                        <li className={serviceStyle}>
                            <input type="radio" id="support" name="service" alt="support" className="checked:bg-purple-300 checked:border-purple-300"/>
                            <label htmlFor="support"> Support</label>
                        </li>

                    </ul>

                    <input type="submit" value="submit" alt="submit form" className="text-white text-2xl md:text-4xl bg-purple-300 font-medium rounded-md active:bg-purple-400 active:shadow-sm active:shadow-purple-300 transition-all" />

                    <p className="p-1 bg-green-500 opacity-90 text-white font-medium rounded-md text-center hidden">we will reply as soon as possible</p>
                </form>


            </section>
        </>
    )
}

export default Contact
