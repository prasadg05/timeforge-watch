import React from "react";
import "../Css/Footer.css"; // Import your external CSS file for styling
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


function Footer() {
  return (
    

<footer class="footer-section">
        <div class="container">
            <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30 ">
                        <div class="single-cta">
                        <FaLocationDot style={{ color: 'blue',height:"30px",width:"30px"}}/>
                            <div class="cta-text">
                                <h4 style={{textAlign:"left"}}>Find us</h4>
                                <span>A-105 GOVERNMENT POLYTECHNIC NASHIK</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30 ">
                        <div class="single-cta">
                            <i class="fas fa-phone"></i>
                            <IoMdCall style={{ color: 'blue',height:"30px",width:"30px"}}/>
                            <div class="cta-text">
                           
                                <h4 style={{textAlign:"left"}}>Call us</h4>
                                <span>9699770193</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30 ">
                        <div class="single-cta">
                            <i class="far fa-envelope-open"></i>
                            <IoIosMail style={{ color: 'blue',height:"30px",width:"30px"}}/>
                            <div class="cta-text">
                                <h4 style={{textAlign:"left"}}>Mail us</h4>
                                <span>prasad.gahiwal@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <a href="index.html"><img src="https://www.gorspa.org/wp-content/uploads/TimeForge-Logo.png" class="img-fluid" alt="logo"/></a>
                            </div>
                            <div class="footer-text">
                                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div class="footer-social-icon">
                                <span>Follow us</span>
                                <a href="#"><FaWhatsappSquare className="mada1"style={{ color: 'blue',height:"30px",width:"30px"}}/></a>
                                <a href="#"><FaInstagramSquare className="mada2" style={{ color: 'blue',height:"30px",width:"30px"}}/></a>
                                <a href="#"><FaTelegram className="mada" style={{ color: 'red',height:"30px",width:"30px"}}/></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul className="dul">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">about</a></li>
                                <li><a href="#">services</a></li>
                                <li><a href="#">portfolio</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Expert Team</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Latest News</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div class="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button><i class="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2024, All Right Reserved <a href="https://codepen.io/anupkumar92/">Prasad</a></p>
                        </div>
                    </div>
                    <div class="cyol-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>


  );
}

export default Footer;