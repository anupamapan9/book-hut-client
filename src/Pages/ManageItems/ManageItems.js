import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Tr from './Tr';

const ManageItems = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/books')
            .then(res => {
                setBooks(res.data)
            }).then(err => {
                // console.log(err)
            })
    }, [])


    // delete function ---------------------------------------------------------------------------
    const handelDelete = (id, name) => {
        const confirm = window.confirm("Are You Sure Want To delete  " + name);
        if (confirm) {
            const url = `http://localhost:5000/books/${id}`
            axios.delete(url)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const remaining = books.filter(book => book._id !== id)
                        setBooks(remaining)
                    }
                }).then(err => {
                    // console.log(err)
                })
        }
    }
    return (
        <div className='flex justify-center'>
            <div className='md:w-1/2 '>
                <h1 className='text-center text-[#00307E] font-extrabold text-5xl my-10'>All Books</h1>
                <table className=' w-full text-sm text-center text-gray-500 dark:text-gray-400'>

                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3">
                                Image
                            </th>
                            <th className="px-6 py-3">
                                Name
                            </th>
                            <th className="px-6 py-3">
                                edit
                            </th>
                            <th className="px-6 py-3">
                                Update
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map(book => <Tr book={book} key={book._id} handelDelete={handelDelete}></Tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default ManageItems;