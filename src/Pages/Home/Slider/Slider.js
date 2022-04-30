import React from 'react'
import './Slider.css'
import { AiOutlineStar } from "react-icons/ai";
import Slider1 from 'react-slick';

import guitar1 from './Images/guitar1.png'
import guitar2 from './Images/guitar2.png'
import guitar3 from './Images/guitar3.png'


export default function Slider() {


    const slider1 = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: false,
        

        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                    arrow: true
                    
                }
            },
            // {
            //     breakpoint: 991,
            //     settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 1,
            //         infinite: false,
            //         dots: false,
            //         arrow: true
            //     }
            // },

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
        ]
    }

    return (
        <>

            <div className="container-fluid slickSlider text-black">
                <div className="container pagepadding sliderWidth py-5">
                    <h1 className="sliderHeading text-center m-0">New & Noteworthy</h1>
                    <Slider1 className='sliderContent row' {...slider1}>

                        <div className='slides11'>
                            <div className="popularBadge">
                                <p className='m-0 stickertag'>MOST Popular</p>
                            </div>

                            <div className="sliderData">
                                <div className="slider-image">
                                    <img className='img-fluid' src={guitar1} alt="" />
                                </div>
                                <div className="sliderCon">
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
                            <div className="sliderData">
                                <div className="slider-image">
                                    <img className='img-fluid' src={guitar2} alt="" />
                                </div>
                                <div className="sliderCon">
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
                            <div className="sliderData">
                                <div className="slider-image">
                                    <img className='img-fluid' src={guitar3} alt="" />
                                </div>
                                <div className="sliderCon">
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

                            <div className="sliderData">
                                <div className="slider-image">
                                    <img className='img-fluid' src={guitar1} alt="" />
                                </div>
                                <div className="sliderCon">
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
                            <div className="sliderData">
                                <div className="slider-image">
                                    <img className='img-fluid' src={guitar2} alt="" />
                                </div>
                                <div className="sliderCon boxShadow1">
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
                            <div className="sliderData">
                                <div className="slider-image">
                                    <img className='img-fluid' src={guitar3} alt="" />
                                </div>
                                <div className="sliderCon">
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

                            <div className="sliderData">
                                <div className="slider-image">
                                    <img className='img-fluid' src={guitar1} alt="" />
                                </div>
                                <div className="sliderCon">
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
                            <div className="sliderData">
                                <div className="slider-image">
                                    <img className='img-fluid' src={guitar2} alt="" />
                                </div>
                                <div className="sliderCon boxShadow1">
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
                            <div className="sliderData">
                                <div className="slider-image">
                                    <img className='img-fluid' src={guitar3} alt="" />
                                </div>
                                <div className="sliderCon">
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