import React from 'react';
import { Link } from 'react-router-dom';
import { FcComboChart, FcCableRelease, FcGlobe, FcViewDetails, FcPortraitMode, FcQuestions } from "react-icons/fc";
const Features = () => {
    return (
        <div className='my-5 md:mx-10'>
            <h1 className='text-center text-[#00307E] font-extrabold text-2xl md:text-4xl mb-10'>All the features you'll ever need to manage <span className='my-underline relative'>your business</span> </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                <Link to="#" className="flex flex-col items-center bg-white border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-2 text-justify">
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><FcComboChart className='inline text-5xl mb-2 mr-2' /> Inventory Management</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Manage your inventory and check stock levels in real-time. Receive low inventory notifications and generate purchase orders to replenish your stock.</p>
                    </div>
                </Link>
                <Link to="#" className="flex flex-col items-center bg-white  border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-2 text-justify">
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><FcCableRelease className='inline text-5xl mb-2 mr-2' /> Barcode Scanning</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Scan inventory into your orders, generate barcodes for your documents, search for inventory or documents by scanning barcodes</p>
                    </div>
                </Link>
                <Link to="#" className="flex flex-col items-center bg-white  border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-2 text-justify">
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><FcGlobe className='inline text-5xl mb-2 mr-2' /> Locations and Zones</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Have multiple warehouses, offices, or retail stores? No problem. Easily track where all your inventory is by organizing everything into locations and zones.</p>
                    </div>
                </Link>

                {/* row one  */}

                <Link to="#" className="flex flex-col items-center bg-white  border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-2 text-justify">
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><FcViewDetails className='inline text-5xl mb-2 mr-2' />Item Variations</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Organize inventory items using custom attributes such as size, color, and location. View how many you have globally or at each location.</p>
                    </div>
                </Link>
                <Link to="#" className="flex flex-col items-center bg-white  border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-2 text-justify">
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><FcPortraitMode className='inline text-5xl mb-2 mr-2' />
                            Customer Accounts</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">With built-in CRM features you can keep track of all your customer accounts with ease. Add multiple contacts, private notes, and review their purchase history.</p>
                    </div>
                </Link>
                <Link to="#" className="flex flex-col items-center bg-white  border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-2 text-justify">
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><FcQuestions className='inline text-5xl mb-2 mr-2' />
                            Invoices & Estimates</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Create beautiful, professional invoices & estimates in just a few seconds and then instantly email them as PDF's directly to your customers or prospects.</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Features;