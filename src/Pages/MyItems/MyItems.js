import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth)

    const [myItems, setMyItems] = useState([])
    useEffect(() => {
        const email = user.email;
        const getMyItems = async () => {
            const url = `http://localhost:5000/my-items?email=${email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
            setMyItems(data)
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