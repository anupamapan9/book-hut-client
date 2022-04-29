import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const ResetPass = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth)
    const resetPass = async (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        await sendPasswordResetEmail(email);
        if (!error) {
            toast.success('Reset Link sent to your Inbox')
        }
        else {
            toast.error(error?.message)
        }

    }
    return (
        <div className='flex h-[90vh] items-center w-[300px] md:w-[400px] mx-auto'>
            <form className='shadow-md p-10' autoComplete='off' onSubmit={resetPass}>
                <h1 className='mb-5 text-[#00307E] font-bold text-xl'>Type email to get Reset Link</h1>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>

                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reset</button>
            </form>
        </div>
    );
};

export default ResetPass;