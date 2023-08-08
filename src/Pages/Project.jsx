import CardProject from "../Fragments/CardProject";
import TrashGo from "../Assets/TrashGo.jpg";
import Portofolio from "../Assets/Portofolio Kelas 10.jpg";
import Joki from "../Assets/Joki.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../styles.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const Project = () => {
    const isiCard = [
        {
            id: 1,
            image: TrashGo,
            title: "Trash Go",
            desc: "Ini adalah web untuk lomba, web ini dibangun oleh 5 orang yang keren keren, alhamdulillahnya kita pertama kali lomba bikin website lolos ke final, tapi sayangnya ga juara😅",
            link: "https://trash-go.vercel.app/",
        },
        {
            id: 2,
            image: Portofolio,
            title: "Portofolio Kelas X",
            desc: "Kalo ini web pertama kali buat di kelas X  tapi aga kureng ama aga aneh jadi bikin lagi",
            link: "https://fachrifat.vercel.app/",
        },
        {
            id: 3,
            image: Joki,
            title: "SIJA Joki",
            desc: "Kalo ini web pertama kali buat di kelas X  tapi aga kureng ama aga aneh jadi bikin lagi",
        },
        {
            id: 4,
            image: TrashGo,
            title: "Trash Go",
            desc: "Ini adalah web untuk lomba, web ini dibangun oleh 5 orang yang keren keren, alhamdulillahnya kita pertama kali lomba bikin website lolos ke final, tapi sayangnya ga juara😅",
            link: "https://trash-go.vercel.app/",
        },
        {
            id: 5,
            image: Portofolio,
            title: "Portofolio Kelas X",
            desc: "Kalo ini web pertama kali buat di kelas X  tapi aga kureng ama aga aneh jadi bikin lagi",
            link: "https://fachrifat.vercel.app/",
        },
        {
            id: 6,
            image: Joki,
            title: "SIJA Joki",
            desc: "Kalo ini web pertama kali buat di kelas X  tapi aga kureng ama aga aneh jadi bikin lagi",
        },
    ];

    return (
        <div className="container pt-36 lg:px-32" id="project">
            <div className="px-10 lg:px-24 flex items-center">
                <h1 className="text-white text-3xl font-bold lg:text-4xl">PROJECT</h1>
                <span><img className="w-12 lg:w-16" src="https://png.pngtree.com/png-clipart/20221011/original/pngtree-laptop-display-vector-design-free-download-png-image_8675040.png" alt="" /></span>
            </div>
            <div className="">
                <div className="container" data-aos="fade-left"
     data-aos-offset="500"
     data-aos-duration="500">
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
                                <CardProject image={card.image} title={card.title} desc={card.desc} link={card.link}></CardProject>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Project;

