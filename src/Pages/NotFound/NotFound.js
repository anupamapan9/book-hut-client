import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='bg-slate-200 pt-52 h-[90vh] -mb-[20000000000px] '>
            <h1 className='text-center text-[#00307e] text-7xl font-extrabold'>404</h1>
            <p className='text-center text-2xl font-semibold'>Opps!! The page you are Finding Not There</p>
            <div className='text-center'>
                <Link to={`/`} className="inline-flex items-center py-2 px-3 my-5 text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Back To Home
                </Link>
                <div className='flex justify-center'>
                    <img src="https://i.ibb.co/Yj6tndR/404.png" alt="" />
                </div>

            </div>
        </div>
    );
};

export default NotFound;