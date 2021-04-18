import React from 'react';
import Reviews from '../../Review/Reviews/Reviews';
import Footer from '../../Shared/Footer/Footer';
import Clients from '../Clients/Clients';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import ServiceCollection from '../ServiceCollection/ServiceCollection';
import SpecialFeatures from '../SpecialFeatures/SpecialFeatures';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ServiceCollection></ServiceCollection>
            <SpecialFeatures></SpecialFeatures>
            <Reviews></Reviews>
            <Clients></Clients>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;