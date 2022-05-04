import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Sheared/Spinner/Spinner';
import Tr from './Tr';

const ManageItems = () => {
    const [books, setBooks] = useState([])
    const [spinner, setSpinner] = useState(false)
    useEffect(() => {
        setSpinner(true)
        axios.get('https://floating-everglades-56290.herokuapp.com/books')
            .then(res => {
                setBooks(res.data)
                setSpinner(false)
            }).then(err => {

                // console.log(err)
            })
    }, [])


    // delete function ---------------------------------------------------------------------------
    const handelDelete = (id, name) => {
        const confirm = window.confirm("Are You Sure Want To delete  " + name);
        if (confirm) {
            const url = `https://floating-everglades-56290.herokuapp.com/books/${id}`
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

    if (spinner) {
        return <Spinner></Spinner>
    }

    return (
        <div className='flex justify-center text-center'>
            <div className='md:w-1/2 '>
                <h1 className='text-center text-[#00307E] font-extrabold inline relative my-underline text-4xl mt-5'>All Books</h1>
                <div className='text-center mt-4'>
                    <Link to={`/add-items`} className="inline-flex items-center py-2 px-3 my-5 text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Add Items
                    </Link>
                </div>
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