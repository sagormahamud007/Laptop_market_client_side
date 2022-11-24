import React from 'react';
import Banner from '../Banner/Banner';
import TopBanner from '../Banner/TopBanner';

const Home = () => {
    return (
        <div className='mx-4'>
            <TopBanner></TopBanner>
            <Banner></Banner>
        </div>
    );
};

export default Home;