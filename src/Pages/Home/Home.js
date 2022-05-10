import React from 'react';
import Banner from './Banner';
import Care from './Care';
import MakeAppoinment from './MakeAppoinment';
import Info from './info';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Care></Care>
            <MakeAppoinment></MakeAppoinment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;