import EducationTitle from "../Fragments/EducationTitle";

const Education = () => {
    const Journey = [
        {
            id: 1,
            title: "Sekolah Dasar",
            tahun: "2012 - 2018",
        },
        {
            id: 2,
            title: "Pesantren",
            tahun: "2018 - 2019",
        },
        {
            id: 3,
            title: "Sekolah Menengah Pertama",
            tahun: "2019 - 2022",
        },
        {
            id: 4,
            title: "Sekolah Menengah Kejuruan",
            tahun: "2022 - SOON",
        },
    ];
    return (
        <main className="pt-20 px-5 lg:px-32">
            <div className="px-6 lg:px-24 mb-10 lg:mb-20">
                <h1 className="text-3xl font-extrabold text-white lg:text-4xl">EDUCATION JOURNEY ✈</h1>
            </div>
            <div className="flex justify-between">
                <div>
                    {Journey.map((m) => (
                        <div key={m.id}>
                            <EducationTitle title={m.title} isi={m.isi} tahun={m.tahun} />
                        </div>
                    ))}
                </div>
                <div className="px-20 hidden lg:block">
                    <img className="w-[500px] bergerak" src="https://engg.cambridge.edu.in/wp-content/uploads/2021/09/WHY-A-SKILL-BASED-EDUCATION-IS-BECOMING-MORE-IMPORTANT-NOW-1-1024x730.png" alt="" />
                </div>
            </div>
        </main>
    );
};

export default Education;
