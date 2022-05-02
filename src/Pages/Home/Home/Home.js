import React from 'react';
import Books from '../Books/Books';
import Clients from '../Clients/Clients';
import ContactMe from '../ContactMe/ContactMe';
import Features from '../Features/Features';
import Management from '../Management/Management';

import Slider from '../Slider/Slider';

const Home = () => {

    return (
        <div>
            <Slider></Slider>
            <Clients></Clients>
            <Books></Books>
            <Features></Features>
            <Management></Management>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;