import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Partner from '../Random component/Partner';
import ShopCategory from '../Random component/ShopCategory';
import About from '../Random component/About';

const Home = () => {


    return (
        <div className='container-lg' >
         <Banner></Banner>
         <Partner></Partner>
         <About></About>
<Gallery></Gallery>
<ShopCategory></ShopCategory>

        </div>
    );
};

export default Home;