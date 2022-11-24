import React from 'react';

const Banner = () => {
    return (

        <div className='grid lg:grid-cols-2'>

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/ip-slim/ip-slim-15-228x228.jpg" className='w-full' alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Best laptop for you</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>


            <div className="carousel w-full flex items-center">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/ideapad-3/ideapad-3-01101-228x228.jpg" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/ideapad-5/ideapad-5-001-228x228.jpg" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/ideapad-3/ideapad-3-01101-228x228.jpg" className='w-full' alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/ideapad-3/ideapad-3-110-228x228.jpg" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default Banner;