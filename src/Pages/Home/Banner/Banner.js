import React from 'react';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className='grid lg:grid-cols-2'>
            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="https://www.startech.com.bd/image/cache/catalog/laptop/asus/vivobook-x515ma/vivobook-x515ma-01-228x228.jpg" className='w-full' alt='' />
                        <div>
                            <h1 className="text-5xl font-bold">Best laptop for you</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full items-">

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <Link href="#slide4" className="btn btn-circle">❮</Link>
                        <Link href="#slide2" className="btn btn-circle">❯</Link>
                    </div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfpV97NUt0L8h5LgMqkZYhBuPwfx7O0HcsHA&usqp=CAU" className='min-h-screen' alt='' />
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://www.startech.com.bd/image/cache/catalog/laptop/acer/aspire-3-a315-58/aspire-3-a315-58-001-228x228.jpg" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <Link href="#slide1" className="btn btn-circle">❮</Link>
                        <Link href="#slide3" className="btn btn-circle">❯</Link>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/slim-3i/slim-3i-001-228x228.jpg" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <Link href="#slide2" className="btn btn-circle">❮</Link>
                        <Link href="#slide4" className="btn btn-circle">❯</Link>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/15s-du1116tu/15s-du1116tu-01-228x228.jpg" className="w-50%" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <Link href="#slide3" className="btn btn-circle">❮</Link>
                        <Link href="#slide1" className="btn btn-circle">❯</Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;