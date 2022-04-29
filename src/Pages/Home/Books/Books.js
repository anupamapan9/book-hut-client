import React from 'react';
import useBooks from '../../../hooks/useBooks';
import BookCard from '../BookCard/BookCard';

const Books = () => {
    const [books] = useBooks()
    return (
        <div className='my-10'>
            <h1 className='text-center text-[#00307E] font-extrabold text-5xl mb-10'>Available Books</h1>

            <div className='w-full grid justify-between items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
                {
                    books.slice(0, 6).map(book => <BookCard book={book} key={book._key}></BookCard>)
                }
            </div>

        </div>
    );
};

export default Books;