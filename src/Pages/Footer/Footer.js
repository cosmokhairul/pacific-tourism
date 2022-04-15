import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer pt-5">
                <div className="footer-container text-white">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <div className="left-container text-center">
                                    <h2>Pacific Tourism</h2>
                                    <p className="mt-4 ">
                                        <h5>Your Best Tourism Partner.</h5>
                                    </p>
                                    <p className="">
                                        <small>© Copyright. All Rights Reserved.</small>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 text-center">
                                <div className="">
                                    <ul>
                                        <li className="footer-menu fs-5" >Home</li>
                                        <li className="footer-menu  fs-5">Login</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 text-center">
                                <div className="py-2">
                                    <h3>Follow Us</h3>
                                    <div>
                                        <div className="py-2">
                                            <FontAwesomeIcon icon={faFacebookSquare} className="followUs-icon" />
                                            <FontAwesomeIcon icon={faTwitterSquare} className="followUs-icon" />
                                            <FontAwesomeIcon icon={faYoutubeSquare} className="followUs-icon" />
                                            <FontAwesomeIcon icon={faInstagramSquare} className="followUs-icon" />
                                        </div>
                                        <p className="fs-5 py-1 m-0">Hotline: + 88 0123 456</p>
                                        <p className="fs-5 py-1 m-0" >email: info@pacifictourism.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;