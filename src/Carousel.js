import React from "react";
import Carousel from 'react-bootstrap/Carousel';
// import {Carousel} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import Army from "./img/army.jpg";



const Coro = () => {
    return (
        <div>
            <div>

                <img
                    className="home__image"
                    src={Army}
                    alt=""
                />
                <Carousel>
                    <Carousel.Item interval={2000}>
                        <img
                            className=""
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/WLA/Feb/AccDays/Ingress/D21207612_WLA_BAU_Accessories_Days_Feb_Tall_Hero_1500x600._CB658884641_.jpg"
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <h1 style={{ fontSize: "50px", }}>Vision statement </h1>
                            <p style={{ fontSize: "20px", }}>To be the best gym in the country.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className=""
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Gateway_JWELSSH/Feb/SSW/1500PC._CB660551243_.jpg"
                            alt="Third slide"
                        />
                        {/* <Carousel.Caption>
                            <h1 style={{ fontSize: "50px", }}>Mission statement </h1>
                            <p style={{ fontSize: "20px", }}>We strive to provide the highest quality fitness experience through providing three key elements:<br />
                            The best introductory program for new members.<br />
                            The best possible existing member experience.<br />
                            Professional coaching.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className=""
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Kitchen/XCM_Manual_1291819_1499443_IN_1489217_in_sa_cookingdays_hero2_in_en_3563168_1500x600_1X_en_IN._CB415777590_.jpg"
                            alt="Third slide"
                        />
                        {/* <Carousel.Caption>
                            <h1 style={{ fontSize: "50px", }}>Purpose Statement</h1>
                            <p style={{ fontSize: "20px", }}>Help people to be awesome.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};


export default Coro;