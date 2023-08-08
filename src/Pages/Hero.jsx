import React, { useEffect, useRef } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Astronot from "../Assets/Group 18.png";

const HeroSection = () => {
    const [text] = useTypewriter({
        words: ["Backend", "Frontend"],
        loop: 0,
    });

    return (
        <section className="pt-40 h-[100vh] lg:px-40">
            <div className="container lg:flex lg:justify-center lg:items-center">
                <div className="p-6 text-white lg:flex lg:flex-col gap-4 lg:pt-2r lg:pr-20 lg:w-1/2 " data-aos="fade-up"
     data-aos-duration="3000">
                    <p className="text-center text-xl lg:text-left lg:text-4xl">Hello I'm👋</p>
                    <h1 className="text-3xl text-center font-bold lg:text-left lg:text-6xl">
                        Fachrifat <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-violet-600">Zhafran</span>
                    </h1>
                    <p className="text-center lg:text-xl lg:text-left lg:mb-5 ">Junior {text} Developer</p>
                    <div className="mt-4 flex justify-center lg:justify-start">
                        <div className="p-2 bg-sky-800 rounded-full text-center w-36 lg:w-52">
                            <p className="lg:text-xl">Download Cv</p>
                        </div>
                    </div>
                </div>
                <div className="mt-12 lg:mt-0 lg:w-1/2r">
                    <img src={Astronot} className="bergerak w-[500px] lg:translate-x-20" alt="ripat"></img>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
