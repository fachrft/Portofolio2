import CardProject from "../Fragments/CardProject";
import TrashGo from "../Assets/TrashGo.jpg";
import Portofolio from "../Assets/Portofolio Kelas 10.jpg";
import Joki from "../Assets/Joki.jpg";
import ZeroCard from '../Assets/zero-card.png'
import ZeroCardn from '../Assets/zero-cardn.png'
import GSS from '../Assets/gss.png'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../styles.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const Project = () => {
    const handleAlert = () => {
        alert("Maaf website tidak di hosting dikarenakan hosting backend berbayar, jadi kalo cuma hosting front doang jelek");
    };

    const isiCard = [
        {
            id: 1,
            image: TrashGo,
            title: "Trash Go",
            desc: "",
            link: "https://trash-go.vercel.app/",
        },
        {
            id: 2,
            image: Portofolio,
            title: "Portofolio Kelas X",
            desc: "",
            link: "https://fachrifat.vercel.app/",
        },
        {
            id: 3,
            image: Joki,
            title: "SIJA Joki",
            desc: "",
            onclick: handleAlert
        },
        {
            id: 4,
            image: ZeroCard,
            title: "Zero Card",
            desc: "",
            link: "https://zero-cardn.netlify.app/",
        },
        {
            id: 5,
            image: ZeroCardn,
            title: "Zero Cardn",
            desc: "",
            link: "https://zerro-carddn.vercel.app/",
        },
        {
            id: 6,
            image: GSS,
            title: "Gerakan Sekolah Sehat",
            desc: "",
            link: "https://gss-masbrew.vercel.app/"
        },
    ];


    return (
        <div className="container pt-36 lg:px-32" id="project">
            <div className="px-10 lg:px-24 flex items-center">
                <h1 className="text-white text-3xl font-bold lg:text-4xl">PROJECT</h1>
                <span>
                    <img className="w-12 lg:w-16" src="https://png.pngtree.com/png-clipart/20221011/original/pngtree-laptop-display-vector-design-free-download-png-image_8675040.png" alt="" />
                </span>
            </div>
            <div className="">
                <div className="container" data-aos="fade-left" data-aos-offset="500" data-aos-duration="500">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {isiCard.map((card) => (
                            <SwiperSlide key={card.id} className="h-[350px]">
                                <CardProject image={card.image} title={card.title} desc={card.desc} link={card.link} onClick={card.onclick}></CardProject>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Project;
