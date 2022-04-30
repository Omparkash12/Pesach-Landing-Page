import React from 'react';
import './Banner.css';
import { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

import toggleGuitar1 from './Images/guitar-img1.png'
import toggleGuitar2 from './Images/guitar-img2.png'
import toggleGuitar3 from './Images/guitar-img3.png'
import toggleGuitar4 from './Images/guitar-img4.png'
import toggleGuitar5 from './Images/guitar-img5.png'



export default function Banner() {


    useEffect(() => {
        $(window).on('load', function() {
            $(".dot3").addClass('borderBtn');
        });

        $(function () {
            $(".guitar-img1").hide();
            $(".guitar-img2").hide();
            $(".guitar-img4").hide();
            $(".guitar-img5").hide();
            

            $(".dot1").on("click", function () {
                $(".guitar-img1").fadeIn();
                $(".dot1").addClass('borderBtn');


                $(".dot2").removeClass('borderBtn');
                $(".dot3").removeClass('borderBtn');
                $(".dot4").removeClass('borderBtn');
                $(".dot5").removeClass('borderBtn');


                $(".guitar-img2").fadeOut();
                $(".guitar-img3").fadeOut();
                $(".guitar-img4").fadeOut();
                $(".guitar-img5").fadeOut();
            });


            $(".dot2").on("click", function () {
                $(".guitar-img2").fadeIn();
                $(".dot2").addClass('borderBtn');


                $(".dot1").removeClass('borderBtn');
                $(".dot3").removeClass('borderBtn');
                $(".dot4").removeClass('borderBtn');
                $(".dot5").removeClass('borderBtn');




                $(".guitar-img1").fadeOut();
                $(".guitar-img3").fadeOut();
                $(".guitar-img4").fadeOut();
                $(".guitar-img5").fadeOut();
            });

            $(".dot3").on("click", function () {
                $(".guitar-img3").fadeIn();
                $(".dot3").addClass('borderBtn');



                $(".dot1").removeClass('borderBtn');
                $(".dot2").removeClass('borderBtn');
                $(".dot4").removeClass('borderBtn');
                $(".dot5").removeClass('borderBtn');



                $(".guitar-img1").fadeOut();
                $(".guitar-img2").fadeOut();
                $(".guitar-img4").fadeOut();
                $(".guitar-img5").fadeOut();
            });

            $(".dot4").on("click", function () {
                $(".guitar-img4").fadeIn();
                $(".dot4").addClass('borderBtn');


                $(".dot1").removeClass('borderBtn');
                $(".dot2").removeClass('borderBtn');
                $(".dot3").removeClass('borderBtn');
                $(".dot5").removeClass('borderBtn');



                $(".guitar-img1").fadeOut();
                $(".guitar-img2").fadeOut();
                $(".guitar-img3").fadeOut();
                $(".guitar-img5").fadeOut();
            });

            $(".dot5").on("click", function () {
                $(".guitar-img5").fadeIn();
                $(".dot5").addClass('borderBtn');



                $(".dot1").removeClass('borderBtn');
                $(".dot2").removeClass('borderBtn');
                $(".dot3").removeClass('borderBtn');
                $(".dot4").removeClass('borderBtn');



                $(".guitar-img1").fadeOut();
                $(".guitar-img2").fadeOut();
                $(".guitar-img3").fadeOut();
                $(".guitar-img4").fadeOut();              
            });
        });
    }, [])


    return (
        <>

            <div className="container-fluid px-0 py-4 guitarSection withoutborderBtn position-relative">
                <div className="socialMediaLinks">
                    <a className='' href="#">TWITTER</a>
                    <a className=' linkPadding' href="#">INSTAGRAM</a>
                    <a className='' href="#">FACEBOOK</a>
                </div>
                <div className="container pagepadding navpadding">
                    <div className="row guitarSectionData py-5">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 guitarSectionData1 text-white py-5 padd425">
                            <p className='section-max-heading pt-4'>Iconic.</p>
                            <p className='section-max-heading'>Pro Grade.</p>
                            <p className='section-max-heading'>Stage Ready.</p>
                            <p className='section-min-heading'>ALL IN HARMONY WITH YOUR BUDGET</p>
                            <div className="row shopBtnRow pb-5">
                                <div className="shopBtn col-lg-12 d-flex">
                                    <button className="shopBtn1">Shop</button>
                                    <button className="shopBtn2">Discover</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 guitarSectionData2 text-white py-5 padd425 position-relative">

                            <div className="allDots">
                                <a href="#">
                                    <div className="dottt dot1">
                                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                            width="14.000000pt" height="14.000000pt" viewBox="0 0 14.000000 14.000000"
                                            preserveAspectRatio="xMidYMid meet">
                                            <metadata>
                                                Created by potrace 1.16, written by Peter Selinger 2001-2019
                                            </metadata>
                                            <g transform="translate(0.000000,14.000000) scale(0.100000,-0.100000)"
                                                fill="#000000" stroke="none">
                                            </g>
                                        </svg>
                                    </div>
                                </a>

                                <a href="#">
                                    <div className="dottt dot2">
                                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                            width="14.000000pt" height="14.000000pt" viewBox="0 0 14.000000 14.000000"
                                            preserveAspectRatio="xMidYMid meet">
                                            <metadata>
                                                Created by potrace 1.16, written by Peter Selinger 2001-2019
                                            </metadata>
                                            <g transform="translate(0.000000,14.000000) scale(0.100000,-0.100000)"
                                                fill="#000000" stroke="none">
                                            </g>
                                        </svg>
                                    </div>
                                </a>

                                <a href="#">
                                    <div className="dottt dot3 bordercircle">
                                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                            width="14.000000pt" height="14.000000pt" viewBox="0 0 14.000000 14.000000"
                                            preserveAspectRatio="xMidYMid meet">
                                            <metadata>
                                                Created by potrace 1.16, written by Peter Selinger 2001-2019
                                            </metadata>
                                            <g transform="translate(0.000000,14.000000) scale(0.100000,-0.100000)"
                                                fill="#000000" stroke="none">
                                            </g>
                                        </svg>
                                    </div>
                                </a>

                                <a href="#">
                                    <div className="dottt dot4">
                                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                            width="14.000000pt" height="14.000000pt" viewBox="0 0 14.000000 14.000000"
                                            preserveAspectRatio="xMidYMid meet">
                                            <metadata>
                                                Created by potrace 1.16, written by Peter Selinger 2001-2019
                                            </metadata>
                                            <g transform="translate(0.000000,14.000000) scale(0.100000,-0.100000)"
                                                fill="#000000" stroke="none">
                                            </g>
                                        </svg>
                                    </div>
                                </a>

                                <a href="#">
                                    <div className="dottt dot5">
                                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                            width="14.000000pt" height="14.000000pt" viewBox="0 0 14.000000 14.000000"
                                            preserveAspectRatio="xMidYMid meet">
                                            <metadata>
                                                Created by potrace 1.16, written by Peter Selinger 2001-2019
                                            </metadata>
                                            <g transform="translate(0.000000,14.000000) scale(0.100000,-0.100000)"
                                                fill="#000000" stroke="none">
                                            </g>
                                        </svg>
                                    </div>
                                </a>
                            </div>

                            <div className="allGuitarImg">
                                <img className='img-fluid guitar-img1 forAbsolute' src={toggleGuitar1} alt="" />
                                <img className='img-fluid guitar-img2 forAbsolute' src={toggleGuitar2} alt="" />
                                <img className='img-fluid guitar-img3 forAbsolute' src={toggleGuitar3} alt="" />
                                <img className='img-fluid guitar-img4 forAbsolute' src={toggleGuitar4} alt="" />
                                <img className='img-fluid guitar-img5 forAbsolute' src={toggleGuitar5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
