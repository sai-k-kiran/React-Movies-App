import React, { useEffect, useState } from 'react';
import { FaStarHalfAlt, FaUserCircle} from "react-icons/fa";
import './movie.css'
import axios from '../requests/axios'
import {MdClose} from 'react-icons/md'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'
import { useParams } from 'react-router-dom';
import {auth, db} from '../requests/firebase'
import Navbar from '../home/Navbar';

const baseURL = 'https://image.tmdb.org/t/p/original/'

const image_url = 'https://img.favpng.com/25/13/19/samsung-galaxy-a8-a8-user-login-telephone-avatar-png-favpng-dqKEPfX7hPbc6SMVUCteANKwj.jpg'

const APIKEY= '83d64a54840fbdbf961a6de7e04f615e'

const Movie = () => {
    const [movie, setMovie] = useState([]);
    const [cast, setCast] = useState([])
    const [reviews, setReviews] = useState([])
    const [more, setMore] = useState(false)
    const [trailerUrl, setTrailerUrl] = useState('')
    const { id } = useParams()
    
    useEffect(() => {
        async function fetchData() { 
            const request = await axios.get(`/movie/${id}?api_key=${APIKEY}&language=en-US`);
            setMovie(request.data)
            return request
        }
        fetchData()
    }, [id])

    useEffect(() => {
        async function fetchCast() {
            const request = await axios.get(`/movie/${id}/credits?api_key=${APIKEY}&language=en-US`);
            setCast(request.data.cast)
            return request
        }
        fetchCast()
    }, [id])

    useEffect(() => {
        async function fetchReviews() {
            const request = await axios.get(`/movie/${id}/reviews?api_key=${APIKEY}&language=en-US&page=1`);
            setReviews(request.data.results)
            return request
        }
        fetchReviews() 
    }, [id])

      const options = {
          playerVars : {
              autoplay : 1,
              'origin': 'http://localhost:3000'
          }
      }
      const handlePlay = (movie) => {
          if(trailerUrl){
              setTrailerUrl('')
          } else{
              movieTrailer(movie?.title || "")
              .then((url)=> {
                  const Params = new URLSearchParams(new URL(url).search)
                  setTrailerUrl(Params.get('v'))
              })
              .catch((err) => console.log(err))
          }
       }
       const addToList = (movie) => {
        auth.onAuthStateChanged(user => {
             db.collection(user.email).add({
                m_id: movie.id,
                movie: true,
                name: movie.title || movie.original_title,
                image: movie.poster_path
            }).then(()=>{
                alert('Movie added to list')
            }) 
        })
      }

    return (
        <div className='details'
        style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0, 0.8)),
         url('${baseURL}${movie?.backdrop_path}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
        }}>
            <Navbar />
            <div className='container-section'>           
                <div className='poster_section'>
                    <img className='m_poster'
                        src={`${baseURL}${movie?.poster_path}`}
                        alt={movie.title || movie.original_name} />
                </div>
                <div className='detail-section'>
                    <h1>{movie.title || movie.original_title}</h1>
                    <h3>{movie.tagline}</h3>
                    <h2><FaStarHalfAlt className='stars' /> {movie.vote_average}/10</h2>
                    <p>{movie.overview}</p>
                    <p>Runtime: {movie.runtime} minutes</p>
                        <button className='btn play'
                        onClick={()=>handlePlay(movie)}>Play Trailer</button>
                        <button className='btn add'
                        onClick={()=>addToList(movie)}>Add to list</button>
                </div>
            </div>
            <div className='videoWrapper'>
                <div className='frame'>
                    {trailerUrl && <YouTube  className='Youtube-frame' videoId={trailerUrl} options={options} />}
                </div>
                <div>
                    {trailerUrl && <MdClose onClick={()=>setTrailerUrl('')}  className='close-icon' />}
                </div>
            </div>
            
            <div className='casts'>
                <h3>Cast and Members</h3>
                <hr className='underline'></hr>
            </div>
            <div className='cast-block'>
                {cast.slice(0,6).map(people => 
                    <div className='cast' key={people.id}>
                        <img className='cast-image'
                        src= {people.profile_path !== null ? `${baseURL}${people?.profile_path}` : image_url}
                        alt={people.original_name} /> 
                        <p>{people.original_name.substring(0,12)}.. <br></br> as <br></br> <span>{people.character.substring(0,12)}..</span></p>
                    </div>
                )}
            </div>
            <div className='reviews'>
                <h3>Reviews</h3>
                <hr className='underline'></hr>
            </div>
            <div className="review">
            <div className="review-text"> 
                    {reviews.map(review => 
                        <div className='review-block'>
                            <FaUserCircle  className='user_avatar' />
                            <h3>{review.author}</h3>
                            <p>{more ? review.content : `${review.content.substring(0,100)} ...`}
                                <button className='more-btn'
                                onClick={()=>setMore(!more)}>
                                {more?'Less':'More'}
                                </button>
                            </p>
                        </div>
                    )}
            </div>     
            </div>
        </div>
    )
}

export default Movie;
