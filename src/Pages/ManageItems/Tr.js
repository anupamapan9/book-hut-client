import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
const Tr = ({ book, handelDelete }) => {
    const { img, name, supplier, _id } = book
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4 w-10 h-10">
                <img src={img} alt="" />
            </td>
            <td className="px-6 py-4 ">
                {name}
            </td>
            <td className="px-6 py-4 ">
                {supplier}
            </td>
            <td className="px-6 py-4 ">
                <button onClick={() => handelDelete(_id, name)}> <AiTwotoneDelete className='w-8 h-8 text-[#F70000] hover:text-[#f70000dc]' /></button>
            </td>
        </tr>
    );
};

export default Tr;