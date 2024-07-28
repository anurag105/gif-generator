// import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
// its recommended to keep the code in functions of react components as little as possilbe
//since there was a lot of duplication in the code we used for gifs,
// we can create a custom hook to handle the logic for fetching gifs

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);

    async function fetchData(tag) {
        setLoading(true);  // Set loading to true
            const response = await axios.get(tag ? `${url}&tag=${tag}` : url);
            setGif(response.data.data.images.downsized_large.url);  // Set the GIF URL
            setLoading(false);  // Set loading to false
    }

    useEffect(() => {
        fetchData(tag);
    }, [tag]);
    //the dependency array includes [tag]. 
    //This ensures that the fetchData function is called whenever the tag value changes.

   return {gif, loading , fetchData}
}

export default useGif
