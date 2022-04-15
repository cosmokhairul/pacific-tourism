import React from 'react';
import Address from '../Address/Address';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import Slider from '../SlideShow/Slider';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Slider></Slider>
            <Address></Address>
            <Footer></Footer>
        </div>
    );
};

export default Home;