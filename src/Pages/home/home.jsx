import './home.css';
import Navbar from '../../components/navbar';
import HomeBanner from './components/HomeBanner/homeBanner';
import About from './components/About/about';

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeBanner />
      <About />
    </>
  )
}

export default Home