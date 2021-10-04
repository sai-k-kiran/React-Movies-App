import React from 'react';
import './list.css'
import { Link } from 'react-router-dom';

const baseURL = 'https://image.tmdb.org/t/p/original/'

const ListComp = ({list}) => {
    return ( 
        <>
        <div className='grid-block'>
            <div className='fav-grid'>
                {list.map(item => (
                <Link to={item.movie === true ? `/movie/${item.m_id}`: `/tv/${item.m_id}`}>
                    <div className='fav-map'> 
                        <img className='fav-img' key={item.m_id}
                        src={`${baseURL}${item?.image}`}
                        alt={item.name} />
                    </div>
                </Link>
                ))}
            </div>
        </div>
        </>
     )
}
 
export default ListComp;