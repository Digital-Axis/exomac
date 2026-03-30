import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import ServiceIconBoxTwo from '../container/service/ServiceIconBoxTwo';
import ServiceSkill from '../container/service/ServiceSkill';
//import AboutSix from '../container/About/AboutSix';
import FunfactTwo from '../container/Funfact/FunfactTwo';
import ContactInformationThree from '../container/ContactInformation/ContactInformationThree';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import Video from '../container/Video/Video1';


const Service = () => {
    return (
        <React.Fragment>
            <SEO title="psml || Service" />
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb-bg-three.jpg"
                title="we provide complete printing and branding solutions designed to help businesses stand out and communicate effectively."
                content="Home"
                contentTwo="Services"
            />
            <ServiceIconBoxTwo />
            <ServiceSkill />
            <Video />
            <FunfactTwo />
            <ContactInformationThree />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default Service;



