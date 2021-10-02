import React from 'react'
import "./footerMobile.css"
import Logo from "../../Images/bogie_sauf_logo.png"
import LinkedIn from "../../Images/linkedin.png"
import Instagram from "../../Images/instagram.png"
import "./footerDesktop.css"
const Footer = () => {
    return (
        <div className="container Footer" >
            <div  className="logo">
                <img src={Logo} id="nav-logo" alt="" />
                <p>Bogie Sauf</p>
            </div>
            <div className="footer-slogan">
                <p>CREATING VALUES FOR YOU!</p>
                <p>Your problem are our problems, let's try to solve it together.</p>
            </div>
            <div className="footer-info">
                <div className="footer-products">
                    <h4>Products</h4>
                    <p>Email Marketing</p>
                    <p>Campaigns</p>
                </div>
                <div className="footer-more">
                    <h4>Know More</h4>
                    <p>Blogs</p>
                    <p>YouTube</p>
                </div>
                <div className="footer-follow">
                    <h4>Follow Us</h4>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><img src={LinkedIn} alt="LinkedIn" /></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={Instagram} alt="Instagram" /></a>
                </div>

            </div>
        </div>
    )
}

export default Footer
