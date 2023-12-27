import React from 'react';
import '../font.css';
import './AboutSec.css';
import about1 from '../../images/gallery/about1.jpg';
function AboutSec () {
    return(
        <>
             <section className="about-area top-padding body-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-9">
                        <div className="section-tittle text-center line mb-70">
                            <h2>This is Schilers. Awesome Food Theme. Purchase it and eat Burgers.</h2>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center section-overlay">
                    <div className="offset-xl-1 col-xxl-5 col-xl-6 col-lg-6 col-md-9">
                        <div className="about-caption about-caption1">

                            <div className="section-tittle section-tittle3 mb-25">
                                <h2>This is Schilers. Awesome Food Theme.<br/> Purchase it and eat Burgers.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita
                                    tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in
                                    reprehen derit in voluptate velit esse cillum.</p>
                                <p>Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate
                                    velit esse cillum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-8">

                        <div className="about-img about-img1  ">
                            <img src={about1} alt="sorry"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default AboutSec;