import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Tr from '../ManageItems/Tr';

const MyItems = () => {
    const [spinner, setSpinner] = useState(false)
    const navigate = useNavigate()
    const [user] = useAuthState(auth)

    const [myItems, setMyItems] = useState([])

    // delete function ---------------------------------------------------------------------------
    const handelDelete = (id, name) => {
        const confirm = window.confirm("Are You Sure Want To delete  " + name);
        if (confirm) {
            const url = `https://floating-everglades-56290.herokuapp.com/books/${id}`
            axios.delete(url)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const remaining = myItems.filter(book => book._id !== id)
                        setMyItems(remaining)
                    }
                }).then(err => {
                    // console.log(err)
                })
        }
    }
    useEffect(() => {
        const email = user.email;
        const getMyItems = async () => {
            setSpinner(true)
            const url = `https://floating-everglades-56290.herokuapp.com/my-items?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("accessToken")}`
                    }
                })
                setMyItems(data)
                setSpinner(false)
            }
            catch (error) {
                if (error.response.status === 403 || 401) {
                    toast.error('You Have No access on this data logged out...');
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getMyItems();
    }, [user])
    return (
        <div className='flex justify-center min-h-[90vh]'>
            <div className='md:w-1/2 text-center'>
                <h1 className=' my-underline relative inline-block text-[#00307E] font-extrabold text-5xl my-10'>My books</h1>
                <table className='w-full text-sm text-center text-gray-500 dark:text-gray-400'>
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
                            myItems.map(book => <Tr book={book} key={book._id} handelDelete={handelDelete}></Tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyItems;