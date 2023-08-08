import Navbar from "./Fragments/Navbar";
import HeroSection from "./Pages/Hero";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Loader from "./Pages/LoaderAnimation";
import Education from "./Pages/Education";
import Footer from "./Pages/Footer";
import Background from "./Assets/backgorund.jpg";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
    useEffect(() => {
        AOS.init({
            once: true,
        })
      }, [])
    
    return (
        <div>
            <div className="container max-w-[100vw] w-full h-full bg-cover bg-repeat overflow-hidden" style={{ backgroundImage: `url(${Background})` }}>
                <Loader />
                <Navbar />
                <HeroSection />
                <About />
                <Project />
                <Education />
                <Footer />
            </div>
        </div>
    );
};

export default App;
