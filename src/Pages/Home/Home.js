import React from 'react';
import Banner from './Banner';
import Care from './Care';
import MakeAppoinment from './MakeAppoinment';
import Info from './info';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Care></Care>
            <MakeAppoinment></MakeAppoinment>
        </div>
    );
};

export default Home;