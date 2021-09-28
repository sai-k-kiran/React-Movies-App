import React, { useEffect, useState } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import './movie.css'
import axios from './axios'
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md'
import {FaUserCircle} from 'react-icons/fa'

const Movie = () => {
    const [movie, setMovie] = useState([]);
    const [cast, setCast] = useState([])
    const [reviews, setReviews] = useState([])
    const [index, setIndex] = useState(0)
    const [more, setMore] = useState(false)

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get('/movie/278?api_key=83d64a54840fbdbf961a6de7e04f615e&language=en-US');
            setMovie(request.data)
            return request
        }
        fetchData()
    }, [])
    useEffect(() => {
        async function fetchCast() {
            const request = await axios.get('/movie/278/credits?api_key=83d64a54840fbdbf961a6de7e04f615e&language=en-US');
            setCast(request.data.cast)
            return request
        }
        fetchCast()
    }, [])

    useEffect(() => {
        async function fetchReviews() {
            const request = await axios.get('/movie/278/reviews?api_key=83d64a54840fbdbf961a6de7e04f615e&language=en-US&page=1');
            setReviews(request.data.results.slice(0,5))
            setIndex(0)
            return request
        }
        fetchReviews()
    }, [index])
    console.log(reviews)
    const checkNumber = (number) => {
        if(number > (reviews.length - 1)){
          return 0
        }else if(number < 0) {
        return (reviews.length - 1)
      }
      return number;
    }
    
      const nextReview =() => {
        setIndex((index)=> {
          let newindex= index + 1
          return checkNumber(newindex)
        })
      }
      const prevReview =() => {
        setIndex((index)=> {
          let newindex= index - 1
          return checkNumber(newindex)
        })
      }
      const comment = reviews[index]
      console.log(index)
    return (
        <div className='details'
        style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0, 0.5)),
         url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
        }}>
            <div className='container-section'>           
                <div className='poster_section'>
                    <img className='m_poster'
                        src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                        alt={movie.title || movie.original_name} />
                </div>
                <div className='detail-section'>
                    <h1>{movie.title || movie.original_name}</h1>
                    <h3>{movie.tagline}</h3>
                    <h2><FaStarHalfAlt className='stars' /> {movie.vote_average}/10</h2>
                    <p>{movie.overview}</p>
                    <p>Runtime: {movie.runtime} minutes</p>
                    {/* <p>Released in: {movie.release_date.substring(0, 4)}</p> */}
                </div>
            </div>
            <div className='casts'>
                <h3>Cast and members</h3>
                <hr className='underline'></hr>
            </div>
            <div className='cast-block'>
                {cast.slice(0,6).map(people => 
                    <div className='cast' key={people.id}>
                        <img className='cast-image'
                        src={`https://image.tmdb.org/t/p/original/${people?.profile_path}`}
                        alt={people.original_name} />
                        <p>{people.original_name} <br></br> as <br></br> <span>{people.character}</span></p>
                    </div>
                )}
            </div>
            <div className='reviews'>
                <h3>Reviews</h3>
                <hr className='underline'></hr>
            </div>
            <div className="review">
            <div className="review-text">
                    <FaUserCircle  className='user_avatar' />
                     {/* <h3>Review by: {comment.author}</h3>
                      <p>{more? comment.content: `${comment.content.substring(0,100)} ...`}
                      <button className='more-btn'
                      onClick={()=>setMore(!more)}>
                          {more?'Less':'More'}
                          </button>
                      </p> */}
                 </div>
                 <div className='btn-container'>
                    <button className='change-btn left-btn' onClick={prevReview}>
                        <MdKeyboardArrowLeft/></button>
                    <button className='change-btn right-btn' onClick={nextReview}>
                        <MdKeyboardArrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default Movie;