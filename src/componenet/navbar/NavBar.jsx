import React from 'react';
import './slicknav.css';
import '../font.css';
import './navbar.css';

import logo from '../../images/logo/logo.png';


function NavBar() {
    return (
        <>
            <header className='body-bg'>
                <div className="header-area">
                    <div className="main-header">
                        <div className="header-top">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="d-flex justify-content-between flex-wrap align-items-center">
                                            <div className="header-info-left d-none d-sm-block">
                                                <ul className="header-social">
                                                    <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="logo">
                                                <a href="index-2.html"><img src={logo} alt="sorry" /></a>
                                            </div>
                                            <div className="header-info-right d-none d-lg-block">
                                                <a href="#" className="btn_2">Call Us: +10 783 346 4378</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-bottom  header-sticky">
                            <div className="container-fluid">
                                <div className="row justify-content-center">
                                    <div className="col-xl-12">

                                        <div className="main-menu d-none d-lg-block text-center">
                                            <nav>
                                                <ul id="navigation">
                                                    <li><a href="index-2.html">Home</a></li>
                                                    <li><a href="cakes.html">Cakes</a></li>
                                                    <li><a href="about.html">About</a></li>
                                                    <li><a href="blog.html">Blog</a>
                                                        <ul className="submenu">
                                                            <li><a href="blog.html">Blog</a></li>
                                                            <li><a href="blog_details.html">Blog Details</a></li>
                                                            <li><a href="elements.html">Elements</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="contact.html">Contact</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* {/* <div className="slider-area">
            <div className="single-slider slider-height2 slider-bg2 d-flex align-items-center">
                <div className="container">
                    <div className="row justify-content-center ">
                        <div className="col-xxl-12">

                            <div className="hero-caption hero-caption2">
                                <h2>About Us</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
*/}<div class="slider-area">
            <div class="slider-active">
                <div class="single-slider slider-height slider-bg1 d-flex align-items-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-xxl-6 col-xl-7 col-lg-8 col-md-8 col-sm-10">
                                <div class="hero-caption">
                                    <h1 data-animation="fadeInUp" data-delay=".2s">Healthy Made Delicious Cake</h1>
                                    <a href="#" class="btn_1 hero-btn" data-animation="fadeInUp" data-delay=".8s">Order
                                        Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            </header>
        </>
    )
}
export default NavBar;