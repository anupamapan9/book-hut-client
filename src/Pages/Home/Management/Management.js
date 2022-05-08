import React from 'react';

const Management = () => {
    return (
        <div className='flex flex-col sm:flex-row items-center mx-10'>

            <div className='sm:w-1/2'>
                <img className='sm:p-10' src="https://www.corporatevision-news.com/wp-content/uploads/2021/12/Inventory.jpg" alt="" />
            </div>
            <div className='sm:w-1/2'>
                <h2 className='mb-6 font-medium text-3xl'>What is Inventory <span className='relative my-underline'>Management</span> </h2>
                <p className='text-justify'>Inventory management helps companies identify which and how much stock to order at what time. It tracks inventory from purchase to the sale of goods. The practice identifies and responds to trends to ensure there's always enough stock to fulfill customer orders and proper warning of a shortage.</p>
            </div>

        </div>
    );
};

export default Management;