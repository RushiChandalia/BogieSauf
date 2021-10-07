import React from 'react'
import "./footerMobile.css"
import Logo from "../../Images/bogie_sauf_logo.png"
import LinkedIn from "../../Images/linkedin.png"
import Instagram from "../../Images/instagram.png"
import Facebook from "../../Images/facebook.png"
import Twitter from "../../Images/twitter.png"
import WhatsApp from "../../Images/whatsapp.png"
import "./footerDesktop.css"
const Footer = () => {
    return (
        <div className="container Footer" >
            <div  className="logo">
                <img src={Logo} id="nav-logo" alt="" />
                <p>Bogie Sauf</p>
            </div>
            <div className="footer-slogan">
                <p>B E U N S T O P P A B L E</p>
                <p> We care for you. We work for you.</p>
            </div>
            <div className="footer-info">
                <div>
                    <h4>
                        Ping us on <img id="whatsapp-imgae" src={WhatsApp} alt="WhatsApp" />
                    </h4>
                    <p>+91 9016386215</p>
                </div>
                <div className="footer-follow">
                    <h4>Follow Us</h4>
                    <a href="https://www.linkedin.com/company/bogie2021/" target="_blank" rel="noreferrer"><img src={LinkedIn} alt="LinkedIn" /></a>
                    <a href="https://www.instagram.com/bogie_sauf_/" target="_blank" rel="noreferrer"><img src={Instagram} alt="Instagram" /></a>
                    <a href="https://www.facebook.com/bogiesauff" target="_blank" rel="noreferrer"><img src={Facebook} alt="Instagram" /></a>
                    <a href="https://twitter.com/bogiesauf?lang=en" target="_blank" rel="noreferrer"><img src={Twitter} alt="Instagram" /></a>
                </div>

            </div>
        </div>
    )
}

export default Footer
