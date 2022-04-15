import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Address.css';

const Address = () => {
    return (
        <div>
            <h1 className="text-center pb-5">Contact Us Wherever You Are</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h4 className="text-center">Dhaka, Bangladesh</h4>
                        <div>
                            <FontAwesomeIcon icon={faLocationDot} className="address-icon" />
                            <span> 33 Banani, Mohakhali, Dhaka</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faPhone} className="address-icon" />
                            <span>+ 88 01777 777 777</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} className="address-icon" />
                            <span>dhaka@pacifictourism.com</span>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <h4 className="text-center">New Delhi, India</h4>
                        <div>
                            <FontAwesomeIcon icon={faLocationDot} className="address-icon" />
                            <span> 40/1, East New Delhi</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faPhone} className="address-icon" />
                            <span>+ 98 123 456 789</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} className="address-icon" />
                            <span>newdelhi@pacifictourism.com</span>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <h4 className="text-center">New York, USA</h4>
                        <div>
                            <FontAwesomeIcon icon={faLocationDot} className="address-icon" />
                            <span> 37 Victoria Street, New York </span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faPhone} className="address-icon" />
                            <span>+ 1 234 567 890 </span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} className="address-icon" />
                            <span>newyork@pacifictourism.com</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h4 className="text-center">London, UK</h4>
                        <div>
                            <FontAwesomeIcon icon={faLocationDot} className="address-icon" />
                            <span> 3C Main Street, London</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faPhone} className="address-icon" />
                            <span>+ 2 898 111 222 </span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} className="address-icon" />
                            <span>london@pacifictourism.com</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Address;