import Navbar from "./Fragments/Navbar";
import HeroSection from "./Pages/Hero";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Loader from "./Pages/LoaderAnimation";
import Education from "./Pages/Education";
import Background from "./Assets/backgorund.jpg";

const App = () => {
    return (
        <div>
            <div className="container max-w-[100vw] w-full h-[600vh] bg-cover bg-repeat overflow-hidden" style={{ backgroundImage: `url(${Background})` }}>
                <Loader />
                <Navbar />
                <HeroSection />
                <About />
                <Project />
                <Education />
            </div>
        </div>
    );
};

export default App;