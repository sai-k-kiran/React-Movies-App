import React, {useContext, useEffect, useState} from 'react';
import {auth} from '../requests/firebase';

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext) 
}
const AuthProvider = ({children}) => {
    const [currentuser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password){ 
        return auth.createUserWithEmailAndPassword(email, password)
    }
    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }
    function logout(){
        return auth.signOut()
    }
    useEffect(()=> {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])
    const value={
        currentuser, 
        signup,
        login,
        logout
    }
    return ( 
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
     )
}
 
export default AuthProvider;