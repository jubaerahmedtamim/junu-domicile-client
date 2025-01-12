import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='flex flex-col justify-center items-center my-2 md:my-6'>
            <h3 className='font-QuickSand uppercase text-xs md:text-sm text-gray-600 font-semibold '>{subHeading}</h3>
            <h1 className='font-heading text-xl md:text-3xl font-medium'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;