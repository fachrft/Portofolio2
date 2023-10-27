import { useRef } from "react";

const Navbar = () => {
    const hamburger = useRef(null);
    const header = useRef(null);
    const navMenu = useRef(null);

    window.onscroll = () => {
        const fixedNav = header.current.offsetTop;
        if (window.pageYOffset > fixedNav) {
            header.current.classList.add("navbar-fixed");
            navMenu.current.classList.add("text-black");
        } else {
            header.current.classList.remove("navbar-fixed");
        }
    };

    const clickHamburger = () => {
        hamburger.current.classList.toggle("hamburger-active");
        navMenu.current.classList.toggle("hidden");
    };

    return (
        <header ref={header} className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10 h-20">
            <div className="container">
                <div className="flex px-6 font-sans justify-between items-center relative lg:px-10">
                    <div className="px-2">
                        <a className="font-semibold text-xl text-white" href="">
                            Fachrifat Zhafran
                        </a>
                    </div>
                    <div className="flex items-center">
                        <button ref={hamburger} onClick={clickHamburger} className="animasi-x absolute pr-4 right-4 block lg:hidden" type="Button">
                            <span className="hamburger border-2 transition duration-200 ease-in-out origin-top-left"></span>
                            <span className="hamburger border-2 transition duration-200 ease-in-out"></span>
                            <span className="hamburger border-2 transition duration-200 ease-in-out origin-bottom-left"></span>
                        </button>
                        <nav ref={navMenu} className="hidden absolute bg-white max-w-[240px] right-3 w-full py-5 shadow-lg rounded-lg top-9 lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                            <ul className="lg:flex">
                                <li className="group">
                                    <a href="" className="text-base py-2 mx-8 flex lg:text-white font-semibold group-hover:text-sky-500">
                                        HOME
                                    </a>
                                </li>
                                <li className="group">
                                    <a href="" className="text-base py-2 mx-8 flex lg:text-white font-semibold group-hover:text-sky-500">
                                        ABOUT
                                    </a>
                                </li>
                                <li className="group">
                                    <a href="" className="text-base py-2 mx-8 flex lg:text-white font-semibold group-hover:text-sky-500">
                                        PROJECT
                                    </a>
                                </li>
                                <li className="group">
                                    <a href="" className="text-base py-2 mx-8 flex lg:text-white font-semibold group-hover:text-sky-500">
                                        EDUCATION
                                    </a>
                                </li>
                                <li className="group">
                                    <a href="" className="text-base py-2 mx-8 flex lg:text-white font-semibold group-hover:text-sky-500">
                                        CONTACT
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
