import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut  } from "firebase/auth";
import app from '../firebase/firebase.init';

export const MyContext = createContext()
const auth = getAuth(app);

const AuthContext = ({children}) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const createLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("current user", currentUser);
            setUser(currentUser);
            setLoading(false);

        })
        return unsubscribe;
    } ,[])

    const authInfo = {user,loading, createUser, createLogin, logOut};

    return (
        <div>
           <MyContext.Provider value={authInfo}>
                {children}
        </MyContext.Provider> 
        </div>
    );
};

export default AuthContext;