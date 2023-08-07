const CardProject = (props) => {
    const { image, title, desc, link, onClick  } = props;
    return (
        <div className=" bergerak relative flex justify-center item-start rounded-lg bg-white w-[300px] h-[270px] transition-[0.7] group hover:h-[350px] lg:w-[330px] lg:h-[300px]">
            <div className="absolute w-[250px] h-[180px] top-[20px] rounded-lg transition-[0.5] bg-slate-400 group-hover:top-[-70px] group-hover:scale-75 lg:w-[300px] lg:h-[190px]">
                <img className="absolute top-0 left-0 rounded-lg w-full h-full object-cover overflow-hidden" src={image} alt="" />
            </div>
            <div className="absolute w-full px-5 text-center overflow-hidden top-[220px] h-[25px] transition-[0.5] group-hover:h-72 group-hover:top-[120px] lg:top-[240px]">
                <h1 className="font-bold text-2xl mb-2">{title}</h1>
                <p className="mb-4">{desc}</p>
                <a className="w-10 h-5 bg-sky-400 px-5 py-2 cursor-pointer rounded-full" href={link} onClick={onClick}>
                    View Site
                </a>
            </div>
        </div>
    );
};

export default CardProject;
