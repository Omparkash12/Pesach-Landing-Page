import React from 'react';
import PropTypes from 'prop-types';
import './Navbar1.css';

export default function Navbar1(props) {

    return (
        <>

            <div className="container-fluid px-0 navigationBar1  DisNone">
                <div className="container width70 TBpadding d-flex justify-content-end pagepadding">
                    <nav className="navbar navbar-expand-sm p-0">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">
                                <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-hamburger" viewBox="0 0 37 40"><path d="M33.5 25h-30c-1.1 0-2-.9-2-2s.9-2 2-2h30c1.1 0 2 .9 2 2s-.9 2-2 2zm0-11.5h-30c-1.1 0-2-.9-2-2s.9-2 2-2h30c1.1 0 2 .9 2 2s-.9 2-2 2zm0 23h-30c-1.1 0-2-.9-2-2s.9-2 2-2h30c1.1 0 2 .9 2 2s-.9 2-2 2z"></path></svg>
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item ps-0">
                                    <a className="nav-link p-0 active d-flex align-items-center" aria-current="page" href="#">
                                        <span className='navIcons'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22 22">
                                                <g id="Group_873" data-name="Group 873" transform="translate(-3663.495 2539)">
                                                    <g id="email" transform="translate(3663.495 -2539.005)">
                                                        <path id="Path_1762" data-name="Path 1762" d="M22,8.73v0c0-.018,0-.037,0-.055l0-.015q0-.021-.006-.042l0-.016c0-.017-.007-.034-.012-.05v0c-.005-.017-.011-.034-.017-.05l-.008-.019-.015-.033-.009-.019c-.008-.015-.017-.03-.026-.044l-.011-.016-.022-.031-.013-.016c-.011-.014-.023-.027-.035-.04l0,0c-.013-.014-.028-.026-.042-.039l-.005,0-1.1-.912v-2.8a1.506,1.506,0,0,0-1.5-1.5H15.479L12.51.549a2.365,2.365,0,0,0-3.019,0L6.522,3.013H2.836a1.506,1.506,0,0,0-1.5,1.5v2.8l-1.1.912-.005,0c-.015.012-.029.025-.042.039l0,0c-.012.013-.024.026-.035.04l-.013.016-.022.031L.1,8.381c-.009.014-.018.029-.026.044l-.009.019-.015.033L.044,8.5c-.006.016-.012.033-.017.05v0c0,.017-.009.033-.012.05l0,.016q0,.021-.006.042l0,.015c0,.018,0,.036,0,.055v0H0V19.642a2.356,2.356,0,0,0,.741,1.716c.013.013.026.026.04.037a2.354,2.354,0,0,0,1.583.61H19.637a2.354,2.354,0,0,0,1.583-.61c.014-.012.027-.024.039-.037A2.356,2.356,0,0,0,22,19.642V8.731h0ZM2.836,4.3H19.165a.215.215,0,0,1,.215.215V9.531l-.365.3-7.328,6.082a1.075,1.075,0,0,1-1.372,0L2.986,9.834l-.365-.3V4.517A.215.215,0,0,1,2.836,4.3ZM1.289,19.642V10.1l.277.23h0l6.294,5.223L1.355,20.013A1.069,1.069,0,0,1,1.289,19.642Zm7.6-3.232.6.5a2.365,2.365,0,0,0,3.019,0l.6-.5,6.283,4.306H2.609Zm5.248-.856,6.294-5.223h0l.277-.23v9.541a1.069,1.069,0,0,1-.066.371ZM10.314,1.541a1.075,1.075,0,0,1,1.372,0L13.46,3.013H8.54Z" transform="translate(0)" fill="#f27c67"></path>
                                                        <path id="Path_1763" data-name="Path 1763" d="M131.5,150.662a.667.667,0,0,0,.667.667h6.312a.667.667,0,0,0,0-1.334h-6.312A.667.667,0,0,0,131.5,150.662Z" transform="translate(-125.948 -143.559)" fill="#f27c67"></path>
                                                        <path id="Path_1764" data-name="Path 1764" d="M132.121,211.329h9.068a.631.631,0,0,0,.6-.5.712.712,0,0,0,.02-.167.645.645,0,0,0-.621-.667h-9.068a.645.645,0,0,0-.621.667.712.712,0,0,0,.02.167A.631.631,0,0,0,132.121,211.329Z" transform="translate(-125.655 -200.986)" fill="#f27c67"></path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>{props.link1}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link p-0 d-flex align-items-center" href="#">
                                        <span className='navIcons'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 29.709 28">
                                                <g id="Group_874" data-name="Group 874" transform="translate(-3852.145 2541)">
                                                    <path id="support" d="M17.852,40.87a1.859,1.859,0,0,0-1.859-1.859H13.716a1.859,1.859,0,1,0,0,3.719h2.277A1.859,1.859,0,0,0,17.852,40.87ZM3.909,36.075a8.051,8.051,0,0,0,1.064.015,5.278,5.278,0,0,0,5.178,4.257h.709a2.918,2.918,0,0,0,0,1.044H10.15a6.322,6.322,0,0,1-6.242-5.317Zm-.531-1.111A4.051,4.051,0,0,1,0,30.969V28.5A4.051,4.051,0,0,1,4.051,24.45h.27a10.568,10.568,0,0,1,21.068,0h.27A4.051,4.051,0,0,1,29.709,28.5v2.469a4.051,4.051,0,0,1-4.051,4.051h-1.2a.9.9,0,0,1-.9-.9V25.3a8.711,8.711,0,1,0-17.421,0v8.826a.9.9,0,0,1-.493.8,5.479,5.479,0,0,1-2.274.04Z" transform="translate(3852.145 -2555.729)" fill="#f27c67" fill-rule="evenodd"></path>
                                                </g>
                                            </svg>
                                        </span>{props.link2}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link p-0 d-flex align-items-center" href="#">
                                        <span className='navIcons'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                                                <g id="Group_875" data-name="Group 875" transform="translate(-4026 2539)">
                                                    <g id="globe" transform="translate(4026 -2539)">
                                                        <g id="Group_577" data-name="Group 577">
                                                            <path id="Path_1759" data-name="Path 1759" d="M12,0A12,12,0,1,0,24,12,11.993,11.993,0,0,0,12,0ZM7.357,2.473a27.373,27.373,0,0,0-.914,3.014A18.963,18.963,0,0,1,4.322,4.7,10.622,10.622,0,0,1,7.357,2.473ZM3.391,5.824A20.391,20.391,0,0,0,6.147,6.867a27.751,27.751,0,0,0-.465,4.43H1.43A10.493,10.493,0,0,1,3.391,5.824Zm0,12.353A10.493,10.493,0,0,1,1.43,12.7H5.682a27.751,27.751,0,0,0,.465,4.43A20.392,20.392,0,0,0,3.391,18.176ZM4.322,19.3a18.941,18.941,0,0,1,2.121-.786,27.383,27.383,0,0,0,.914,3.014A10.623,10.623,0,0,1,4.322,19.3ZM11.3,22.57A10.6,10.6,0,0,1,9.134,22.2,26.054,26.054,0,0,1,7.8,18.155a19.093,19.093,0,0,1,3.494-.446Zm0-6.268a20.5,20.5,0,0,0-3.785.477A26.356,26.356,0,0,1,7.089,12.7H11.3Zm0-5.005H7.089a26.356,26.356,0,0,1,.422-4.076A20.5,20.5,0,0,0,11.3,7.7Zm0-5.006A19.093,19.093,0,0,1,7.8,5.845,26.054,26.054,0,0,1,9.134,1.8,10.6,10.6,0,0,1,11.3,1.43Zm9.312-.467A10.493,10.493,0,0,1,22.57,11.3H18.318a27.75,27.75,0,0,0-.465-4.43A20.393,20.393,0,0,0,20.609,5.824ZM19.678,4.7a18.941,18.941,0,0,1-2.121.786,27.384,27.384,0,0,0-.914-3.014A10.623,10.623,0,0,1,19.678,4.7ZM12.7,1.43a10.6,10.6,0,0,1,2.163.367A26.054,26.054,0,0,1,16.2,5.845a19.093,19.093,0,0,1-3.494.446Zm0,6.268a20.5,20.5,0,0,0,3.785-.477,26.356,26.356,0,0,1,.422,4.076H12.7ZM14.866,22.2a10.593,10.593,0,0,1-2.163.367V17.709a19.093,19.093,0,0,1,3.494.446A26.052,26.052,0,0,1,14.866,22.2ZM12.7,16.3V12.7h4.208a26.356,26.356,0,0,1-.422,4.076A20.5,20.5,0,0,0,12.7,16.3Zm3.94,5.225a27.373,27.373,0,0,0,.914-3.014,18.963,18.963,0,0,1,2.121.786A10.622,10.622,0,0,1,16.643,21.527Zm3.966-3.351a20.391,20.391,0,0,0-2.756-1.043,27.75,27.75,0,0,0,.465-4.43H22.57A10.493,10.493,0,0,1,20.609,18.176Z" fill="#f27c67"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>{props.link3}</a>
                                </li>
                                <li className="nav-item pe-0">
                                    <a className="nav-link p-0 paddLeft d-flex align-items-center" href='#'>
                                        <span className='navIcons'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 18.457 21">
                                                <g id="Group_876" data-name="Group 876" transform="translate(-4235.543 2538.5)">
                                                    <g id="user_1_" data-name="user (1)" transform="translate(4204.543 -2538.5)">
                                                        <g id="Group_579" data-name="Group 579" transform="translate(34.691)">
                                                            <g id="Group_578" data-name="Group 578">
                                                                <path id="Path_1760" data-name="Path 1760" d="M126.537,0a5.537,5.537,0,1,0,5.537,5.537A5.543,5.543,0,0,0,126.537,0Z" transform="translate(-121)" fill="#f27c67"></path>
                                                            </g>
                                                        </g>
                                                        <g id="Group_581" data-name="Group 581" transform="translate(31 12.305)">
                                                            <g id="Group_580" data-name="Group 580">
                                                                <path id="Path_1761" data-name="Path 1761" d="M47.118,302.387A7.893,7.893,0,0,0,41.459,300H39a7.894,7.894,0,0,0-5.659,2.387A8.069,8.069,0,0,0,31,308.08a.615.615,0,0,0,.615.615H48.842a.615.615,0,0,0,.615-.615A8.069,8.069,0,0,0,47.118,302.387Z" transform="translate(-31 -300)" fill="#f27c67"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>{props.link4}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

Navbar1.propTypes = {
    link1: PropTypes.string,
    link2: PropTypes.string,
    link3: PropTypes.string,
    link4: PropTypes.string,
}
