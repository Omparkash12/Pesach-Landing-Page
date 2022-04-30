import React from 'react'
import './Card.css'
import img1 from './Images/cardsection1.png';
import img2 from './Images/cardsection2.png';
import img3 from './Images/cardsection3.png';

export default function Card() {
    return (
        <>
            <div className="container-fluid">
                <div className="container padd425 pagepadding custompadd">
                    <h1 className="cardHeading text-center text-white">
                        Music To Your Gears.
                    </h1>
                    <div className="row cardSection">

                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 cardsectionData position-relative cardpadd">
                            <div className="cardwidth">
                                <a href='#' className="cardimage">
                                    <img className='img-fluid w-100 imgRadius' src={img1} alt="" />
                                </a>
                                <p>
                                    Cable
                                    Selection
                                    Guide
                                </p>
                                <div className="cardTextData">
                                    <div className="cardtText pb-5">
                                        Cables Help You Coax The FullPotential From Your Instruments AndMicrophones. Learn How To Choose,Connect, And Store Cables To Sound.
                                    </div>
                                    <div className="readMore ">
                                        <a href="#">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 cardsectionData position-relative cardpadd">
                            <div className="cardwidth">
                                <a href='#' className="cardimage">
                                    <img className='img-fluid w-100 imgRadius' src={img2} alt="" />
                                </a>
                                <p>
                                    Guitar
                                    Selection
                                    Guide
                                </p>
                                <div className="cardTextData">
                                    <div className="cardtText pb-5">
                                        Cables Help You Coax The FullPotential From Your Instruments AndMicrophones. Learn How To Choose,Connect, And Store Cables To Sound.
                                    </div>
                                    <div className="readMore ">
                                        <a href="#">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 cardsectionData position-relative cardpadd">
                            <div className="cardwidth">
                                <a href='#' className="cardimage">
                                    <img className='img-fluid w-100 imgRadius' src={img3} alt="" />
                                </a>
                                <p className='text-black whiteguitar'>
                                    Guitar
                                    Starter
                                    Guide
                                </p>
                                <div className="cardTextData">

                                    <div className="cardtText pb-5">
                                        Cables Help You Coax The FullPotential From Your Instruments AndMicrophones. Learn How To Choose,Connect, And Store Cables To Sound.
                                    </div>

                                    <div className="readMore">
                                        <a href="#">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
