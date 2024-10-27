import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceCard = ({info}) => {
    const {title,img,price} = info;

    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl p-5">
            <figure>
                <img
                    src={img}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{title}</h2>
                <div className="card-actions justify-end text-xl">
                    <p className='text-red-400'>Price : ${price}</p>
                    <a href=""><span><FaArrowRightLong /></span></a>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;