import React from 'react';

const Clients = () => {
    return (
        <div className='flex h-40 justify-around items-center bg-slate-100'>
            <img src="https://i.ibb.co/PTBkDF0/client-01-144x63.png" className='w-[144px] h-[63px] md:block hidden' alt="" />
            <img src="https://i.ibb.co/Wxc9hNy/client-02-144x63.png" className='w-[144px] h-[63px]' alt="" />
            <img src="https://i.ibb.co/ZYCFJzm/client-03-144x63.png" className='w-[144px] h-[63px]' alt="" />
            <img src="https://i.ibb.co/Ny45Myn/client-04-144x63.png" className='w-[144px] hidden md:block h-[63px]' alt="" />
            <img src="https://i.ibb.co/bRcPDJy/client-05-144x63.png" className='w-[144px] h-[63px]  hidden sm:block' alt="" />
            <img src="https://i.ibb.co/cNjWPSc/client-06-144x63.png" className='w-[144px] h-[63px]  hidden md:block' alt="" />
        </div>
    );
};

export default Clients;