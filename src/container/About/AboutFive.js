import {useState, useEffect, useRef} from "react";
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import {Link} from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';

const AboutFive = () => {
    const [scale] = useState(1.04);
    const sceneEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        })
        
        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])
    return (
        <div className="section section-padding-top section-padding-bottom-180">
            <div className="container">

                <div className="row">

                    <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
                        <div className="about-image-area">
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "images/about/about-3.jpg"} alt="" />
                                </Tilt>
                            </div>
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "images/about/about-4.jpg"} alt="" />
                                </Tilt>
                            </div>

                            <div className="shape shape-1" id="scene" ref={sceneEl}>
                                <span data-depth="1"><img src={process.env.PUBLIC_URL + "images/shape-animation/about-shape-1.png"} alt="" /></span>
                            </div>

                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-6 col-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="about-content-area">
                            <SectionTitleTwo 
                                subTitle="Our solutions begin with brand research"
                                title="We’ve worked alongside plenty of brands &amp; startups"
                            />

                            <p>. With over 7 years of industry experience, we are a dynamic and reliable branding company committed to delivering high-quality, tailor-made solutions. Our team of more than 33 skilled professionals is the backbone of our success, with a strong commitment to diversity—over 20% of our workforce is made up of women, contributing to a balanced and inclusive working environment.

                                    </br>We specialize in a wide range of services including branding, printing, corporate gifts, ATM branding, signage, filling station branding, and garment wear. Our expertise allows us to serve clients across various industries with precision, creativity, and consistency.

</br> At the core of our business is our niche: providing customized solutions with quick turnaround times. We understand the importance of efficiency without compromising on quality, ensuring that our clients receive exceptional results, on time, every time.

</br> Driven by innovation and a passion for excellence, we aim to build long-lasting partnerships by delivering value and exceeding expectations.  </p>

                            <Link className="btn btn-primary btn-hover-secondary mt-xl-12 mt-lg-8 mt-md-6 mt-4" to={process.env.PUBLIC_URL + "/"}>Get Started</Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default AboutFive;
