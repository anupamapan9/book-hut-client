import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
    const { description, img, name, price, quantity, supplier } = book;
    return (
        <div class='flex justify-center'>
            <div class="max-w-sm bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className='flex justify-center w-full'>
                    <img className='w-full' src={img} alt="" />
                </div>
                <div class="p-5">

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>

                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description.slice(0, 200)}</p>
                    <Link to="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;