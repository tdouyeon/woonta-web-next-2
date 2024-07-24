import Link from 'next/link';
import React from 'react';

const Box = ({ counsel }: any) => {
  return (
    <ul className="divide-y divide-gray-200 rounded-lg overflow-hidden shadow-md flex justify-content bg-white mt-3">
      <li className="py-6 px-4 py-2 sm:px-6 flex items-center justify-around w-80 my-2">
        <div className="flex flex-grow flex-col">
          <span className="text-gray-800 text-primary font-semibold">
            {counsel.name} 선생님
          </span>
          <span className="text-gray-800 text-sm">{counsel.region}</span>
          <span className="text-gray-800 font-bold">{counsel.price}</span>
        </div>
        <button className="ml-4 px-5 py-2 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-md font-semibold bg-main">
          <Link href={`${counsel.id}/counselDetail`}>선택</Link>
        </button>
      </li>
    </ul>
  );
};

export default Box;
