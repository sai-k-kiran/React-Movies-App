import React, {useState, useEffect, useRef} from 'react';
import axios from './axios'
import requests from './requests.js';
import Navbar from './Navbar';
import './Menu.css'
import Comp from './comp';
import { FaStarHalfAlt } from "react-icons/fa";

const baseURL = 'https://image.tmdb.org/t/p/original';

function Menu() {
    const [movie, setMovie] = useState([]);
    const [index, setIndex] = useState(0)
    
    const scroll_ref = useRef()
    const scroll = (scrollOffset) => {
        scroll_ref.current.scrollLeft += scrollOffset;
      };
    
     useEffect(()=> {
        async function fetchData() {
            const request = await axios.get(requests.netflixOriginals);
            setMovie(request.data.results)
            return request
        }
        fetchData()
     }, [])   
    
     useEffect(()=>{
        const lastIndex = movie.length -  1;
        if(index < 0){
          setIndex(lastIndex)
        }
        if(index > lastIndex){
          setIndex(0)
        }
      }, [index, movie])
    
    //   useEffect(()=>{
    //     let slider = setInterval(()=>{
    //       setIndex(index + 1)
    //     }, 5000);
    //     return()=> clearInterval(slider)
    //   })

        return(
            <div>
                <div className='menu'>
                    <Navbar />
                    <div className='block'></div>
                    <div className='carousel'>
                        {movie.map((movie, m_index) => {
                            let positionClass = 'next'
                            if(m_index === index){
                                positionClass = 'active'
                            }
                            if(m_index === index - 1 || (index === 0 && m_index == movie.length - 1)){
                                positionClass ='last'
                            }
                            return (
                            <article className={positionClass} key={movie.id}>
                                <img className='movie-img' 
                                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                                alt={movie.title || movie.original_name} />
                                <div className='movie-info'>
                                    <h2>{movie.title || movie.original_name}</h2>
                                    <p><FaStarHalfAlt className='star-icon'/> {movie.vote_average}/10</p>
                                </div>
                            </article>
                            )
                        })}
                    </div>
                    
                </div>
                {/* <Comp title='Netflix Originals' fetchUrl={requests.netflixOriginals} tv={true} />
                <Comp title='Prime Originals' fetchUrl={requests.primeOriginals} tv={true}/>
                <Comp title='Popular' fetchUrl={requests.popular} />
                <Comp title='Top of all time' fetchUrl={requests.top} />
                <Comp title='Currently airing' fetchUrl={requests.now_playing} />    */}
            </div>
        )
    }
 
export default Menu;    