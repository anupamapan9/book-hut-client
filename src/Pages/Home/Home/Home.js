import React from 'react';
import useBooks from '../../../hooks/useBooks';
import Slider from '../Slider/Slider';

const Home = () => {
    const [books] = useBooks()
    console.log(books)
    return (
        <div>
            <Slider></Slider>
        </div>
    );
};

export default Home;