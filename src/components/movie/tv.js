import React, { useEffect, useState } from 'react';
import { FaStarHalfAlt, FaUserCircle } from "react-icons/fa";
import './movie.css'
import axios from '../requests/axios'
import { useParams } from 'react-router-dom';
import {auth, db} from '../requests/firebase'
import Navbar from '../home/Navbar';

const baseURL = 'https://image.tmdb.org/t/p/original/'

const image_url = 'https://img.favpng.com/25/13/19/samsung-galaxy-a8-a8-user-login-telephone-avatar-png-favpng-dqKEPfX7hPbc6SMVUCteANKwj.jpg'

const APIKEY= '83d64a54840fbdbf961a6de7e04f615e'

const Tv = () => {
    const [tv, setTv] = useState([]);
    const [cast, setCast] = useState([])
    const [reviews, setReviews] = useState([])
    const [more, setMore] = useState(false)
    const { id } = useParams()
    
    useEffect(() => {
        async function fetchData() { 
            const request = await axios.get(`/tv/${id}?api_key=${APIKEY}&language=en-US`);
            setTv(request.data)
            return request
        }
        fetchData()
    }, [id])
  
    useEffect(() => {
        async function fetchCast() {
            const request = await axios.get(`/tv/${id}/credits?api_key=${APIKEY}&language=en-US`);
            setCast(request.data.cast)
            return request
        }
        fetchCast()
    }, [id])

    useEffect(() => {
        async function fetchReviews() {
            const request = await axios.get(`/tv/${id}/reviews?api_key=${APIKEY}&language=en-US&page=1`);
            setReviews(request.data.results)
            return request
        }
        fetchReviews()
    }, [id])
  
      const addToList = (tv) => {
        auth.onAuthStateChanged(user => {
             db.collection(user.email).add({
                m_id: tv.id,
                movie: false,
                name: tv.name || tv.original_name,
                image: tv.poster_path
            }).then(()=>{
                alert('Show added to list')
            })
        })
      }

    return (
        <div className='details'
        style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0, 0.8)),
         url('${baseURL}${tv?.backdrop_path}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
        }}> 
            <Navbar />
            <div className='container-section'>           
                <div className='poster_section'>
                    <img className='m_poster'
                        src={`${baseURL}${tv?.poster_path}`}
                        alt={tv.name || tv.original_name} />
                </div>
                <div className='detail-section'>
                    <h1>{tv.name || tv.original_name}</h1>
                    <h3>{tv.tagline}</h3>
                    <h2><FaStarHalfAlt className='stars' /> {tv.vote_average}/10</h2>
                    <p>{tv.overview}</p>
                    <p>No. of Seasons: {tv.number_of_seasons}
                    <span style={{marginLeft:'20px'}}>
                    <button className='btn add'
                        onClick={()=> addToList(tv)}>Add to list</button>
                    </span>
                    </p> 
                        
                        
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
                            src={people.profile_path !== null ? `${baseURL}${people?.profile_path}` : image_url}
                            alt={people.original_name} /> : 
                        <p>{people.original_name.substring(0,12)} <br></br> as <br></br> <span>"{people.character.substring(0,20)}"</span></p>
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
                        <div className='review-block' key={review.id}>
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

export default Tv