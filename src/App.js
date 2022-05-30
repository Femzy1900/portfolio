import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";  
import PortFolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import {themeContext} from './context'
import { useContext } from "react";


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background: darkMode? 'black': "",
      color: darkMode? 'white': ''
    }}
    >
     <Navbar />
     <Intro />
     <Services />
     <Experience />
     <PortFolio />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
