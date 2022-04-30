import React from 'react'
import './Drum.css'
import drumImg1 from './Images/drum-Img.png'


export default function Drum() {
    return (
        <>

            <div className="container-fluid drumBG">
                <div className="container drumSection py-5 pagepadding">
                    <div className="row drumSection text-white align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex">
                            <img className='img-fluid w-100 drum_img pe-4' src="https://cdn.shopify.com/s/files/1/0450/9319/1836/files/71UBlRCfNKL._AC_SL1500_720x.png?v=1645554239" alt="" />
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 drumSectionData">
                            <h2 className='m-0 p-0'>
                                We're with you from practice to platinum.
                            </h2>

                            <p className='py-5'>
                                LyxPro exists to serve the next best-selling artist. Whether you're splicing studio tracks or jamming in your parents' basement, our gear cranks out the loudest value anywhere in the music community. Break into the big leagues. Without breaking the bank
                            </p>

                            <div className="drumBtn d-flex flex-wrap">
                                <a href='#' className="learn">LEARN</a>
                                <a href='#' className="shop">SHOP</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}