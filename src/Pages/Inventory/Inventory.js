import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    const [book, setBook] = useState({})
    const { img, email, description, name, price, quantity, supplier } = book;
    const [bookQuantity, setBookQuantity] = useState(quantity)
    const url = `https://floating-everglades-56290.herokuapp.com/inventory/${id}`
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setBook(res.data)
            })
    }, [bookQuantity])


    //  data 
    const handelUpdateStock = e => {
        e.preventDefault();
        const supplierInput = e.target.quantity.value;
        const newQuantityTotal = parseInt(quantity) + parseInt(supplierInput)
        const newQuantity = { newQuantityTotal }
        const putUrl = `https://floating-everglades-56290.herokuapp.com/update/${id}`
        fetch(putUrl, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newQuantity)
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    setBookQuantity(newQuantityTotal);
                    toast.success("SuccessFully Added")
                    e.target.reset()
                }
            })
    }

    // deliver a book ---------------------------

    const deliveredBook = () => {
        const newQuantityTotal = parseInt(quantity) - 1
        const newQuantity = { newQuantityTotal }
        const putUrl = `https://floating-everglades-56290.herokuapp.com/update/${id}`
        fetch(putUrl, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newQuantity)
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    setBookQuantity(newQuantityTotal);
                    toast.success("Product Delivered !!")
                }
            })
    }



    return (
        <div className='flex flex-col md:flex-row justify-around my-5'>
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
                        <p className='underline text-gray-600'>Added By : {email}</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-center text-[#00307E] font-bold text-2xl mb-5'>You can update your book Quantity here</h2>
                <div className='text-center'>
                    <button onClick={deliveredBook} className='px-5 py-2 border-2 border-[#00307E] hover:bg-[#00307E] hover:text-white duration-200'>Delivered</button>
                    <p className='text-[#F70000]'>*It will decrease your stock by one</p>
                    <form onSubmit={handelUpdateStock} className='my-10'>
                        <h1>Update your Quantity</h1>
                        <input type="number" name="quantity" id="quantity" required /> <br />
                        <input className='px-3 cursor-pointer mt-3 py-2 border-2 border-[#00307E] hover:bg-[#00307E] hover:text-white duration-200' type="submit" value="Update Stock" />
                    </form>
                    <div className='text-center'>
                        <Link to={`/manage-items`} className="inline-flex items-center py-2 px-3 my-10 text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Manage Inventory
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;