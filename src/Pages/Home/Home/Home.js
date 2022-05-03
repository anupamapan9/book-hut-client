import React from 'react';
import useBooks from '../../../hooks/useBooks';
import Books from '../Books/Books';
import Clients from '../Clients/Clients';
import ContactMe from '../ContactMe/ContactMe';
import Features from '../Features/Features';
import Management from '../Management/Management';
import Spinner from '../../Sheared/Spinner/Spinner'
import Slider from '../Slider/Slider';

const Home = () => {
    const [books, spinner] = useBooks()
    if (spinner) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <Slider></Slider>
            <Clients></Clients>
            <Books></Books>
            <Features></Features>
            <Management></Management>
            <ContactMe></ContactMe>
        </div>);



};

export default Home;