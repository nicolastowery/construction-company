import Header from "./ui/Header/Header";
import "./styles.css";
import Hero from "./ui/Hero/Hero";
import Reasons from "./ui/Reasons/Reasons";
import AboutUs from "./ui/AboutUs/AboutUs";
import Services from "./ui/Services/Services";
import Stats from "./ui/Stats/Stats";
import Ads from "./ui/Ads/Ads";
import Projects from "./ui/Projects/Projects";
import CTA from "./ui/CTA/CTA";
import Bottom from "./ui/bottom/Bottom";
import Footer from "./ui/Footer/Footer";

function App() {
  return (
    <div className="appContainer">
      <div className="app">
        <Header />
        <Hero />
        <Reasons />
        <AboutUs />
        <Services />
        <Stats />
        <Ads />
        <Projects />
        <CTA />
        <Bottom />
        <Footer />
      </div>
    </div>
  );
}

export default App;
