import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Partner from '../Random component/Partner';
import ShopCategory from '../Random component/ShopCategory';

const Home = () => {


    return (
        <div className='container-lg' >
         <Banner></Banner>
         <Partner></Partner>
<Gallery></Gallery>
<ShopCategory></ShopCategory>

        </div>
    );
};

export default Home;