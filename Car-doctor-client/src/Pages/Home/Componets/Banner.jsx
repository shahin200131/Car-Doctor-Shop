import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] rounded-lg">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={img1}
                    className="w-full" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white space-y-5 w-1/2 pl-12'>
                        <h1 className='text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='font-semibold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-5'>
                            <button className="btn btn-outline btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute right-5 bottom-5 flex -translate-y-1/2 transform justify-end space-x-5">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={img2}
                    className="w-full" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white space-y-5 w-1/2 pl-12'>
                        <h1 className='text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='font-semibold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-5'>
                            <button className="btn btn-outline btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute right-5 bottom-5 flex -translate-y-1/2 transform justify-end space-x-5">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={img3}
                    className="w-full" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white space-y-5 w-1/2 pl-12'>
                        <h1 className='text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='font-semibold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-5'>
                            <button className="btn btn-outline btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute right-5 bottom-5 flex -translate-y-1/2 transform justify-end space-x-5">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={img4}
                    className="w-full" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white space-y-5 w-1/2 pl-12'>
                        <h1 className='text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='font-semibold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-5'>
                            <button className="btn btn-outline btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute right-5 bottom-5 flex -translate-y-1/2 transform justify-end space-x-5">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;