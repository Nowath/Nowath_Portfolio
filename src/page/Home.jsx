import React, { useState } from "react";
//import image
import Profile from "../assets/Profile.jpg";
import Background from "../assets/AnasAbdin.gif";
import Anubarn from "../assets/anubarnsurin-Logo.jpg";
import SWK from "../assets/SWK-Logo.svg";
import QrImage from "../assets/card/Qrcode.png";
import Bio from "../assets/card/Nano_card.png";
import TrashBack from "../assets/card/trashback.png";
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
    FaArrowRight,
} from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import {
    RiSvelteFill,
    RiTailwindCssFill,
    RiSupabaseFill,
} from "react-icons/ri";
import { SiArduino, SiVscodium, SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
// import component
import SocialContact from "../components/SocialContact";

function Home() {
    const [cardData, setCardData] = useState([
        {
            title: "Qrcode_Gen",
            prop: "Lorem ipsum dolor sit amet consectetur adipisicing elit Pariatur odio tempore quis perspiciatis quibusdam modi impedit voluptate sapiente corrupti hic",
            image: QrImage,
            link: "https://qrcode-generater-nowath.vercel.app/",
        },
        {
            title: "TrashBack",
            prop: "Lorem ipsum dolor sit amet consectetur adipisicing elit Pariatur odio tempore quis perspiciatis quibusdam modi impedit voluptate sapiente corrupti hic",
            image: TrashBack,
            link: "https://trashback-mobile.vercel.app/",
        },
        {
            title: "Old Bio",
            prop: "Lorem ipsum dolor sit amet consectetur adipisicing elit Pariatur odio tempore quis perspiciatis quibusdam modi impedit voluptate sapiente corrupti hic",
            image: Bio,
            link: "https://nowath.github.io/",
        },
    ]);
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
                                ผมมีความสนใจ
                                ใฝ่เรียนรู้เกี่ยวกับการเรียนวิชาหุ่นยนต์และเทคโนโลยีมาตั้งแต่เริ่มเรียนชั้นมัธยมศึกษาตอนต้นรวมทั้งได้รับการสนับสนุนทั้งเวลาและงบประมาณจากครอบครัว
                                ประกอบกับได้รับความรู้จากครูผู้สอน
                                โดยเริ่มต้นการจากเรียนเขียนโปรแกรมภาษา C
                                นั่นเป็นจุดเปลี่ยนสำคัญที่ทำให้ผมได้สัมผัสกับโลกของการเขียนโค้ด
                                การฝึกอ่านและแก้ไขข้อผิดพลาด {"(Error text) "}
                                จากเรื่องยากกลายเป็นเรื่องสนุกและตื่นเต้นกับการแก้ปัญหา
                                ซึ่งช่วยให้ผมตระหนักถึงความสำคัญของเทคโนโลยี
                                ช่วงการระบาดของ COVID-19
                                โรงเรียนไม่สามารถเปิดทำการเรียนการสอนตามปกติได้
                                ผมจึงใช้เวลาว่างศึกษาการพัฒนาเว็บไซต์ด้วยตนเอง
                                เริ่มจากการเรียนรู้ภาษา HTML, CSS และ JavaScript
                                ผ่าน Youtube จนสามารถสร้าง Website Portfolio
                                ได้สำเร็จ
                                ประสบการณ์นี้ไม่เพียงแต่เสริมทักษะด้านการเขียนโปรแกรม
                                แต่ยังทำให้ผมเห็นภาพรวมของโครงสร้างการทำงานของเว็บไซต์และความสำคัญของการวางแผนพัฒนาโครงการอย่างเป็นระบบ
                                ความสนใจในการพัฒนาเว็บไซต์ยังนำไปสู่โอกาสในการทำโครงงานที่น่าสนใจหลายโครงการ
                                เช่น การพัฒนาเว็บไซต์แปลง QRCODE และโครงงาน
                                Trash Back
                                เป็นระบบแลกเปลี่ยนขยะประเภทกระป๋องและขวดพลาสติกแบบอัตโนมัติเป็นต้น
                                โครงการเหล่านี้ไม่เพียงช่วยเสริมทักษะการเขียนโปรแกรมแต่ยังทำให้ผมตระหนักถึงศักยภาพของเทคโนโลยีในการแก้ปัญหาสังคมได้อย่างเป็นรูปธรรม
                                และยิ่งสร้างแรงบันดาลใจให้ผมมุ่งมั่นที่จะพัฒนานวัตกรรมใหม่ๆและพัฒนาสิ่งที่มีอยู่เดิมให้ทันสมัยยิ่งขึ้น
                                อาทิ การออกแบบ UX/UI ของ Window13
                                ที่มีประโยชน์ต่อสังคมและประเทศชาติ
                                การพัฒนาตัวเองอย่างต่อเนื่องทำให้ผมได้รับโอกาสเข้าร่วมแข่งขัน
                                Green Mech ในหัวข้อ R4M ระดับนานาชาติ
                                ซึ่งประสบการณ์นี้ช่วยพัฒนาทักษะการคิดเชิงวิเคราะห์และการทำงานเป็นทีมต่อมาผมได้เข้าร่วมการแข่งขันโครงงาน
                                Microbit ที่คณะวิทยาศาสตร์ สจล.
                                ยังทำให้ผมได้เปิดโลกทัศน์และเห็นถึงผลงานต่างๆและศักยภาพของการนำเทคโนโลยีมาใช้ในสถาบันการศึกษานี้
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
                                                    <li className="flex items-center gap-1">
                                                        <FaPython />
                                                        Python
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
                                                    <div className="flex-row md:flex-col flex gap-3">
                                                        <div className="gap-y-3 flex flex-col">
                                                            <li className="flex items-center gap-1">
                                                                <FaGithub />{" "}
                                                                Github
                                                            </li>
                                                            <li className="flex items-center gap-1">
                                                                <RiSupabaseFill />{" "}
                                                                Supabase
                                                            </li>
                                                            <li className="flex items-center gap-1">
                                                                <VscVscode />{" "}
                                                                Vscode
                                                            </li>
                                                            <li className="flex items-center gap-1">
                                                                <SiVscodium />{" "}
                                                                Vscodium
                                                            </li>
                                                        </div>
                                                        <div className="flex gap-y-3 flex-col">
                                                            <li className="flex items-center gap-1">
                                                                <SiPostman />{" "}
                                                                Postman
                                                            </li>
                                                            <li className="flex items-center gap-1">
                                                                <SiArduino />{" "}
                                                                Arduino IDE
                                                            </li>
                                                        </div>
                                                    </div>
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
                        <div className="content flex w-full gap-5 flex-wrap flex-col sm:flex-row">
                            <motion.a
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                href="https://www.anubarnsurin.ac.th/"
                                target="_blank"
                                className="flex justify-center items-center flex-col flex-1 py-4 rounded-xl transition-all hover:shadow-pink-300 hover:shadow-2xl hover:bg-[rgba(255,255,255,0.27)] hover:backdrop-blur-lg"
                            >
                                <img
                                    className=" w-48 md:w-64 rounded-full"
                                    src={Anubarn}
                                    alt=""
                                />
                                <h1 className="text-2xl">Anubarnsurin</h1>
                                <p className="text-lg">Primary school</p>
                            </motion.a>
                            <motion.a
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                href="https://sura.ac.th/"
                                target="_blank"
                                className="flex justify-center items-center flex-col flex-1 py-4 rounded-xl transition-all hover:shadow-green-700 hover:shadow-2xl hover:bg-[rgba(255,255,255,0.27)] hover:backdrop-blur-lg"
                            >
                                <img
                                    className=" w-48 md:w-64 bg-white rounded-full"
                                    src={SWK}
                                    alt=""
                                />
                                <h1 className="text-2xl">Surawittayakarn</h1>
                                <p className="text-lg">Middle school</p>
                            </motion.a>
                            <motion.a
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                href="https://sura.ac.th/"
                                target="_blank"
                                className="flex justify-center items-center flex-col flex-1 py-4 rounded-xl transition-all hover:shadow-yellow-300 hover:shadow-2xl hover:bg-[rgba(255,255,255,0.27)] hover:backdrop-blur-lg"
                            >
                                <img
                                    className=" w-48 md:w-64 bg-white rounded-full"
                                    src={SWK}
                                    alt=""
                                />
                                <h1 className="text-2xl">Surawittayakarn</h1>
                                <p className="text-lg">High school</p>
                            </motion.a>
                        </div>
                    </section>

                    <section id="Project" class="h-auto w-[94%]">
                        <div className="flex justify-start text-4xl">
                            <h1 className="header relative">Project</h1>
                        </div>
                        <div className=" mt-10">
                            <div className="cards flex justify-around gap-y-10 flex-wrap">
                                {cardData.map((items) => (
                                    <motion.div
                                        initial={{ y: 40, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        whileHover={{ scale: 1.1 }}
                                        className="flex flex-col justify-between card w-80 h-96 bg-[#ffffff60] overflow-hidden backdrop-blur-lg rounded-xl"
                                    >
                                        <div className=" h-[80%]">
                                            <img
                                                className="h-2/5 w-full object-cover mb-3"
                                                src={items.image}
                                                alt=""
                                            />
                                            <div className="px-2">
                                                <h1 className="text-4xl mb-3">
                                                    {items.title}
                                                </h1>
                                                <p className=" h-32 overflow-auto">
                                                    {items.prop}
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" h-[20%] flex justify-center items-center">
                                            <motion.a
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 20,
                                                    duration: 0.3,
                                                }}
                                                className="bg-pink-400 group relative w-36 flex justify-center items-center rounded-lg h-10"
                                                href={items.link}
                                                target="_blank"
                                            >
                                                LOOK
                                                <div className=" absolute transition-all group-hover:translate-x-9 group-hover:visible invisible ">
                                                    <FaArrowRight />
                                                </div>
                                            </motion.a>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center gap-2 mt-5 mb-5">
                            <p>See More at</p>
                            <a
                                className="text-red-500"
                                href="https://github.com/Nowath"
                            >
                                GITHUB
                            </a>
                        </div>
                    </section>

                    <section id="Contact" class="w-[94%] h-auto py-5">
                        <div className="flex justify-start text-4xl">
                            <h1 className="header relative">Contact</h1>
                        </div>
                        <div className="mt-10 flex flex-wrap gap-y-10 justify-around w-full">
                            <SocialContact />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Home;
