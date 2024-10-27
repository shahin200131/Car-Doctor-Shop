import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative p-5'>
                    <img
                        src={person}
                        className="w-3/4 rounded-lg shadow-2xl" />
                    <img
                        src={parts}
                        className="w-1/2 absolute right-4 top-1/2 border-white border-8 rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 p-5'>
                    <div className='w-[376px]'>
                        <h1 className='text-2xl text-red-500 font-semibold mb-5'>About Us</h1>
                        <h2 className="text-5xl font-bold">We are qualified & of experience in this field</h2>
                        <div className="py-6">
                            <p >
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                            </p>
                            <br />
                            <p>
                                the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                            </p>
                        </div>
                        <button className="btn btn-error text-white">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;