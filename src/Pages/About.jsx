import Fachrifat from "../Assets/Fachrifat.png";
import Skills from "../Fragments/Skills";
import "../font.css";

const About = () => {
    return (
        <main className="pt-13 lg:px-24">
            <div className="container px-2 pt-8">
                <div className="flex justify-between lg:justify-start">
                    <div className="max-w-sm w-56 lg:max-w-xl lg:w-[400px]">
                        <img className="" src={Fachrifat} alt="" />
                    </div>
                    <div className="max-w-sm flex items-center flex-col w-56 h-52 lg:w-96 lg:pt-18 lg:items-start lg:px-5">
                        <div className="bg-white my-2 w-32 h-20 rounded-md px-3 lg:w-48 lg:py-2 lg:mb-5">
                            <h1 className="font-bold lg:text-2xl">HI,</h1>
                            <h1 className="font-bold lg:text-2xl">I'm Ripat✌</h1>
                        </div>
                        <div className="w-36 text-white h-52">
                            <h1 className="pl-4 lg:text-2xl lg:pl-0 font-bold">05/02/2006</h1>
                            <h1 className="text-xs pl-3 lg:text-2xl lg:pl-0 font-bold">fachrifat05@gmail.com</h1>
                        </div>
                    </div>
                </div>
                <div className="pt-5 mx-w-md px-3 flex justify-between lg:justify-end lg:gap-10 lg:-translate-y-64 lg:px-24">
                    <div className="w-[200px] text-center px-3 lg:w-[400px] lg:pr-10">
                        <h1 className="text-white font-bold text-xl mb-2 lg:text-3xl">About me</h1>
                        <p className="pb-6 text-sm text-white text-md lg:text-xl">Ini adalah portofolio kedua ku, aku seorang pelajar di SMK Negeri 26 Jakarta dan jurusanku adalah SIJA jurusanku tercintah ❤</p>
                    </div>
                    <div className="w-[170px] text-center lg:w-[280px]">
                        <div className="bg-white rounded-md mx-4">
                            <h1 className="text-black font-bold text-xl mb-2 lg:text-2xl">Quotes</h1>
                        </div>
                        <p className="pb-6 text-sm text-white text-md lg:text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, mollitia?</p>
                    </div>
                </div>
            </div>
            <Skills />
        </main>
    );
};

export default About;
