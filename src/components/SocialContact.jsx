import React, { useState } from "react";
import { motion } from "framer-motion";
//import Icon
import { FaGithub, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
const contact = [
    {
        title: "Facebook",
        icon: <FaFacebook size={50} />,
        link: "https://www.facebook.com/nano.ugridsiri.5",
        color: "rgb(25_116_236)",
    },
    {
        title: "Instagram",
        icon: <FaInstagram size={50} />,
        link: "https://www.instagram.com/nanougridsiri/",
        color: "rgb(145_46_185)",
    },
    {
        title: "Youtube",
        icon: <FaYoutube size={50} />,
        link: "https://www.youtube.com/@Nowath2404",
        color: "rgb(255_0_0)",
    },
    {
        title: "Github",
        icon: <FaGithub size={50} />,
        link: "https://github.com/Nowath",
        color: "rgb(0_0_0)",
    },
];

function SocialContact() {
    return (
        <div className=" contents">
            {contact.map((items) => (
                <motion.a
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        duration: 0.3,
                    }}
                    href={items.link}
                    target="_blank"
                    className={`bg-[rgba(255,255,255,0.27)] group transition-colors backdrop-blur-lg gap-2 rounded-xl w-72 py-10 flex flex-col justify-center items-center`}
                >
                    <div className={`group-hover:text-[${items.color}]`}>
                        {items.icon}
                    </div>
                    <h1 className="">
                        <div
                            className={`group-hover:text-[${items.color}] group-hover:[text-shadow:_2px_2px_5px_black] transition-colors text-xl`}
                        >
                            {items.title}
                        </div>
                    </h1>
                </motion.a>
            ))}
        </div>
    );
}

export default SocialContact;
