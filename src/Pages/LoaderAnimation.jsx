const Loader = () => {
        function toggleGordeng(isInit = false) {
        if (isInit) {
            document.querySelector("body").style = "overflow-y: hidden;";
            setTimeout(() => {
                document.querySelector("body").style = "overflow-y: auto;";
            }, 2000);
        }
    }
    toggleGordeng(true);
    return (
        <main className="">
            <div className="loader w-full h-[100%] bg-blue-950 flex justify-center items-center fixed top-0 left-0 z-20">
                <div className="w-[500px] h-[100px] overflow-hidden">
                    <div className="element flex justify-center items-center w-full h-full">
                        <h1 className="text-3xl text-white text-center font-bold lg:text-left lg:text-5xl">
                            Fachrifat <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-violet-600">Zhafran</span>
                        </h1>
                    </div>
                    <div className="element flex justify-center items-center w-full h-full">
                        <h1 className="text-3xl text-white text-center font-bold lg:text-left lg:text-5xl">Web Developer💻</h1>
                    </div>
                    <div className="element flex justify-center items-center w-full h-full">
                        <h1 className="text-3xl text-white text-center font-bold lg:text-left lg:text-5xl">I Hope Can Help You😄</h1>
                    </div>
                    <div className="element flex justify-center items-center w-full h-full">
                        <h1 className="text-3xl text-white text-center font-bold lg:text-left lg:text-5xl">
                             <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-violet-600">Welcome ❤</span>
                        </h1>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Loader;
