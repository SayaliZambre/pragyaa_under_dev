// import logo from './logo.svg';
import './App.css';
// import Particle+9999++Background from './components/ParticleBackground';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar }  from "./components/NavBar";
import { Banner } from "./components/Banner";
import Sociallinks from './components/Sociallinks';
// import Card from './components/Card';
// import GallerySection from './components/GallerySection';
import { Skills } from "./components/Skills";
// import { Workshop } from "./components/Workshop";
// import  Contact  from './components/Contact';

// import  Footer  from './components/Footer';
import Slider from './components/Slider';
// ... rest of your code
import { Projects } from './components/Project';
// import  About  from './components/About';


function App() {
  return (
    <div className="App">
    
       <NavBar/>
       <Banner/>
       <Sociallinks/>
       <Projects/>
       <Skills />
       <Slider/>
       {/* <Card/> */}
       {/* <Workshop/> */}
       {/* <Faq/> */}
       {/* <GallerySection/> */}
       {/* <Footer/> */}
    </div>
  );
}

export default App;
