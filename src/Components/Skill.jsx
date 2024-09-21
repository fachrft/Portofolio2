const Skill = ({isi, img, width}) => {
    return (
    <div className="shadow-2xl shadow-teal-500 px-2 py-1 flex items-start justify-start rounded-md bg-white" data-aos="fade-right" data-aos-duration="1000">
            <img className={width} src={img} alt="" />
            <span className="px-2 py-1 font-bold">{isi}</span>
        </div>
    );
};

export default Skill;
