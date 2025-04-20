import React, { useState } from "react";
import headerBgImage from "../assets/images/main.png" 
import headerLogo from "../assets/images/logo.png"
import coloredLogo from "../assets/images/logo-colored.png"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


const Header = () => {
    const [ nav, setNav ] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    }

    return(
        <div className="bg-cover bg-center min-h-[75vh] w-full"
        style={{backgroundImage: `url(${headerBgImage})`}}
        >
            <nav>
                <div className="flex justify-between items-center max-w-[1200px] w-full mx-auto p-4 text-[#efefef]">
                    <img src={headerLogo} alt="Logo"/>
                    <ul className="hidden md:flex justify-center items-center font-semibold">
                        <li className="p-4"><a href="#">Home</a></li>
                        <li className="p-4"><a href="#">About</a></li>
                        <li className="p-4"><a href="#">Services</a></li>
                        <li className="p-4"><a href="#">Contact</a></li>
                        <li className="p-4">
                            <button className="border-4 rounded-md p-4">202-505-3333</button>
                        </li>
                    </ul>
                    <div onClick={ handleNav } className="md:hidden">
                        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/> }
                    </div>
                </div>

                <div className={!nav ? "fixed left-0 top-0 bg-slate-700 w-[60%] h-full border-r border-r-gray-400 text-[#efefef] pt-4 ease-in-out duration-500" : "fixed left-[-100%]"}>
                    <img src={coloredLogo} alt="Logo" className="p-4"/>
                    <ul className="p-3 uppercase">
                        <li className="p-4 border-b border-b-gray-600"><a href="#">Home</a></li>
                        <li className="p-4 border-b border-b-gray-600"><a href="#">About</a></li>
                        <li className="p-4 border-b border-b-gray-600"><a href="#">Services</a></li>
                        <li className="p-4 border-b border-b-gray-600"><a href="#">Contact</a></li>
                        <li className="p-4">
                            <button className="border-4 rounded-md p-4">202-505-3333</button>
                        </li>
                    </ul>
                </div>
            </nav>

            <section className="text-[#efefef]">
                <div className="max-w-[800px] w-full mt-[17vh] md:mt-[9vh] mx-auto text-center flex flex-col justify-center items-center">
                    <h2 className="font-semibold p-1 md:text-2xl text-lg">we all love</h2>
                    <h1 className="md:text-7xl sm:text-5xl text-4xl font-bold pb-1 tracking-wider">nature</h1>
                    <p className="px-5 tracking-tight">Look deep into nature and you</p>
                    <p className="px-5 pb-2 tracking-tight">will understand everything better.</p>
                    <button type="submit" className="border-0 outline-none rounded-md bg-[#ffd936] py-3 px-5 text-[#536942] font-Forum font-bold">Get Started</button>
                </div>
            </section>
            
        </div>
    )
}

export default Header;