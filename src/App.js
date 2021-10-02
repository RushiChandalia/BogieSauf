import "./App.css";
import HomePage from "./Components/HomePage/Homepage"
import Navbar from "./Components/NavBar/navbar";
import Products from "./Components/Products/Products";
import Contact from "./Components/ContactUs/Contact";
import Footer from "./Components/Footer/Footer.jsx"
import { Divider } from "@mui/material";
import About from "./Components/AboutUs/About"


function App() {
  return <div className="App">
    <Navbar/>
    <HomePage/>
    <Divider data-aos = "zoom-in" data-aos-duration = "1000"  variant="middle" />
    <Products/>
    <About/>
    <Contact/>
    <Footer/>
  </div>;
}

export default App;
