

import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {
    const{gif, loading , fetchData} = useGif();

    function clickHandler() {
        fetchData();
    }


    return (
        <div className='w-2/5 rounded-lg border-gray-800 border-solid bg-white flex flex-col items-center gap-y-2'>
            <h1 className=' mt-2 mb-2 text-lg underline uppercase font-bold'>A Random Gif</h1>

            {
                loading ? (<Spinner/>) :( <img src={gif} alt="Random Gif" width='350' />)
            }
           
            <button className='w-5/6 bg-gray-500 text-lg py-1.5 rounded-lg mb-1' 
            onClick={clickHandler}>
                Generate
            </button>
        </div>
    );
};

export default Random;
