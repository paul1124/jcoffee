import React from 'react';
// import { Parallax, Background } from 'react-parallax';
import { Parallax } from 'react-scroll-parallax'
import Barista from './images/barista.jpeg';
import Pumpkin from './images/pumpkin.jpeg';

import './styles/home.scss';

const Home = () => {
    // const bullet = '&#8226;';
    return (
        <section className="home" id="home">
            {/* <Parallax 
                className="home-main-parallax" 
                y={[-100, 100]}
                >
                    <img src={Img} alt=""/>
                </Parallax> */}
                {/* <Parallax
                    blur={{ min: -15, max: 15 }}
                    bgImage={require('./images/main.jpeg')}
                    bgImageAlt="the cat"
                    strength={200}
                >
                    Put some text content here - even an empty div with fixed dimensions to have a height
                    for the parallax.
                    <div style={{ height: '400px' }} />
                </Parallax> */}
            <div className="home-main">
                
                <div className="home-border">
                    <h2 className="home-alpha">-J-</h2>
                    <p className="home-beta">Coffee Inc.</p>
                </div>
            </div>
            <div className="home-about">
                <div className="home-about-main-container">
                <div className="home-about-main">
                    <div className="home-about-main-img">
                        <img src={Pumpkin} alt=""/>
                    </div>
                    <div className="home-about-main-noimg">
                        <h2 className="home-about-main-title">Holidays are Coming</h2>
                        <p className="home-about-main-subtitle">Start preparing for the holidays with J's Pumpkin Spice Latte.* </p>
                        <p className="home-about-main-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam et, eaque itaque in nostrum vitae ab rerum repudiandae saepe esse.</p>
                        <p className="home-about-main-sup">
                            *On Sale for Limited Time
                        </p>
                    </div>
                </div>
                <div className="home-about-main">
                    <div className="home-about-main-img">
                        <img src={Barista} alt=""/>
                    </div>
                    <div className="home-about-main-noimg">
                        <h2 className="home-about-main-title">We Are Hiring</h2>
                        <p className="home-about-main-subtitle">Start preparing for the holidays with J's Pumpkin Spice Latte.* </p>
                        <p className="home-about-main-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam et, eaque itaque in nostrum vitae ab rerum repudiandae saepe esse.</p>
                        <p className="home-about-main-sup">
                            *On Sale for Limited Time
                        </p>
                    </div>
                </div>
                </div>
            </div>
            <div className="home-extend">
                <div className="home-extend-main">
                    <div className="home-extend-icon">
                        <h2 className="home-alpha">-J-</h2>
                    </div>

                    <h2 className="home-extend-title">J Coffee Inc.</h2>
                </div>
            </div>
        </section>
    )
}

export default Home;