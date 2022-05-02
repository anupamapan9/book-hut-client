import React from 'react';
import { Link } from 'react-router-dom';
import useBooks from '../../../hooks/useBooks';
import BookCard from '../BookCard/BookCard';

const Books = () => {
    const [books] = useBooks()
    return (
        <div className='my-10'>

            <h1 className='text-center text-[#00307E] font-extrabold text-4xl'><span className=' relative inline my-underline' > Available Books</span></h1>


            <div className='w-full grid justify-between items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12'>
                {
                    books.slice(0, 6).map(book => <BookCard book={book} key={book._id}></BookCard>)
                }
            </div>
            <div className='text-center'>
                <Link to={`/manage-items`} className="inline-flex items-center py-2 px-3 my-10 text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Manage Inventory
                </Link>
            </div>

        </div>
    );
};

export default Books;