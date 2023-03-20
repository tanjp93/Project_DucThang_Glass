import React from 'react';
import IntrodceCompany from './IntrodceCompany';
import SlideIntroduce from './SlideIntroduce';
import CompanyFeature from './CompanyFeature';
import Products from './Products';


const Body = () => {
    return (
        <div className='body'>
            <IntrodceCompany/>
            <SlideIntroduce/>
            <CompanyFeature/>
            <Products/>
        </div>
    );
}

export default Body;
