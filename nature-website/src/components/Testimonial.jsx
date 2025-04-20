import React from "react"
import quote from "../assets/images/quote.png"
import profileImage from "../assets/images/profile.png"

const Testimonial = () => {

    return (
        <section className="bg-[#f1f2fa] mt-12 mb-10 w-full">
            <div className="py-8 px-6 max-w-[400px] md:max-w-[500px] mx-auto">
                <img src={ quote } alt="Quotes" className="my-3 mx-auto h-6 md:h-7"/>
                <h1 className="my-4 text-center font-bold font-Forum px-6 md:text-lg">"Original and with an innate understanding of their customer's needs, the team at Love Nature are always a pleasure to work with."</h1>
                <div className="mt-5 mb-1 p-2">
                    <img src={ profileImage } alt="Profile photo of James Miller" className="mx-auto"/>
                    <p className="font-bold text-center">Jane Miller</p>
                </div>
            </div>
        </section>
    )
}

export default Testimonial;