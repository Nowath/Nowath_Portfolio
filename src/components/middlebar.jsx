import React, { useState } from "react";
import Logo from "../assets/Nowath_logo.png";
import { Turn as Hamburger } from "hamburger-react";
import { div } from "framer-motion/client";
import { motion } from "framer-motion";

function middlebar() {
    const [openNav, setOpenNav] = useState(false);
    function OpenClose() {
        setOpenNav(!openNav);
    }
    const NavCon = ["AboutMe", "Aducation", "Project", "Contact"];
    return (
        <div className=" h-[10%] sticky top-0 w-full flex justify-center items-center z-50">
            <div className=" w-[94%] h-14 flex justify-center items-center relative">
                <div className="w-full h-12 bg-[rgba(255,255,255,0.5)] rounded-lg px-4 flex justify-between items-center backdrop-blur-xl">
                    <div className="flex items-center gap-3">
                        <img src={Logo} className="w-10 rounded-full" alt="" />
                        <h1 className="text-xl">Nowath</h1>
                    </div>
                    <div className="hidden sm:flex gap-5">
                        {NavCon.map((items) => (
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                }}
                                className="hover:[text-shadow:_purple_1px_0px_10px;] transition-[text-shadow] duration-300"
                                href={`#${items}`}
                            >
                                {items}
                            </motion.a>
                        ))}
                    </div>
                    <div className="flex sm:hidden" onClick={OpenClose}>
                        <Hamburger toggle={openNav} toggled={openNav} rounded />
                    </div>
                </div>
                <div
                    className={`${
                        openNav ? `flex` : `hidden`
                    } absolute top-16 left-0 flex flex-col w-full rounded-xl overflow-hidden bg-[rgba(255,255,255,0.5)] backdrop-blur-xl`}
                >
                    {NavCon.map((items) => (
                        <a
                            className="w-full h-12 flex justify-center items-center hover:[text-shadow:_purple_1px_0px_10px;] transition-all"
                            href={`#${items}`}
                            onClick={OpenClose}
                        >
                            {items}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default middlebar;
