const EducationTitle = (props) => {
    const { title, tahun } = props;
    return (
        <div className="flex px-10 lg:px-28">
            <div className="">
                <div className="w-[2px] h-full bg-white relative before:content-[''] before:w-[15px] before:h-[15px] before:bg-white before:rounded-full before:absolute before:-left-2 before:top-2"></div>
            </div>
            <div className="px-5 mb-10 text-white">
                <h1 className="text-2xl mb-2 lg:text-3xl">{title}</h1>
                <p className="font-bold mb-5 lg:text-2xl">{tahun}</p>
            </div>
        </div>
    );
};

export default EducationTitle;
