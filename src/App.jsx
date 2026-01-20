import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import LogoSection from "./components/LogoSection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
    </>
  );
};

export default App;
