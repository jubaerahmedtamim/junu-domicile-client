import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='flex flex-col justify-center items-center my-6'>
            <h1 className='font-QuickSand uppercase text-sm text-gray-600 font-semibold '>{subHeading}</h1>
            <h3 className='font-heading text-3xl font-medium'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;