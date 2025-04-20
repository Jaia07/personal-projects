import React from "react";
import firstServiceImage from "../assets/images/service-1.png"
import secondServiceImage from "../assets/images/service-2.png"
import thirdServiceImage from "../assets/images/service-3.png"

const Services = () => {

    return(
        <section>
            <div className="max-w-[1080px] w-full h-auto mx-auto my-4">
                <div className="py-7 text-center">
                    <h1 className="font-bold md:text-5xl sm:text-4xl text-3xl">Our Services</h1>
                    <p className="border-2 border-[#ffd936] md:max-w-28 sm:max-w-24 max-w-20 mx-auto md:my-3 sm:my-2 my-1"></p>
                </div>
                
                <article className="flex flex-col md:flex-row justify-center gap-2 md:mx-5 max-w-[350px] md:max-w-[1080px] w-full mx-auto">
                    <div>
                        <img src={ firstServiceImage } alt="Boy sitting down" className="rounded-md transform hover:scale-105 transition duration-300 ease-in-out"/>
                        <h5 className="font-bold">Web Design</h5>
                        <p>Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.</p>
                    </div>
                    <div>
                        <img src={ secondServiceImage } alt="Landscape" className="rounded-md transform hover:scale-105 transition duration-300 ease-in-out"/>
                        <h5 className="font-bold">Graphic Design</h5>
                        <p>Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.</p>
                    </div>
                    <div>
                        <img src={ thirdServiceImage } alt="Icy rock" className="rounded-md transform hover:scale-105 transition duration-300 ease-in-out"/>
                        <h5 className="font-bold">Content Design</h5>
                        <p>Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Services;