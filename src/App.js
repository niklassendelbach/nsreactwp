import { NavbarComponent } from "./components/NavBar.js";
import { HomeComponent } from "./components/Home.js";
import { CvComponent } from "./components/Cv.js";
import { AboutMeComponent } from "./components/AboutMe.js";
import { SecretComponent } from './components/Secret.js';
import { PortfolioComponent } from "./components/Portfolio.js";
import { Footer } from "./components/Footer.js";
import {BrowserRouter as Router, HashRouter, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export default function App() {
  return (
    <div>
    <HashRouter>
    <NavbarComponent/>
      <Routes>
        <Route path="/" element={<HomeComponent/>} />
        <Route path="/Home" element={<HomeComponent/>} />
        <Route path="/AboutMe" element={<AboutMeComponent/>} />
        <Route path="/Cv" element={<CvComponent/>} />
        <Route path="/Portfolio" element={<PortfolioComponent/>} />
      </Routes>
  </HashRouter>
  <SecretComponent />
  <Footer />
  </div>
  )
}
