import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { FcGoogle } from 'react-icons/fc';
const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (error) {
        toast.error(error?.message)
    }
    if (user) {
        navigate(from, { replace: true })
    }

    return (
        <div className='w-full'>
            <div className='my-5 flex items-center h-1'>
                <div className='h-1 w-1/2 border-b-[1px]  border-gray-700'></div>
                <p className='px-5'> or</p>
                <div className='h-1 w-1/2 border-b-[1px] border-gray-700 '></div>
            </div>
            <div className='text-left flex justify-center flex-col w-full'>

                <button onClick={() => signInWithGoogle()} className='border-2 my-1 border-[#00307E] transition-all hover:bg-[#00307E] hover:text-white duration-200 py-2'>Login With Google <FcGoogle className='inline ml-3 text-xl' /></button>
            </div>
        </div>
    );
};

export default SocialLogin;