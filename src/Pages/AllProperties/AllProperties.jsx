import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import { Helmet } from 'react-helmet-async';

const AllProperties = () => {
    const [properties, setProperties] = useState([]);
    useEffect(()=>{
        fetch('properties.json')
        .then(res => res.json())
        .then(data => {
            setProperties(data)
            console.log(data);
        })
    },[])
    return (
        <div className="max-w-screen-xl mx-auto">
            <Helmet>
                <title>All Properties</title>
            </Helmet>
            <SectionTitle subHeading={'Find your property & book now'} heading={'Explore your dream city.'}></SectionTitle>
            <div className='grid grid-cols-3 gap-10 justify-between items-center'>
                {
                    properties.map(property => <PropertyCard key={property.propertyId} property={property}></PropertyCard>)
                }
            </div>
        </div>
    );
};

export default AllProperties;