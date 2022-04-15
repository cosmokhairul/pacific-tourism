import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Slider.css';

const Slider = () => {
    return (
        <div className="mx-auto text-center my-5 bg-white">
            <h1 className="mb-4 pt-4">Top Tour Reviews</h1>
            <div>
                <Carousel interval={2500} className=" mx-auto text-center pb-4 w-50">
                    <Carousel.Item>
                        <div >
                            <img
                                className="carousel-img rounded-circle"
                                src="https://www.honestbrandreviews.com/wp-content/uploads/2021/04/American-Crew-Hair-Products-Review-2-1024x1024.jpg"
                                alt="First slide"
                            />
                            <h5 className="reviewer-name">John Watson</h5>
                            <div className="text-warning">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p className="review">Pacific Tourism is just awsome! I have never seen any services like this tourism agency. I have meet all of my choices and feelings through Pacific Tourism.</p>
                        </div>

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel-img rounded-circle"
                            src="https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg"
                            alt="First slide"
                        />
                        <h5 className="reviewer-name">Samueal Richard</h5>
                        <div className="text-warning">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <p className="review">I have experience with many travel agency but Pacific Tourism is one of the best. I suggested all of friends to travel through them one time in their lifetime.</p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel-img rounded-circle"
                            src="https://www.menshairstyletrends.com/wp-content/uploads/2021/12/Curly-hairstyles-for-Black-men-s3jr_-1024x1024.jpeg"
                            alt="First slide"
                        />
                        <h5 className="reviewer-name">David Mike</h5>
                        <div className="text-warning">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <p className="review">Frankly speaking, I never had any experience before with any travel agency. Pacific Tourism didn't let me feel that things through their services. I love them very much.</p>

                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    );
};

export default Slider;