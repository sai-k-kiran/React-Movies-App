import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './home.css'
import {FaRegArrowAltCircleDown} from 'react-icons/fa'

function Home() {
    return ( 
        <div className='background'>
            <Navbar />
            <div className='container'>
                <div className="container-text">
                    <h1>Silver Screen on the go</h1>
                    <p>Search for your favorite movies and TV shows from the massive library including        different platforms across the internet. From Most Popular of all time to currently trending, catch all the shows at home on the go.</p>
                    <button className='btn'>Explore</button>
                </div>
            </div>
            <div className='container-icon'>
                <div className='shadow'>
                    <FaRegArrowAltCircleDown className='icon'/></div>
            </div>
            
        </div>
    )
}
 
export default Home;

//  `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`

    // useEffect(()=>{
    //     async function fetchData() {
    //         const request = await axios.get(requests.trending)
    //         setMovie(
    //             request.data.results[Math.floor(Math.random()* request.data.results.length)])
    //         return request;
    //     }
    //     fetchData()
    // }, [])

                    {/* <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
                <h3>{truncate(movie?.overview , 150)}</h3> */}
