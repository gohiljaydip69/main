import "./home.css";
import Navbar from "../../components/navbar";
import HomeBanner from "./components/HomeBanner/homeBanner";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import Experience from "./components/experiance/experiance";
import Project from "./components/Project/project";
import Contact from '../../components/contact/contact';
const Home = () => {
  return (
    <>
      <Navbar />
      <HomeBanner />
      <About />
      <Skills />
      <Experience  />
      <Project /> 
      <Contact />
    </>
  );
};

export default Home;
