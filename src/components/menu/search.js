import React, { useState } from 'react';
import './Menu.css'
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Search = () => {
    const [keyword, setKeyword] = useState('')

    return ( 
        <>
        <div className='serach-block'>
            <input className='search' value={keyword} 
            onChange={(e)=> setKeyword(e.target.value)}
            placeholder='Search'/>
            <Link className='search-btn'
            to={`/result/${keyword}`}><AiOutlineSearch /></Link>
        </div>
        </>
     )
}
 
export default Search;