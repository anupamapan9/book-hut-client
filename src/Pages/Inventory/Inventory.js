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
        <div className='flex flex-col md:flex-row justify-around my-5'>
            <div className='flex justify-center '>
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
                        <p className='underline text-gray-600'>Added By : {email}</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-center text-[#00307E] font-bold text-2xl mb-5'>You can update your book Quantity here</h2>
                <div className='text-center'>
                    <button className='px-5 py-2 border-2 border-[#00307E] hover:bg-[#00307E] hover:text-white duration-200'>Delivered</button>
                    <p className='text-[#F70000]'>*It will decrease your stock by one</p>
                    <form className='my-10'>
                        <h1>Update your Quantity</h1>
                        <input type="number" name="quantity" id="quantity" required /> <br />
                        <input className='px-3 cursor-pointer mt-3 py-2 border-2 border-[#00307E] hover:bg-[#00307E] hover:text-white duration-200' type="submit" value="Update Stock" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Inventory;