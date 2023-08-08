const Skills = () => {
    return (
        <div className="h-[40vh] pt-20 lg:px-24" id="skills">
            <div className="px-10 flex items-center gap-3">
                <h1 className="text-white font-bold text-2xl lg:text-4xl">SKILLS</h1>
                <span className="" > <img className="w-12 lg:w-16 text-white" src="https://cdn-icons-png.flaticon.com/512/6171/6171939.png" alt="" /></span>
            </div>
            <div className="px-10 w-full pt-8 flex flex-wrap gap-2 lg:w-[60vw]">
                <div className="shadow-2xl shadow-teal-500 px-2 py-1 flex items-start justify-start rounded-md bg-white" data-aos="fade-right" data-aos-duration="1000">
                    <img className="w-7" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="" />
                    <span className="px-2 py-1 font-bold">HTML</span>
                </div>
                <div className="px-2 py-1 flex items-start justify-center rounded-md bg-white" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                    <img className="w-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png" alt="" />
                    <span className="pl-4 py-1 text-center font-bold">CSS</span>
                </div>
                <div className="px-2 py-1 flex items-start justify-center rounded-md bg-white" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                    <img className="w-8 scale-125" src="https://zahrohsite.files.wordpress.com/2017/11/bootstrap.png" alt="" />
                    <span className="px-2 py-1 font-bold">BOOTSTRAP</span>
                </div>
                <div className=" px-2 py-1 flex items-start justify-center rounded-md bg-white"data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
                    <img className="w-7" src="https://www.kodingakademi.id/wp-content/uploads/2023/04/Tailwind_CSS_Logo-removebg-preview.png" alt="" />
                    <span className="px-2 py-1 font-bold">TAILWIND</span>
                </div>
                <div className=" px-2 py-1 flex items-start justify-center rounded-md bg-white" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="800">
                    <img className="w-8 scale-[1.18] -translate-y-[2px]" src="https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png" alt="" />
                    <span className="px-2 py-1 font-bold">JAVASCRIPT</span>
                </div>
                <div className=" px-3 py-2 flex items-start justify-center rounded-md bg-white" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000">
                    <img className="w-6 scale-[1.18]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
                    <span className="px-2 font-bold">REACT JS</span>
                </div>
                <div className=" px-3 py-2 flex items-start justify-center rounded-md bg-white" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1200">
                    <img className="w-7 scale-125 translate-y-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="" />
                    <span className="px-3 font-bold">NODE JS</span>
                </div>
                <div className=" px-3 py-2 flex items-start justify-center rounded-md bg-white" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1400">
                    <img className="w-7 scale-125" src="https://youteam.io/blog/wp-content/uploads/2022/04/expressjs_logo.png" alt="" />
                    <span className="px-2 font-bold">EXPRESS JS</span>
                </div>
            </div>
        </div>
    );
};

export default Skills;
