import React from 'react'

import { AiOutlineStar } from "react-icons/ai";

// import imgSlider from 'react-slick'
import Slider1 from 'react-slick';

import guitar1 from '../images/guitar1.png'
import guitar2 from '../images/guitar2.png'
import guitar3 from '../images/guitar3.png'


export default function SliderSection() {


    const slider1 = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: false,
        PrevArrow: '<svg className="slide-arrow prev-arrow" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" width="70" height="70"><title>Group 884-svg</title><style>.s0 { fill: #0e1631 } .s1 { fill: #f27c67 } </style><g id="Group_884"><g id="slider2"><path id="Ellipse_524" className="s0" d="m36 72c-19.9 0-36-16.1-36-36c0-19.9 16.1-36 36-36c19.9 0 36 16.1 36 36c0 19.9-16.1 36-36 36z" /><path id="Icon_material-keyboard-arrow-left" className="s1" d="m43.1 24.6l-10.9 10.6l10.6 10.8l-3.4 3.3l-13.8-14.2l14.2-13.8z" /></g></g></svg>',
        PextArrow: '<svg className="slide-arrow next-arrow" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 72 72"><g id="Group_884" data-name="Group 884" transform="translate(-4771 669)"><g id="slider2" transform="translate(3131 -2365)"><circle id="Ellipse_524" data-name="Ellipse 524" cx="36" cy="36" r="36" transform="translate(1640 1696)" fill="#0e1631"/><path id="Icon_material-keyboard-arrow-left" data-name="Icon material-keyboard-arrow-left" d="M12,32.96,22.687,22.25,12,11.54l3.29-3.29,14,14-14,14Z" transform="translate(1655 1709.75)" fill="#f27c67"/></g></g></svg>',
        // nextArrow: 'https://cdn.shopify.com/s/files/1/0450/9319/1836/files/lux-prev-icon.png',
        // prevArrow: 'https://cdn.shopify.com/s/files/1/0450/9319/1836/files/lux-prev-icon.png'
        

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                    arrow: true
                    
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                    arrow: true
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                    arrows: true,
                }
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                    arrows: true,
                }
            },


            // {
            //     breakpoint: 425,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1,
            //         infinite: false,
            //         dots: true,
            //         arrows: false,
            //     }
            // },
        ]
    }

    return (
        <>

            <div className="container-fluid slickSlider">
                <div className="container sliderWidth py-5 px-4">
                    <h1 className="sliderHeading text-center pb-2">New & Noteworthy</h1>
                    <Slider1 className='sliderContent row' {...slider1}>

                        <div className='slides11 position-ralative'>
                            <div className="popularBadge">
                                <p className='m-0'>MOST Popular</p>
                            </div>

                            <div className="sliderData my-3 mx-2">
                                <div className="slider-image py-4 px-5">
                                    <img className='img-fluid' src={guitar1} alt="" />
                                </div>
                                <div className="sliderCon py-4 px-5">
                                    <h3>
                                        39” Electric Stratocaster Guitar & Starter Kit
                                    </h3>
                                    <div className="row">
                                        <div className='stars5 col-lg-8 col-md-8 col-sm-8 col-8'>
                                            <ul className='list-inline d-flex mb-2'>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                            </ul>
                                            <span>$134.99</span>

                                        </div>
                                        <div className="cart-icon col-lg-4 col-md-4 col-sm-4 col-4">
                                            <div className='slidercart'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 30 30">
                                                    <g id="shopping_cart" transform="translate(-1 -1)">
                                                        <g id="Group_827" data-name="Group 827">
                                                            <path id="Path_6616" data-name="Path 6616" d="M30.783,8.377A1,1,0,0,0,30,8H7.681l-.53-3.178a3.187,3.187,0,0,0-1.6-2.164,1,1,0,0,0-.895,1.789,1.261,1.261,0,0,1,.52.7L7.521,19.205A4.7,4.7,0,0,0,12,23H24a4.937,4.937,0,0,0,4.649-3.7L30.975,9.225A1,1,0,0,0,30.783,8.377Z" fill="#ebebeb"></path>
                                                            <circle id="Ellipse_551" data-name="Ellipse 551" cx="3" cy="3" r="3" transform="translate(23 25)" fill="#ebebeb"></circle>
                                                            <circle id="Ellipse_552" data-name="Ellipse 552" cx="1" cy="1" r="1" transform="translate(25 27)" fill="#ebebeb"></circle>
                                                            <circle id="Ellipse_553" data-name="Ellipse 553" cx="3" cy="3" r="3" transform="translate(9 25)" fill="#ebebeb"></circle>
                                                            <circle id="Ellipse_554" data-name="Ellipse 554" cx="1" cy="1" r="1" transform="translate(11 27)" fill="#ebebeb"></circle>
                                                            <g id="Group_826" data-name="Group 826">
                                                                <path id="Path_6617" data-name="Path 6617" d="M5.1,4.553a1,1,0,0,1-.446-.105L1.553,2.895a1,1,0,0,1,.895-1.789L5.553,2.658A1,1,0,0,1,5.1,4.553Z" fill="#ebebeb"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='slides11'>
                            <div className="sliderData my-3 mx-2">
                                <div className="slider-image py-4 px-5">
                                    <img className='img-fluid' src={guitar2} alt="" />
                                </div>
                                <div className="sliderCon boxShadow1 py-4 px-5">
                                    <h3>
                                        39” Electric Stratocaster Guitar & Starter Kit
                                    </h3>
                                    <div className="row">
                                        <div className='stars5 col-lg-8 col-md-8 col-sm-8 col-8'>
                                            <ul className='list-inline d-flex mb-2'>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                            </ul>
                                            <span>$134.99</span>

                                        </div>
                                        <div className="cart-icon col-lg-4 col-md-4 col-sm-4 col-4">
                                            <div className='slidercart'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 30 30">
                                                    <g id="shopping_cart" transform="translate(-1 -1)">
                                                        <g id="Group_827" data-name="Group 827">
                                                            <path id="Path_6616" data-name="Path 6616" d="M30.783,8.377A1,1,0,0,0,30,8H7.681l-.53-3.178a3.187,3.187,0,0,0-1.6-2.164,1,1,0,0,0-.895,1.789,1.261,1.261,0,0,1,.52.7L7.521,19.205A4.7,4.7,0,0,0,12,23H24a4.937,4.937,0,0,0,4.649-3.7L30.975,9.225A1,1,0,0,0,30.783,8.377Z" fill="#ebebeb"></path>
                                                            <circle id="Ellipse_551" data-name="Ellipse 551" cx="3" cy="3" r="3" transform="translate(23 25)" fill="#ebebeb"></circle>
                                                            <circle id="Ellipse_552" data-name="Ellipse 552" cx="1" cy="1" r="1" transform="translate(25 27)" fill="#ebebeb"></circle>
                                                            <circle id="Ellipse_553" data-name="Ellipse 553" cx="3" cy="3" r="3" transform="translate(9 25)" fill="#ebebeb"></circle>
                                                            <circle id="Ellipse_554" data-name="Ellipse 554" cx="1" cy="1" r="1" transform="translate(11 27)" fill="#ebebeb"></circle>
                                                            <g id="Group_826" data-name="Group 826">
                                                                <path id="Path_6617" data-name="Path 6617" d="M5.1,4.553a1,1,0,0,1-.446-.105L1.553,2.895a1,1,0,0,1,.895-1.789L5.553,2.658A1,1,0,0,1,5.1,4.553Z" fill="#ebebeb"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='slides11'>
                            <div className="sliderData my-3 mx-2">
                                <div className="slider-image py-4 px-5">
                                    <img className='img-fluid' src={guitar3} alt="" />
                                </div>
                                <div className="sliderCon py-4 px-5">
                                    <h3>
                                        39” Electric Stratocaster Guitar & Starter Kit
                                    </h3>
                                    <div className="row">
                                        <div className='stars5 col-lg-8 col-md-8 col-sm-8 col-8'>
                                            <ul className='list-inline d-flex mb-2'>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                            </ul>
                                            <span>$134.99</span>

                                        </div>
                                        <div className="cart-icon col-lg-4 col-md-4 col-sm-4 col-4">
                                            <div className='slidercart'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 30 30">
                                                    <g id="shopping_cart" transform="translate(-1 -1)">
                                                        <g id="Group_827" data-name="Group 827">
                                                            <path id="Path_6616" data-name="Path 6616" d="M30.783,8.377A1,1,0,0,0,30,8H7.681l-.53-3.178a3.187,3.187,0,0,0-1.6-2.164,1,1,0,0,0-.895,1.789,1.261,1.261,0,0,1,.52.7L7.521,19.205A4.7,4.7,0,0,0,12,23H24a4.937,4.937,0,0,0,4.649-3.7L30.975,9.225A1,1,0,0,0,30.783,8.377Z" fill="#ebebeb"></path>
                                                            <circle id="Ellipse_551" data-name="Ellipse 551" cx="3" cy="3" r="3" transform="translate(23 25)" fill="#ebebeb"></circle>
                                                            <circle id="Ellipse_552" data-name="Ellipse 552" cx="1" cy="1" r="1" transform="translate(25 27)" fill="#ebebeb"></circle>
                                                            <circle id="Ellipse_553" data-name="Ellipse 553" cx="3" cy="3" r="3" transform="translate(9 25)" fill="#ebebeb"></circle>
                                                            <circle id="Ellipse_554" data-name="Ellipse 554" cx="1" cy="1" r="1" transform="translate(11 27)" fill="#ebebeb"></circle>
                                                            <g id="Group_826" data-name="Group 826">
                                                                <path id="Path_6617" data-name="Path 6617" d="M5.1,4.553a1,1,0,0,1-.446-.105L1.553,2.895a1,1,0,0,1,.895-1.789L5.553,2.658A1,1,0,0,1,5.1,4.553Z" fill="#ebebeb"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='slides11'>

                            <div className="sliderData my-3 mx-2">
                                <div className="slider-image py-4 px-5">
                                    <img className='img-fluid' src={guitar1} alt="" />
                                </div>
                                <div className="sliderCon py-4 px-5">
                                    <h3>
                                        39” Electric Stratocaster Guitar & Starter Kit
                                    </h3>
                                    <div className="row">
                                        <div className='stars5 col-lg-8 col-md-8 col-sm-8 col-8'>
                                            <ul className='list-inline d-flex mb-2'>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                            </ul>
                                            <span>$134.99</span>

                                        </div>
                                        <div className="cart-icon col-lg-4 col-md-4 col-sm-4 col-4">
                                            <div className='slidercart'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 30 30">
                                                    <g id="shopping_cart" transform="translate(-1 -1)">
                                                        <g id="Group_827" data-name="Group 827">
                                                            <path id="Path_6616" data-name="Path 6616" d="M30.783,8.377A1,1,0,0,0,30,8H7.681l-.53-3.178a3.187,3.187,0,0,0-1.6-2.164,1,1,0,0,0-.895,1.789,1.261,1.261,0,0,1,.52.7L7.521,19.205A4.7,4.7,0,0,0,12,23H24a4.937,4.937,0,0,0,4.649-3.7L30.975,9.225A1,1,0,0,0,30.783,8.377Z" fill="#ebebeb"></path>
                                                            <circle id="Ellipse_551" data-name="Ellipse 551" cx="3" cy="3" r="3" transform="translate(23 25)" fill="#ebebeb"></circle>
                                                            <circle id="Ellipse_552" data-name="Ellipse 552" cx="1" cy="1" r="1" transform="translate(25 27)" fill="#ebebeb"></circle>
                                                            <circle id="Ellipse_553" data-name="Ellipse 553" cx="3" cy="3" r="3" transform="translate(9 25)" fill="#ebebeb"></circle>
                                                            <circle id="Ellipse_554" data-name="Ellipse 554" cx="1" cy="1" r="1" transform="translate(11 27)" fill="#ebebeb"></circle>
                                                            <g id="Group_826" data-name="Group 826">
                                                                <path id="Path_6617" data-name="Path 6617" d="M5.1,4.553a1,1,0,0,1-.446-.105L1.553,2.895a1,1,0,0,1,.895-1.789L5.553,2.658A1,1,0,0,1,5.1,4.553Z" fill="#ebebeb"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='slides11'>
                            <div className="sliderData my-3 mx-2">
                                <div className="slider-image py-4 px-5">
                                    <img className='img-fluid' src={guitar2} alt="" />
                                </div>
                                <div className="sliderCon boxShadow1 py-4 px-5">
                                    <h3>
                                        39” Electric Stratocaster Guitar & Starter Kit
                                    </h3>
                                    <div className="row">
                                        <div className='stars5 col-lg-8 col-md-8 col-sm-8 col-8'>
                                            <ul className='list-inline d-flex mb-2'>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                            </ul>
                                            <span>$134.99</span>

                                        </div>
                                        <div className="cart-icon col-lg-4 col-md-4 col-sm-4 col-4">
                                            <div className='slidercart'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 30 30">
                                                    <g id="shopping_cart" transform="translate(-1 -1)">
                                                        <g id="Group_827" data-name="Group 827">
                                                            <path id="Path_6616" data-name="Path 6616" d="M30.783,8.377A1,1,0,0,0,30,8H7.681l-.53-3.178a3.187,3.187,0,0,0-1.6-2.164,1,1,0,0,0-.895,1.789,1.261,1.261,0,0,1,.52.7L7.521,19.205A4.7,4.7,0,0,0,12,23H24a4.937,4.937,0,0,0,4.649-3.7L30.975,9.225A1,1,0,0,0,30.783,8.377Z" fill="#ebebeb"></path>
                                                            <circle id="Ellipse_551" data-name="Ellipse 551" cx="3" cy="3" r="3" transform="translate(23 25)" fill="#ebebeb"></circle>
                                                            <circle id="Ellipse_552" data-name="Ellipse 552" cx="1" cy="1" r="1" transform="translate(25 27)" fill="#ebebeb"></circle>
                                                            <circle id="Ellipse_553" data-name="Ellipse 553" cx="3" cy="3" r="3" transform="translate(9 25)" fill="#ebebeb"></circle>
                                                            <circle id="Ellipse_554" data-name="Ellipse 554" cx="1" cy="1" r="1" transform="translate(11 27)" fill="#ebebeb"></circle>
                                                            <g id="Group_826" data-name="Group 826">
                                                                <path id="Path_6617" data-name="Path 6617" d="M5.1,4.553a1,1,0,0,1-.446-.105L1.553,2.895a1,1,0,0,1,.895-1.789L5.553,2.658A1,1,0,0,1,5.1,4.553Z" fill="#ebebeb"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='slides11'>
                            <div className="sliderData my-3 mx-2">
                                <div className="slider-image py-4 px-5">
                                    <img className='img-fluid' src={guitar3} alt="" />
                                </div>
                                <div className="sliderCon py-4 px-5">
                                    <h3>
                                        39” Electric Stratocaster Guitar & Starter Kit
                                    </h3>
                                    <div className="row">
                                        <div className='stars5 col-lg-8 col-md-8 col-sm-8 col-8'>
                                            <ul className='list-inline d-flex mb-2'>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                            </ul>
                                            <span>$134.99</span>

                                        </div>
                                        <div className="cart-icon col-lg-4 col-md-4 col-sm-4 col-4">
                                            <div className='slidercart'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 30 30">
                                                    <g id="shopping_cart" transform="translate(-1 -1)">
                                                        <g id="Group_827" data-name="Group 827">
                                                            <path id="Path_6616" data-name="Path 6616" d="M30.783,8.377A1,1,0,0,0,30,8H7.681l-.53-3.178a3.187,3.187,0,0,0-1.6-2.164,1,1,0,0,0-.895,1.789,1.261,1.261,0,0,1,.52.7L7.521,19.205A4.7,4.7,0,0,0,12,23H24a4.937,4.937,0,0,0,4.649-3.7L30.975,9.225A1,1,0,0,0,30.783,8.377Z" fill="#ebebeb"></path>
                                                            <circle id="Ellipse_551" data-name="Ellipse 551" cx="3" cy="3" r="3" transform="translate(23 25)" fill="#ebebeb"></circle>
                                                            <circle id="Ellipse_552" data-name="Ellipse 552" cx="1" cy="1" r="1" transform="translate(25 27)" fill="#ebebeb"></circle>
                                                            <circle id="Ellipse_553" data-name="Ellipse 553" cx="3" cy="3" r="3" transform="translate(9 25)" fill="#ebebeb"></circle>
                                                            <circle id="Ellipse_554" data-name="Ellipse 554" cx="1" cy="1" r="1" transform="translate(11 27)" fill="#ebebeb"></circle>
                                                            <g id="Group_826" data-name="Group 826">
                                                                <path id="Path_6617" data-name="Path 6617" d="M5.1,4.553a1,1,0,0,1-.446-.105L1.553,2.895a1,1,0,0,1,.895-1.789L5.553,2.658A1,1,0,0,1,5.1,4.553Z" fill="#ebebeb"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='slides11'>

                            <div className="sliderData my-3 mx-2">
                                <div className="slider-image py-4 px-5">
                                    <img className='img-fluid' src={guitar1} alt="" />
                                </div>
                                <div className="sliderCon py-4 px-5">
                                    <h3>
                                        39” Electric Stratocaster Guitar & Starter Kit
                                    </h3>
                                    <div className="row">
                                        <div className='stars5 col-lg-8 col-md-8 col-sm-8 col-8'>
                                            <ul className='list-inline d-flex mb-2'>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                            </ul>
                                            <span>$134.99</span>

                                        </div>
                                        <div className="cart-icon col-lg-4 col-md-4 col-sm-4 col-4">
                                            <div className='slidercart'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 30 30">
                                                    <g id="shopping_cart" transform="translate(-1 -1)">
                                                        <g id="Group_827" data-name="Group 827">
                                                            <path id="Path_6616" data-name="Path 6616" d="M30.783,8.377A1,1,0,0,0,30,8H7.681l-.53-3.178a3.187,3.187,0,0,0-1.6-2.164,1,1,0,0,0-.895,1.789,1.261,1.261,0,0,1,.52.7L7.521,19.205A4.7,4.7,0,0,0,12,23H24a4.937,4.937,0,0,0,4.649-3.7L30.975,9.225A1,1,0,0,0,30.783,8.377Z" fill="#ebebeb"></path>
                                                            <circle id="Ellipse_551" data-name="Ellipse 551" cx="3" cy="3" r="3" transform="translate(23 25)" fill="#ebebeb"></circle>
                                                            <circle id="Ellipse_552" data-name="Ellipse 552" cx="1" cy="1" r="1" transform="translate(25 27)" fill="#ebebeb"></circle>
                                                            <circle id="Ellipse_553" data-name="Ellipse 553" cx="3" cy="3" r="3" transform="translate(9 25)" fill="#ebebeb"></circle>
                                                            <circle id="Ellipse_554" data-name="Ellipse 554" cx="1" cy="1" r="1" transform="translate(11 27)" fill="#ebebeb"></circle>
                                                            <g id="Group_826" data-name="Group 826">
                                                                <path id="Path_6617" data-name="Path 6617" d="M5.1,4.553a1,1,0,0,1-.446-.105L1.553,2.895a1,1,0,0,1,.895-1.789L5.553,2.658A1,1,0,0,1,5.1,4.553Z" fill="#ebebeb"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='slides11'>
                            <div className="sliderData my-3 mx-2">
                                <div className="slider-image py-4 px-5">
                                    <img className='img-fluid' src={guitar2} alt="" />
                                </div>
                                <div className="sliderCon boxShadow1 py-4 px-5">
                                    <h3>
                                        39” Electric Stratocaster Guitar & Starter Kit
                                    </h3>
                                    <div className="row">
                                        <div className='stars5 col-lg-8 col-md-8 col-sm-8 col-8'>
                                            <ul className='list-inline d-flex mb-2'>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                            </ul>
                                            <span>$134.99</span>

                                        </div>
                                        <div className="cart-icon col-lg-4 col-md-4 col-sm-4 col-4">
                                            <div className='slidercart'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 30 30">
                                                    <g id="shopping_cart" transform="translate(-1 -1)">
                                                        <g id="Group_827" data-name="Group 827">
                                                            <path id="Path_6616" data-name="Path 6616" d="M30.783,8.377A1,1,0,0,0,30,8H7.681l-.53-3.178a3.187,3.187,0,0,0-1.6-2.164,1,1,0,0,0-.895,1.789,1.261,1.261,0,0,1,.52.7L7.521,19.205A4.7,4.7,0,0,0,12,23H24a4.937,4.937,0,0,0,4.649-3.7L30.975,9.225A1,1,0,0,0,30.783,8.377Z" fill="#ebebeb"></path>
                                                            <circle id="Ellipse_551" data-name="Ellipse 551" cx="3" cy="3" r="3" transform="translate(23 25)" fill="#ebebeb"></circle>
                                                            <circle id="Ellipse_552" data-name="Ellipse 552" cx="1" cy="1" r="1" transform="translate(25 27)" fill="#ebebeb"></circle>
                                                            <circle id="Ellipse_553" data-name="Ellipse 553" cx="3" cy="3" r="3" transform="translate(9 25)" fill="#ebebeb"></circle>
                                                            <circle id="Ellipse_554" data-name="Ellipse 554" cx="1" cy="1" r="1" transform="translate(11 27)" fill="#ebebeb"></circle>
                                                            <g id="Group_826" data-name="Group 826">
                                                                <path id="Path_6617" data-name="Path 6617" d="M5.1,4.553a1,1,0,0,1-.446-.105L1.553,2.895a1,1,0,0,1,.895-1.789L5.553,2.658A1,1,0,0,1,5.1,4.553Z" fill="#ebebeb"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='slides11'>
                            <div className="sliderData my-3 mx-2">
                                <div className="slider-image py-4 px-5">
                                    <img className='img-fluid' src={guitar3} alt="" />
                                </div>
                                <div className="sliderCon py-4 px-5">
                                    <h3>
                                        39” Electric Stratocaster Guitar & Starter Kit
                                    </h3>
                                    <div className="row">
                                        <div className='stars5 col-lg-8 col-md-8 col-sm-8 col-8'>
                                            <ul className='list-inline d-flex mb-2'>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <AiOutlineStar />
                                                    </a>
                                                </li>
                                            </ul>
                                            <span>$134.99</span>

                                        </div>
                                        <div className="cart-icon col-lg-4 col-md-4 col-sm-4 col-4">
                                            <div className='slidercart'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 30 30">
                                                    <g id="shopping_cart" transform="translate(-1 -1)">
                                                        <g id="Group_827" data-name="Group 827">
                                                            <path id="Path_6616" data-name="Path 6616" d="M30.783,8.377A1,1,0,0,0,30,8H7.681l-.53-3.178a3.187,3.187,0,0,0-1.6-2.164,1,1,0,0,0-.895,1.789,1.261,1.261,0,0,1,.52.7L7.521,19.205A4.7,4.7,0,0,0,12,23H24a4.937,4.937,0,0,0,4.649-3.7L30.975,9.225A1,1,0,0,0,30.783,8.377Z" fill="#ebebeb"></path>
                                                            <circle id="Ellipse_551" data-name="Ellipse 551" cx="3" cy="3" r="3" transform="translate(23 25)" fill="#ebebeb"></circle>
                                                            <circle id="Ellipse_552" data-name="Ellipse 552" cx="1" cy="1" r="1" transform="translate(25 27)" fill="#ebebeb"></circle>
                                                            <circle id="Ellipse_553" data-name="Ellipse 553" cx="3" cy="3" r="3" transform="translate(9 25)" fill="#ebebeb"></circle>
                                                            <circle id="Ellipse_554" data-name="Ellipse 554" cx="1" cy="1" r="1" transform="translate(11 27)" fill="#ebebeb"></circle>
                                                            <g id="Group_826" data-name="Group 826">
                                                                <path id="Path_6617" data-name="Path 6617" d="M5.1,4.553a1,1,0,0,1-.446-.105L1.553,2.895a1,1,0,0,1,.895-1.789L5.553,2.658A1,1,0,0,1,5.1,4.553Z" fill="#ebebeb"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </Slider1>                    
                </div>
            </div>
        </>
    )
}