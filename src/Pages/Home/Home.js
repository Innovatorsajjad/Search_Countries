import React from 'react';
import Hero from '../../Components/Hero/Hero';
import HeroBanner1 from '../../Components/HeroBanner1/HeroBanner1';
import HeroBanner2 from '../../Components/HeroBanner2/HeroBanner2';
import HeroBanner3 from '../../Components/HeroBanner3/HeroBanner3';

const Home = () => {
    return (
        <div>
            <Hero/>
            <HeroBanner1/>
            <HeroBanner2/>
            <HeroBanner3/>
        </div>
    );
};

export default Home;