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
         <div data-aos="fade-down">
              <Partner></Partner>

         </div>
         <About></About>
         <div data-aos="zoom-in">
        <Gallery></Gallery>    
         </div>

<ShopCategory></ShopCategory>

        </div>
    );
};

export default Home;