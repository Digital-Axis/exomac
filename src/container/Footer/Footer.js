import React from 'react';
import {Link} from "react-router-dom";
import Logo from '../../components/logo/Logo';


const Footer = () => {
    return (
        <div className="footer-section section footer-bg-color">
            <div className="container">
                <div className="row mb-lg-14 mb-md-10 mb-6">

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 col-12 mb-6">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <Logo 
                                    image={`${process.env.PUBLIC_URL}/images/logo/footer-logo.png`}
                                />
                            </div>
                            <div className="footer-widget-content">
                                <div className="content">


                                    <p><Link to={process.env.PUBLIC_URL + "/"}>(+260) 970-431-012</Link></p>
                                    <p><Link to={process.env.PUBLIC_URL + "/"}>(+260) 211-410-029</Link></p>
                                    <p><Link to={process.env.PUBLIC_URL + "/"}>enquiries@perfectsignage.org</Link> </p>
                                </div>
                                <div className="footer-social-inline">
                                    <a href="#"><i className="fab fa-twitter-square"></i></a>
                                    <a href="https://www.facebook.com/Perfectsignagemarketingltd"><i className="fab fa-facebook-square"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                   

                </div>

                <div className="row">
                    <div className="col">
                        <p className="copyright">&copy; {new Date().getFullYear()} <strong>Perfect Signage Marketing Limited</strong> Developed by <a href="#"><strong>Digital Axis Solution Limited</strong></a>.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
