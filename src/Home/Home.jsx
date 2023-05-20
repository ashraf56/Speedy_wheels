import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Partner from '../Random component/Partner';

const Home = () => {


    return (
        <div className='container-lg' >
         <Banner></Banner>
         <Partner></Partner>
<Gallery></Gallery>

        </div>
    );
};

export default Home;