import Skill from "../Components/Skill";
import PHP from '../Assets/php.png';
import Laravel from '../Assets/Laravel.svg.png';

const Skills = () => {
    return (
        <div className="h-[40vh] pt-20 lg:px-24" id="skills">
            <div className="px-10 flex items-center gap-3">
                <h1 className="text-white font-bold text-2xl lg:text-4xl">SKILLS</h1>
                <span className="">
                    {" "}
                    <img className="w-12 lg:w-16 text-white" src="https://cdn-icons-png.flaticon.com/512/6171/6171939.png" alt="" />
                </span>
            </div>
            <div className="px-10 w-full pt-8 flex flex-wrap gap-2 lg:w-[60vw]">
                <Skill img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" isi="HTML" width="w-7" />
                <Skill img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png" isi="CSS" width="w-5"/>
                <Skill img="https://zahrohsite.files.wordpress.com/2017/11/bootstrap.png" isi="Bootstrap" width="w-10"/>
                <Skill img="https://www.kodingakademi.id/wp-content/uploads/2023/04/Tailwind_CSS_Logo-removebg-preview.png" isi="Tailwind" width="w-7"/>
                <Skill img="https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png" isi="Javascript" width="w-9"/>
                <Skill img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" isi="Node JS" width="w-7 translate-y-2"/>
                <Skill img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" isi="React JS" width="w-7 translate-y-1"/>
                <Skill img="https://youteam.io/blog/wp-content/uploads/2022/04/expressjs_logo.png" isi="Express JS" width="w-10"/>
                <Skill img={PHP} isi="PHP" width="w-8"/>
                <Skill img={Laravel} isi="Laravel" width="w-8"/>
                <Skill img="https://w7.pngwing.com/pngs/444/484/png-transparent-mysql-database-encapsulated-postscript-logo-jquery-blue-text-logo-thumbnail.png" isi="MySQL" width="w-8"/>
                <Skill img="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png" isi="MongoDB" width="w-8"/>
            </div>
        </div>
    );
};

export default Skills;
