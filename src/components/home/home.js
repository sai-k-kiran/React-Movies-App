import React from 'react';
import Navbar from './Navbar';
import './home.css'
import requests from '../requests/requests';
import Comp from '../menu/comp';
import Footer from './footer';
import {FaRegArrowAltCircleDown} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <> 
        <div className='background'>
            <Navbar />
            <div className='home-container'>
                <div className="container-text">
                    <h1>Silver Screen on the go</h1>
                    <p>Search for your favorite movies and TV shows from the massive library including        different platforms across the internet. From Most Popular of all time to currently trending, catch all the shows at home on the go.</p>
                    <div className='ex'>
                        <Link to='/menu' className='ex-btn'>Explore</Link>
                    </div>
                </div>
            </div>
            <div className='container-icon'>
                <div className='shadow'>
                    <FaRegArrowAltCircleDown className='icon'/></div>
            </div>
        </div>
        <Comp title='Netflix Originals' fetchUrl={requests.netflixOriginals} tv={true} />
        <Comp title='Popular Movies' fetchUrl={requests.popular} />
        <Footer />
        </>
    )
}
 
export default Home;

