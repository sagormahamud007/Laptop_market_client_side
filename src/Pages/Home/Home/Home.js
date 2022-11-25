import React from 'react';
import Banner from '../Banner/Banner';
import TopBanner from '../Banner/TopBanner';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Banner></Banner>
            <Categories></Categories>
        </div>
    );
};

export default Home;