import React, {useEffect, useRef, useState} from 'react';
import axios from './axios';
import './comp.css'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import {Route, Redirect, Switch, Link} from 'react-router-dom'

const baseURL = 'https://image.tmdb.org/t/p/original';

function Comp({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);
    
    const scroll_ref = useRef()
    const scroll = (scrollOffset) => {
        scroll_ref.current.scrollLeft += scrollOffset;
      };
    
     useEffect(()=> {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request
        }
        fetchData()
     }, [fetchUrl])   

    return (
        <div className='row' >
            <h3>{title}</h3>
            <hr className='underline'></hr>
            <div className='row_posters' ref={scroll_ref}>
                    {movies.map(movie => (
                        <div className='movie-element'>
                            <img key={movie.id} 
                            className='poster' 
                            src={`${baseURL}${ movie.backdrop_path}`} 
                            alt={movie.title} 
                            />
                            <div className='info-text'>
                                <h3>{movie.title || movie.original_name}</h3>
                            </div>
                        </div>
                    ))}
                <div className='arrows'>
                    <button className="arrow left" onClick={()=>scroll(-1000)}>
                        <MdKeyboardArrowLeft className='md-icon'/>
                    </button>
                    <button className="arrow right"  onClick={() => scroll(+1000)}>
                        < MdKeyboardArrowRight className='md-icon'/>
                    </button>
                </div>
            </div>   
        </div>
    )
}
 
export default Comp;
// INstead of writing this.props.title, you could just destructure it above like const {title} = this.props

// In fetchData fn, we are using axios to set teh URL. Axios will append the url from "fetchUrl" props that we 
// passed in the "Comp" component in App.js with the "https://api.themoviedb.org/3". That means whatever url
// we will be fetching is https://api.themoviedb.org/3/<url from fecthUrl>