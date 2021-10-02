import "./App.css";
import HomePage from "./Components/HomePage/Homepage";
import Navbar from "./Components/NavBar/navbar";
import Products from "./Components/Products/Products";
import Contact from "./Components/ContactUs/Contact";
import Footer from "./Components/Footer/Footer.jsx";
import { Divider } from "@mui/material";
import About from "./Components/AboutUs/About";
import { useEffect, useState } from "react";
import Gear from "./Images/animation_500_ku9j2ktm.gif"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      window.addEventListener("load", () => {
        setLoading(false);
      });
    } else {
      window.removeEventListener("load", () => {});
    }
    return () => {
      window.removeEventListener("load", () => {});
    };
  }, [loading]);

  return (
    <div className="App">
      {loading ? (
        <div className="App-loader">
          <img src={Gear} alt=""/>
        </div>
      ) : (
        <>
          <Navbar />
          <HomePage />
          <Divider
            data-aos="zoom-in"
            data-aos-duration="1000"
            variant="middle"
          />
          <Products />
          <About />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
