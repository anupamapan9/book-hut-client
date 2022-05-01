import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItems = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)

    const [myItems, setMyItems] = useState([])
    useEffect(() => {
        const email = user.email;
        const getMyItems = async () => {
            const url = `http://localhost:5000/my-items?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("accessToken")}`
                    }
                })
                setMyItems(data)
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
        <div>
            <h1>Order {myItems.length}</h1>
        </div>
    );
};

export default MyItems;