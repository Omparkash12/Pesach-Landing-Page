import React from 'react';
import './Footer.css';
import brandImg from './Images/brand-Img.png';

export default function Footer() {
    return (
        <>
        <div className="container-fluid footerBG">
            <div className="container footersection pagepadding py-5">
                <div className="row footerRow text-white g-0">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-12 footerdata1 footeImage">
                        <img className='img-fluid' src="//cdn.shopify.com/s/files/1/0450/9319/1836/files/Lyx_PRO-white-2_300x300_2b269950-03b5-44e0-989f-752089886c21.png?v=1645701330" alt="" />
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-4 col-12 footerdata1">
                        <h4 className='position-relative'>
                            Quick Links
                            <span className='quickSpan'></span>
                        </h4>
                        <ul className="list-inline quickLinks py-3 m-0">
                            <li>
                                <a href="#">Products</a>
                            </li>
                            <li>
                                <a href="#">Support</a>
                            </li>
                            <li>
                                <a href="#">Where to buy</a>
                            </li>
                            <li>
                                <a href="#">Create an account</a>
                            </li>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-4 col-12 footerdata1">
                        <h4 className='position-relative contactText'>
                            Contact Us
                            <span className='contactSpan'></span>
                        </h4>

                        <ul className="list-inline contactUs py-3 m-0">
                            <li className='d-flex align-items-center flex-wrap'>
                                <div className="icon pe-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18.814" height="26.759" viewBox="0 0 18.814 26.759">
                                        <g id="location" transform="translate(-76)">
                                            <path id="Path_6519" data-name="Path 6519" d="M84.755,26.409a.784.784,0,0,0,1.3,0c1.855-2.783,4.588-6.22,6.492-9.715a15.574,15.574,0,0,0,2.263-7.287A9.407,9.407,0,1,0,76,9.407a15.574,15.574,0,0,0,2.263,7.287C80.166,20.187,82.9,23.632,84.755,26.409Zm.652-24.841a7.848,7.848,0,0,1,7.839,7.839,14.108,14.108,0,0,1-2.072,6.537,98.6,98.6,0,0,1-5.768,8.638,98.6,98.6,0,0,1-5.768-8.638,14.108,14.108,0,0,1-2.072-6.537,7.848,7.848,0,0,1,7.839-7.839Z" fill="#f27c67"></path>
                                            <path id="Path_6520" data-name="Path 6520" d="M170.7,99.407a4.7,4.7,0,1,0-4.7-4.7A4.709,4.709,0,0,0,170.7,99.407Zm0-7.839a3.136,3.136,0,1,1-3.136,3.136A3.139,3.139,0,0,1,170.7,91.568Z" transform="translate(-85.296 -85.296)" fill="#f27c67"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div className="contact1">
                                    114 Tived Lane EEdison, <br />
                                    Nj.O8837 USA
                                </div>
                            </li>

                            <li className='d-flex align-items-center flex-wrap py-3'>
                                <div className="icon pe-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18.812" height="31.354" viewBox="0 0 18.812 31.354">
                                        <g id="Group_883" data-name="Group 883" transform="translate(-5056.194 -2537.323)">
                                            <g id="Group_880" data-name="Group 880" transform="translate(5064.555 2539.936)">
                                                <g id="Group_661" data-name="Group 661">
                                                    <path id="Path_6515" data-name="Path 6515" d="M242.852,42.667h-3.135a.784.784,0,1,0,0,1.568h3.135a.784.784,0,1,0,0-1.568Z" transform="translate(-238.933 -42.667)" fill="#f27c67"></path>
                                                </g>
                                            </g>
                                            <g id="Group_881" data-name="Group 881" transform="translate(5056.194 2537.323)">
                                                <g id="Group_663" data-name="Group 663">
                                                    <path id="Path_6516" data-name="Path 6516" d="M118.077,0H105.535A3.139,3.139,0,0,0,102.4,3.135V28.218a3.139,3.139,0,0,0,3.135,3.135h12.541a3.139,3.139,0,0,0,3.135-3.135V3.135A3.139,3.139,0,0,0,118.077,0Zm1.568,28.218a1.568,1.568,0,0,1-1.568,1.568H105.535a1.568,1.568,0,0,1-1.568-1.568V3.135a1.568,1.568,0,0,1,1.568-1.568h12.541a1.568,1.568,0,0,1,1.568,1.568Z" transform="translate(-102.4 0)" fill="#f27c67"></path>
                                                </g>
                                            </g>
                                            <g id="Group_882" data-name="Group 882" transform="translate(5064.032 2562.929)">
                                                <g id="Group_665" data-name="Group 665">
                                                    <circle id="Ellipse_531" data-name="Ellipse 531" cx="1.568" cy="1.568" r="1.568" fill="#f27c67"></circle>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div className="contact1">
                                    1-833-855-1816
                                </div>
                            </li>

                            <li className='d-flex align-items-center flex-wrap'>
                                <div className="icon pe-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.6" height="15.891" viewBox="0 0 22.6 15.891">
                                        <g id="mail" transform="translate(0 -76)">
                                            <g id="Group_681" data-name="Group 681" transform="translate(0 76)">
                                                <path id="Path_6521" data-name="Path 6521" d="M20.614,76H1.986A1.989,1.989,0,0,0,0,77.986V89.9a1.989,1.989,0,0,0,1.986,1.986H20.614A1.989,1.989,0,0,0,22.6,89.9V77.986A1.988,1.988,0,0,0,20.614,76Zm-.278,1.324L12.7,84.915a1.986,1.986,0,0,1-2.81,0l-7.63-7.589ZM1.324,89.635V78.257l5.722,5.692Zm.941.932,5.72-5.684.974.969a3.311,3.311,0,0,0,4.681,0l.975-.97,5.72,5.684Zm19.01-.932-5.722-5.686,5.722-5.692Z" transform="translate(0 -76)" fill="#f27c67"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div className="contact1">
                                    info@supportcbp.com
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-4 col-12 footerdata1">
                        <h4 className='position-relative contactText'>
                            Timings
                            <span className='timingSpan'></span>
                        </h4>
                        <ul className="list-inline timings py-3 m-0">
                            <li className='d-flex align-items-center flex-wrap'>
                                <div className="icon pe-3">
                                    <svg id="time" xmlns="http://www.w3.org/2000/svg" width="21.681" height="21.681" viewBox="0 0 21.681 21.681">
                                        <g id="Group_680" data-name="Group 680">
                                            <path id="Path_6517" data-name="Path 6517" d="M10.84,21.681A10.84,10.84,0,1,0,0,10.84,10.854,10.854,0,0,0,10.84,21.681Zm0-20.235A9.395,9.395,0,1,1,1.445,10.84,9.4,9.4,0,0,1,10.84,1.445Z" fill="#f27c67"></path>
                                            <path id="Path_6518" data-name="Path 6518" d="M171.551,81.817a.711.711,0,0,0,.452.159.723.723,0,0,0,.452-1.286l-3.342-2.674V72.581a.723.723,0,0,0-1.445,0v5.782a.725.725,0,0,0,.271.564Z" transform="translate(-157.549 -67.522)" fill="#f27c67"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div className="contact1">
                                    Mon-Thurs <br />9:00 AM TO 6:00 PM
                                </div>
                            </li>

                            <li className='d-flex align-items-center flex-wrap py-3'>
                                <div className="icon pe-3">
                                    <svg id="time" xmlns="http://www.w3.org/2000/svg" width="21.681" height="21.681" viewBox="0 0 21.681 21.681">
                                        <g id="Group_680" data-name="Group 680">
                                            <path id="Path_6517" data-name="Path 6517" d="M10.84,21.681A10.84,10.84,0,1,0,0,10.84,10.854,10.854,0,0,0,10.84,21.681Zm0-20.235A9.395,9.395,0,1,1,1.445,10.84,9.4,9.4,0,0,1,10.84,1.445Z" fill="#f27c67"></path>
                                            <path id="Path_6518" data-name="Path 6518" d="M171.551,81.817a.711.711,0,0,0,.452.159.723.723,0,0,0,.452-1.286l-3.342-2.674V72.581a.723.723,0,0,0-1.445,0v5.782a.725.725,0,0,0,.271.564Z" transform="translate(-157.549 -67.522)" fill="#f27c67"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div className="contact1">
                                    Mon-Thurs <br />9:00 AM TO 6:00 PM
                                </div>
                            </li>

                            <li className='d-flex align-items-center flex-wrap'>
                                <div className="icon pe-3">
                                    <svg id="time" xmlns="http://www.w3.org/2000/svg" width="21.681" height="21.681" viewBox="0 0 21.681 21.681">
                                        <g id="Group_680" data-name="Group 680">
                                            <path id="Path_6517" data-name="Path 6517" d="M10.84,21.681A10.84,10.84,0,1,0,0,10.84,10.854,10.854,0,0,0,10.84,21.681Zm0-20.235A9.395,9.395,0,1,1,1.445,10.84,9.4,9.4,0,0,1,10.84,1.445Z" fill="#f27c67"></path>
                                            <path id="Path_6518" data-name="Path 6518" d="M171.551,81.817a.711.711,0,0,0,.452.159.723.723,0,0,0,.452-1.286l-3.342-2.674V72.581a.723.723,0,0,0-1.445,0v5.782a.725.725,0,0,0,.271.564Z" transform="translate(-157.549 -67.522)" fill="#f27c67"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div className="contact1">
                                    Sat-Sun <br />
                                    <span>Closed</span>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid copyrightSection">
          <div className="container pagepadding">
              <div className="row text-white copypadding py-4">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12 copyrightText padd425">
                      <p className='py-2 m-0'>
                      © 2022 LyxPro | All rights reserved.
                      </p>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-end align-items-center padd425 copyrightTerms">
                      <div className="copyrightLinks px-4">
                          <a className='text-white py-1' href="#">Terms</a>
                      </div>
                      <div className="copyrightLinks px-4">
                          <a className='text-white py-1' href="#">Privacy</a>
                      </div>
                      <div className="copyrightLinks px-4">
                          <a className='text-white py-1' href="#">Refund</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>

        </>
    )
}