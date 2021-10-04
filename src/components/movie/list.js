import React, { useEffect, useState } from 'react';
import './list.css'
import {auth, db} from '../requests/firebase'
import ListComp from './listComp';

const List = () => {
    const [list, setList] = useState([])

    useEffect(()=> {
        const getList = []
        auth.onAuthStateChanged(user=>{
            const movies = db.collection(user.email).onSnapshot((snapshot)=>{
                snapshot.forEach(doc =>{
                    getList.push({...doc.data()})
                })
                setList(getList);
            })
            return () => movies()
        })     
    }, []) 

        return ( 
            <div className='fav'>
                <div className='fav-back'>
                <div className='fav-text'>
                    <h1>My Watchlist</h1>
                    <hr className='underline'></hr>
                </div>
                <ListComp list={list} />
                </div>
            </div>
         )
    }
   
 
export default List;