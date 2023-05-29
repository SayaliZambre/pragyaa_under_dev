// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
// import Sociallinks from './components/Sociallinks';
import { Skills } from "./components/Skills";
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
// import { Project } from './components/Project';





function App() {
  return (
    <div className="App">
       <NavBar/>
       <Banner/>
       {/* <Sociallinks/> */}
       <Skills />
       <Contact/>
       <Footer/>
       {/* <Project/> */}
    </div>
  );
}

export default App;
