import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])


    return (
        <div>
            <div className='text-center space-y-5 mb-12 mt-5'>
                <h1 className='text-xl font-semibold text-red-500'>Service</h1>
                <h2 className='text-5xl font-bold'>Oue Services Area</h2>
                <p className='w-[717px] mx-auto'>
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    service.map(info => <ServiceCard key={info._id} info={info}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;