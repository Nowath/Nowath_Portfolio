import React from "react";
//import image
import Profile from "../assets/Profile.jpg";
import Background from "../assets/AnasAbdin.gif";
import Anubarn from "../assets/anubarnsurin-Logo.jpg";
import SWK from "../assets/SWK-Logo.svg";
//import component
import Middlebar from "../components/middlebar";
//import extention
import { motion } from "framer-motion";
//import Icon
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaPython,
    FaGithub,
} from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import {
    RiSvelteFill,
    RiTailwindCssFill,
    RiSupabaseFill,
} from "react-icons/ri";
import { SiArduino, SiVscodium } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
//

function Home() {
    return (
        <div className="w-screen h-screen relative">
            <div className="absolute w-full h-full -z-10">
                <img
                    src={Background}
                    className="w-full h-full brightness-75 object-cover"
                    alt=""
                />
            </div>
            <div className="w-full h-full overflow-auto relative">
                <div className="flex flex-col h-[90%] items-center justify-center">
                    <div className="flex items-center justify-center flex-col gap-5">
                        <img
                            src={Profile}
                            className="w-3/5 rounded-full hover:rotate-[360deg] transition-all duration-700 ease-out"
                            alt=""
                        />
                        <div className="text-center grid gap-4">
                            <h1 className=" text-5xl text-white [text-shadow:_purple_1px_0px_10px;]">
                                Natheepat Ugridsiri
                            </h1>
                            <h1 className="text-2xl text-white [text-shadow:_yellow_1px_0px_10px;]">
                                little boy with website
                            </h1>
                        </div>
                    </div>
                </div>
                <Middlebar />
                <div className="text-white w-full flex flex-col gap-y-5 items-center justify-center z-10">
                    <section id="AboutMe" class=" w-[94%]">
                        <div className=" flex justify-start text-4xl">
                            <h1 className="header relative">About Me</h1>
                        </div>
                        <div className="content gap-2 flex flex-col">
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                className="bg-[rgba(255,255,255,0.27)] h-56 overflow-auto backdrop-blur-lg text-white transition-[background,color] hover:bg-[rgba(255,255,255,0.57)] hover:text-black  w-full rounded-xl p-4"
                            >
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. In sequi repudiandae eaque
                                voluptas magnam aut earum amet necessitatibus
                                illo suscipit asperiores voluptate quibusdam
                                molestias distinctio, aperiam accusantium sint
                                inventore ab et officiis alias perspiciatis
                                delectus ullam. Facilis nobis minima quasi autem
                                amet! Doloremque deleniti quibusdam placeat
                                magni veniam explicabo repudiandae? Accusantium
                                nemo labore aspernatur minima, laudantium quis
                                debitis hic a inventore amet earum nesciunt
                                mollitia incidunt quas cum sequi facilis saepe,
                                eligendi modi fuga eum. Rerum nam, natus porro
                                inventore recusandae quos deleniti ab blanditiis
                                eaque quis cumque tempore fuga, tempora sed.
                                Commodi hic sequi provident dolores ut maxime
                                obcaecati rem aliquam ad praesentium fugiat
                                dolorem, nesciunt quia distinctio cumque earum
                                autem eum, nostrum est reiciendis quas fugit!
                                Aliquid ipsum hic voluptatibus odit aspernatur
                                reprehenderit ipsa ullam magni vel quidem
                                repellendus eum assumenda facere sequi quasi
                                facilis iusto aut repellat, quibusdam
                                temporibus. Doloremque esse explicabo maiores,
                                laudantium animi debitis earum rerum cumque
                                quaerat beatae enim, provident omnis? Iure
                                incidunt repellat eligendi cupiditate. Fuga,
                                nisi officia tempore ratione, tempora dolorem
                                consequatur odio temporibus ea laborum non
                                repellendus similique recusandae facere maxime
                                assumenda voluptatem mollitia reiciendis
                                accusamus aut voluptatibus ipsum necessitatibus
                                saepe! Illo delectus neque quis obcaecati, nam
                                quisquam non totam labore.
                            </motion.div>
                            <div className="flex gap-3 min-h-[20rem] md:flex-row flex-col">
                                <div className="flex-1">
                                    <div className="text-2xl flex justify-start ">
                                        <h1 className="header relative">
                                            History
                                        </h1>
                                    </div>
                                    <motion.div
                                        whileHover={{ scale: 1.01 }}
                                        className=" content text-lg bg-[rgba(255,255,255,0.27)] backdrop-blur-lg text-white transition-[background,color] hover:bg-[rgba(255,255,255,0.57)] hover:text-black  w-full rounded-xl p-4"
                                    >
                                        <div className="flex flex-col md:flex-row">
                                            <div className=" flex-1 flex flex-col gap-y-5">
                                                <p>
                                                    <b>Name:</b> Natheepat
                                                    Ugridsiri
                                                </p>
                                                <p>
                                                    <b>Nickname:</b> Nano
                                                </p>
                                                <p>
                                                    <b>Age:</b> 17
                                                </p>
                                                <p>
                                                    <b>Blood Group:</b> B
                                                </p>
                                            </div>
                                            <div className=" flex-1 flex flex-col gap-y-5">
                                                <p>
                                                    <b>Birthday:</b> 24/04/2007
                                                </p>
                                                <p>
                                                    <b>Nationality:</b> Thai
                                                </p>
                                                <p>
                                                    <b>Address:</b> 70/1-3
                                                    ซอยเทศบำรุง ถนนจิตรบำรุง
                                                    อำเภอเมือง ตำบลในเมือง
                                                    จังหวัดสุรินทร์ 32000
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="flex-1">
                                    <div className="text-2xl flex justify-start ">
                                        <h1 className="header relative">
                                            Skills
                                        </h1>
                                    </div>
                                    <motion.div
                                        whileHover={{ scale: 1.01 }}
                                        className="content text-lg bg-[rgba(255,255,255,0.27)] backdrop-blur-lg text-white transition-[background,color] hover:bg-[rgba(255,255,255,0.57)] hover:text-black  w-full rounded-xl p-4"
                                    >
                                        <div className="flex gap-6">
                                            <ul className="text-xl flex flex-col md:flex-row justify-evenly w-full">
                                                <div className="flex flex-col gap-y-3 ">
                                                    <h1 className="text-2xl underline">
                                                        Language
                                                    </h1>
                                                    <li className="flex items-center gap-1">
                                                        <FaHtml5 />
                                                        HTML
                                                    </li>
                                                    <li className="flex items-center gap-1">
                                                        <FaCss3Alt /> CSS
                                                    </li>
                                                    <li className="flex items-center gap-1">
                                                        <FaJsSquare />
                                                        JavaScript
                                                    </li>
                                                    <li className="flex items-center gap-1">
                                                        <BiLogoTypescript />
                                                        TypeScript
                                                    </li>
                                                </div>
                                                <div className="flex flex-col gap-y-3 ">
                                                    <h1 className="text-2xl underline">
                                                        Framework
                                                    </h1>
                                                    <li className="flex items-center gap-1">
                                                        <FaReact /> React
                                                    </li>
                                                    <li className="flex items-center gap-1">
                                                        <RiSvelteFill />
                                                        SvelteKit
                                                    </li>
                                                    <li className="flex items-center gap-1">
                                                        <RiTailwindCssFill />
                                                        Tailwind
                                                    </li>
                                                </div>
                                                <div className="flex flex-col gap-y-3 ">
                                                    <h1 className="text-2xl underline">
                                                        Application
                                                    </h1>
                                                    <li className="flex items-center gap-1">
                                                        <FaGithub /> Github
                                                    </li>
                                                    <li className="flex items-center gap-1">
                                                        <RiSupabaseFill />{" "}
                                                        Supabase
                                                    </li>
                                                    <li className="flex items-center gap-1">
                                                        <SiArduino /> Arduino
                                                        IDE
                                                    </li>
                                                    <li className="flex items-center gap-1">
                                                        <VscVscode /> Vscode
                                                    </li>
                                                    <li className="flex items-center gap-1">
                                                        <SiVscodium /> Vscodium
                                                    </li>
                                                </div>
                                            </ul>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="Aducation" class="w-[94%]">
                        <div className="flex justify-start text-4xl">
                            <h1 className="header relative">Aducation</h1>
                        </div>
                        <div className="content flex w-full gap-5 md:flex-row flex-col">
                            <a
                                href="https://www.anubarnsurin.ac.th/"
                                target="_blank"
                                className="flex justify-center items-center flex-col flex-1 py-4 rounded-xl transition-all hover:bg-[rgba(255,255,255,0.27)] hover:backdrop-blur-lg"
                            >
                                <img
                                    className=" w-48 md:w-64 rounded-full"
                                    src={Anubarn}
                                    alt=""
                                />
                                <h1 className="text-2xl">Anubarnsurin</h1>
                                <p className="text-lg">Primary school</p>
                            </a>
                            <a
                                href="https://sura.ac.th/"
                                target="_blank"
                                className="flex justify-center items-center flex-col flex-1 py-4 rounded-xl transition-all hover:bg-[rgba(255,255,255,0.27)] hover:backdrop-blur-lg"
                            >
                                <img
                                    className=" w-48 md:w-64 bg-white rounded-full"
                                    src={SWK}
                                    alt=""
                                />
                                <h1 className="text-2xl">Surawittayakarn</h1>
                                <p className="text-lg">Middle school</p>
                            </a>
                            <a
                                href="https://sura.ac.th/"
                                target="_blank"
                                className="flex justify-center items-center flex-col flex-1 py-4 rounded-xl transition-all hover:bg-[rgba(255,255,255,0.27)] hover:backdrop-blur-lg"
                            >
                                <img
                                    className=" w-48 md:w-64 bg-white rounded-full"
                                    src={SWK}
                                    alt=""
                                />
                                <h1 className="text-2xl">Surawittayakarn</h1>
                                <p className="text-lg">High school</p>
                            </a>
                        </div>
                    </section>

                    <section id="Project" class="h-screen w-[94%]">
                        <div className="flex justify-start text-4xl">
                            <h1 className="header relative">Project</h1>
                        </div>
                    </section>

                    <section id="Contact" class="h-screen w-[94%]">
                        <div className="flex justify-start text-4xl">
                            <h1 className="header relative">Contact</h1>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Home;
