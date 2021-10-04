import React, {useEffect, useRef, useState} from 'react';
import axios from '../requests/axios';
import './comp.css'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import {Link} from 'react-router-dom'

const baseURL = 'https://image.tmdb.org/t/p/original';

function Comp({title, fetchUrl, tv}) {
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
                            <Link to={tv? `/tv/${movie.id}` : `/movie/${movie.id}`}>
                                <div className='movie-element' key={movie.id}>
                                    <img
                                    className={tv? 'tv_poster': 'movie_poster'} 
                                    src={`${baseURL}${tv ? movie.poster_path : movie.backdrop_path}`} 
                                    alt={movie.title} 
                                    />
                                    <div className={tv? 'tv-info-text' : 'info-text'}>
                                        <h3>{movie.name || movie.title}</h3>
                                    </div>
                                </div>
                            </Link>
                    ))}
                <div className='arrows'>
                    <button className={tv? 'tv-arrow left': 'arrow left'} onClick={()=>scroll(-300)}>
                        <MdKeyboardArrowLeft className='md-icon'/>
                    </button>
                    <button className={tv? 'tv-arrow right': 'arrow right'}  onClick={() => scroll(+300)}>
                        < MdKeyboardArrowRight className='md-icon'/>
                    </button>
                </div>
            </div>   
        </div>
    )
}
 
export default Comp;