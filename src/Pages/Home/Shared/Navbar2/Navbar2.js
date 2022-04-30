import React from 'react';
import PropTypes from 'prop-types';
import './Navbar2.css';
import brandImg from './Images/brand-Img.png';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

export default function Navbar2(props) {


    var prevScrollpos = window.pageYOffset;
    // window.onload = function() {
    //     document.getElementById("navbar").style.top = "80px";
    // }



    // document.documentElement.scrollTop || document.body.scrollTop
    let topPos = document.body.scrollTop;
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {

            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-100px";
        }
        if (currentScrollPos == topPos || currentScrollPos == 1) {
            console.log('working')
            document.getElementById("navbar").style.top = '100px'
        }
        prevScrollpos = currentScrollPos;
    }



    // var prevScrollpos = window.pageYOffset;
    // window.onscroll = function () {
    //     var currentScrollPos = window.pageYOffset;
    //     if (prevScrollpos > currentScrollPos) {
    //         document.getElementById("navbar1").style.top = "0";
    //     } else {
    //         document.getElementById("navbar1").style.top = "-85px";
    //     }
    //     prevScrollpos = currentScrollPos;
    // }


    $(function () {

        $(".burger-toggleBtn").on("click", function () {
            $(".toggleLink3").addClass("show")
            $(".burger-toggleBtn-1").addClass("show")
            $(".burger-toggleBtn").addClass("hide")
        });


        $(".burger-toggleBtn-1").on("click", function () {
            $(".toggleLink3").removeClass("show")
            $(".burger-toggleBtn-1").removeClass("show")
            $(".burger-toggleBtn").removeClass("hide")
        });

    })



    return (
        <>
            <div id='navbar' className="container-fluid p-0 navigationBar2 diffBG toggNavNone" style={{ transition: "0.4s" }}>
                <div className="container width70 navpadding pagepadding">
                    <nav className="navbar navbar-expand-md px-0">
                        <div className="container-fluid p-0">
                            <div className="item1">
                                <a className="navbar-brand" href="#">
                                    <img className='img-fluid' src={brandImg} alt="" />
                                </a>
                            </div>
                            <div className="item2">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">
                                                <span className='navIcons1'>{props.link5}</span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><span className='navIcons1'>{props.link6}</span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-start" href="#"><span className='navIcons1'>{props.link7}</span></a>
                                        </li>
                                    </ul>

                                    <div className="serachBar">
                                        <input className='serachBarInput' type="text" placeholder='Search' />
                                    </div>

                                    <div className="heart d-flex align-items-center ms-4">
                                        <a href="#">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="29.66" height="24.96" viewBox="0 0 34 29.75">
                                                    <path id="Icon_awesome-heart" data-name="Icon awesome-heart" d="M30.7,4.282a9.081,9.081,0,0,0-12.391.9L17,6.533,15.691,5.185A9.08,9.08,0,0,0,3.3,4.282a9.535,9.535,0,0,0-.657,13.806L15.492,31.355a2.082,2.082,0,0,0,3.008,0L31.35,18.087A9.529,9.529,0,0,0,30.7,4.282Z" transform="translate(0.001 -2.248)" fill="#ebebeb"></path>
                                                </svg>
                                            </span>
                                        </a>
                                    </div>

                                    <div className="navCart d-flex align-items-center ms-4">
                                        <a href="#">
                                            <span>
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
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div id='navbar1' className="container-fluid p-0 diffBG newToggleNav" style={{ transition: "0.4s" }}>
                <div className="container width70 mobilenav pagepadding">
                    <nav className="navbar navbar-expand-md px-0">
                        <div className="container-fluid p-0">
                            <div className="toggle-item1">
                                <a className="navbar-brand" href="#">
                                    <img className='img-fluid mobileBrandImg' src={brandImg} alt="" />
                                </a>
                            </div>
                            <div className="toggle-item2 d-flex align-items-center">

                                <div className="heart d-flex align-items-center ms-4">
                                    <a href="#">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="29.66" height="24.96" viewBox="0 0 34 29.75">
                                                <path id="Icon_awesome-heart" data-name="Icon awesome-heart" d="M30.7,4.282a9.081,9.081,0,0,0-12.391.9L17,6.533,15.691,5.185A9.08,9.08,0,0,0,3.3,4.282a9.535,9.535,0,0,0-.657,13.806L15.492,31.355a2.082,2.082,0,0,0,3.008,0L31.35,18.087A9.529,9.529,0,0,0,30.7,4.282Z" transform="translate(0.001 -2.248)" fill="#ebebeb"></path>
                                            </svg>
                                        </span>
                                    </a>
                                </div>

                                <div className="navCart d-flex align-items-center mx-3">
                                    <a href="#">
                                        <span>
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
                                        </span>
                                    </a>
                                </div>

                                <div className="burger-toggleBtn">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </div>

                                <div className="burger-toggleBtn-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>



            <div className="container-fluid menufix">
                <div className='container toggleLink3'>
                    <div className="productToggle">
                        PRODUCTS
                    </div>

                    <div className="productToggle">
                        SUPPORT
                    </div>

                    <div className="productToggle">
                        WHERE TO BYE
                    </div>
                </div>
            </div>

        </>
    )
}

Navbar2.propTypes = {
    link5: PropTypes.string,
    link6: PropTypes.string,
    link7: PropTypes.string,
}
