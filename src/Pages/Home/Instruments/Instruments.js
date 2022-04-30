import React from 'react'
import './Instruments.css'

export default function Instruments() {
    return (
        <div className="container-fluid p-0 instrumentSection">
            <div className="instruments row text-white text-center g-0">
                <div className="image-1 border1 d-flex justify-content-center align-items-center">
                    <div className='instruCon'>

                        <p className='intrumentHeading'>Instruments</p>
                        <p className='playHeading m-0'>MAKE YOUR PLAY</p>
                        <div className="viewAll">
                            <button>View All</button>
                        </div>
                    </div>
                </div>

                <div className="image-2 border1 d-flex justify-content-center align-items-center">
                    <div className='instruCon'>
                        <p className='intrumentHeading'>Amplifications</p>
                        <p className='playHeading m-0'>MAKE YOUR PLAY</p>
                        <div className="viewAll">
                            <button>View All</button>
                        </div>
                    </div>
                </div>

                <div className="image-3 border1 d-flex justify-content-center align-items-center">
                    <div className='instruCon'>
                        <p className='intrumentHeading'>Studio Gear</p>
                        <p className='playHeading m-0'>SET RECORDS</p>
                        <div className="viewAll">
                            <button>View All</button>
                        </div>
                    </div>
                </div>

                <div className="image-4 border1 d-flex justify-content-center align-items-center">
                    <div className='instruCon'>
                        <p className='intrumentHeading'>Cable And More</p>
                        <p className='playHeading m-0'>PLUG AWAY</p>
                        <div className="viewAll">
                            <button>View All</button>
                        </div>
                    </div>
                </div>

                <div className="image-5 border1 d-flex justify-content-center align-items-center">
                    <div className='instruCon'>
                        <p className='intrumentHeading'>Live Sound</p>
                        <p className='playHeading m-0'>BRING IT TO LIFE</p>
                        <div className="viewAll">
                            <button>View All</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
