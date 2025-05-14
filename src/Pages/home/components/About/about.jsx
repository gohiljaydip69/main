import './about.css';
import about from '../../assets/about-main.png';

const About = () => {
  return (
    <div id='About-Id' className="about-Container">
      <div className="about-Content">
        <h1 className="about-Heading">About Me</h1>
        <p className="about-Description">
          I'm a passionate full-stack developer specializing in the MERN stack. I focus on building clean, responsive, and scalable applications that enhance user experience.
        </p>
        <p className="about-Description">
          With a strong foundation in JavaScript and modern frameworks, I bring both creativity and technical expertise to every project. I thrive in collaborative environments and love solving real-world problems through code.
        </p>
        <p className="about-Description">
          I’m constantly learning and keeping up with the latest trends in web development to deliver future-ready solutions.
        </p>
      </div>

      <div className="about-image">
        <img src={about} alt="Developer Illustration" className="about-InnerImage" />
      </div>
    </div>
  );
};

export default About;
  