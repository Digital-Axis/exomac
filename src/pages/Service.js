import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import ServiceIconBoxTwo from '../container/service/ServiceIconBoxTwo';
import ServiceSkill from '../container/service/ServiceSkill';
import AboutSix from '../container/About/AboutSix';
import FunfactTwo from '../container/Funfact/FunfactTwo';
import ContactInformationThree from '../container/ContactInformation/ContactInformationThree';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';


const Service = () => {
    return (
        <React.Fragment>
            <SEO title="Exomac || Service" />
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Signs that help you navigate through your daily life with ease"
                content="Home"
                contentTwo="Services"
            />
            <ServiceIconBoxTwo />
            <ServiceSkill />
            <AboutSix />
            <FunfactTwo />
            <ContactInformationThree />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default Service;



