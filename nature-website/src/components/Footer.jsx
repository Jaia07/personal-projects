import React from "react";
import coloredLogo from "../assets/images/logo-colored.png"

const Footer = () => {

    return (
        <section className="max-w-[1200px] w-full my-7 mx-auto py-2">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-3 mx-2">
                <ul className="flex justify-between items-center gap-3">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <img src={ coloredLogo } alt="Colored Logo" />
                <p>Love Nature by Tyler Moore</p>
            </div>
        </section>
    )
}

export default Footer;