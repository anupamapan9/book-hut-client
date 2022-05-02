import React from 'react';
import Books from '../Books/Books';
import Clients from '../Clients/Clients';
import Features from '../Features/Features';

import Slider from '../Slider/Slider';

const Home = () => {

    return (
        <div>
            <Slider></Slider>
            <Clients></Clients>
            <Books></Books>
            <Features></Features>

        </div>
    );
};

export default Home;