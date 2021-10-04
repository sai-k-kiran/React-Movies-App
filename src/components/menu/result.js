import React, { useEffect, useState } from 'react';
import '../movie/list.css'
import axios from '../requests/axios'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

const baseURL = 'https://image.tmdb.org/t/p/original/'

const APIKEY= '83d64a54840fbdbf961a6de7e04f615e'

function Results() {
    const {keyword} = useParams()
    const [result, setResult] = useState([])
    const [tv_result, setTv_result] = useState([])
    
    useEffect(()=> {
        async function fetchResult() {
            const request = await axios.get(`/search/movie?api_key=${APIKEY}&language=en-US&page=1&query=${keyword}`);
            setResult(request.data.results)
            return request
        }
        fetchResult()
     }, [keyword])   

     useEffect(()=> {
        async function fetchTvResult() {
            const request = await axios.get(`/search/tv?api_key=${APIKEY}&language=en-US&page=1&query=${keyword}`);
            setTv_result(request.data.results)
            return request
        }
        fetchTvResult()
     }, [keyword])

        return ( 
            <div className='fav'>
                <div className='fav-back'>
                    <div className='fav-text'>
                        <h1>{result.length + tv_result.length} results found</h1>
                    </div>
                    <div className='grid-block'>
                        <div className='fav-grid'>
                            {result.map(item => (
                                <Link to={`/movie/${item.id}`}>
                                <div className='fav-map'> 
                                    <img className='fav-img' key={item.id}
                                    src={`${baseURL}${item?.poster_path}`}
                                    alt={item.original_title} />
                                </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='grid-block'>
                        <div className='fav-grid'>
                            {tv_result.map(item => (
                                <Link to={`/tv/${item.id}`}>
                                <div className='fav-map'> 
                                    <img className='fav-img' key={item.id}
                                    src={`${baseURL}${item?.poster_path}`}
                                    alt={item.original_name} />
                                </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
         )
    }
   
 
export default Results;