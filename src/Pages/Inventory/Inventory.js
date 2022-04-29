import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    const [book, setBook] = useState({})
    const url = `http://localhost:5000/inventory/${id}`
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setBook(res.data)
            }).then(err => {
                console.log(err)
            })
    }, [])
    const { _id, img, email, description, name, price, quantity, supplier } = book;
    return (
        <div className='flex justify-around my-5'>
            <div className='flex justify-center'>
                <div className="max-w-sm bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className='flex justify-center h-[400px] w-full'>
                        <img className='w-full' src={img} alt="" />
                    </div>
                    <div className="p-5">

                        <div className='flex h-6 justify-between items-center my-2' >
                            <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{name}</h5>
                            <span className='text-blue-700 px-2'>Supplier: {supplier}</span>
                        </div>

                        <p className="mb-3 font-normal text-gray-700 text-justify dark:text-gray-400">{description}</p>

                        <div className='flex h-6 justify-between items-center my-2' >
                            <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">${price}</h5>
                            <span className='text-gray-700 px-2'>Quantity: {quantity}</span>
                        </div>
                        <p>Added By : {email}</p>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Inventory;