import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../Asstes/Banner-Img/image1.jpg'
const Footer = () => {
    return (
        <footer className="text-white grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 footer p-6 mt-5 bg-black">
            <div>
                <img className='w-1/3' src={img1} alt="" />
                <p>Laptop Market<br />Providing reliable tech since 2022</p>
            </div>
            <div>
                <span className="footer-title text-white">Product</span>
                <Link className="link link-hover text-white">Hp Brand</Link>
                <Link className="link link-hover text-white">Lenovo Brand</Link>
                <Link className="link link-hover text-white">Toshiba Brand</Link>
                <Link className="link link-hover text-white">Apple Brand</Link>
            </div>
            <div>
                <span className="footer-title text-white">Company</span>
                <Link className="link link-hover text-white">About us</Link>
                <Link className="link link-hover text-white">Contact</Link>
                <Link className="link link-hover text-white">Jobs</Link>
                <Link className="link link-hover text-white">Press kit</Link>
            </div>
            <div>
                <span className="footer-title text-white">Legal</span>
                <Link className="link link-hover text-white">Terms of use</Link>
                <Link className="link link-hover text-white">Privacy policy</Link>
                <Link className="link link-hover text-white">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;