import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
    const { description, img, name, price, quantity, supplier, _id } = book;
    return (
        <div className='flex justify-center'>
            <div className="max-w-sm bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className='flex justify-center w-full'>
                    <img className='w-full' src={img} alt="" />
                </div>
                <div className="p-5">

                    <div className='flex h-6 justify-between items-center my-2' >
                        <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{name}</h5>
                        <span className='text-blue-700 px-2'>Supplier: {supplier}</span>
                    </div>

                    <p className="mb-3 font-normal text-gray-700 text-justify dark:text-gray-400">{description.slice(0, 200)}</p>

                    <div className='flex h-6 justify-between items-center my-2' >
                        <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">${price}</h5>
                        <span className='text-gray-700 px-2'>Quantity: {quantity}</span>
                    </div>

                    <Link to={`/inventory/${_id}`} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Update
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;