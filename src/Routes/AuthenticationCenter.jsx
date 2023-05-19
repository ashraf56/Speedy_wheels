import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import app from '../Firebase/firebase.config';


const auth = getAuth(app);
export let ContextAuth=createContext();
const googleprovider = new GoogleAuthProvider();

const AuthenticationCenter = ({children}) => {
    let [user,setUser]=useState(null);
    let [loader,setLodaer]=useState(true);


         let Createuser=(email,password)=>{
    setLodaer(true)
    return createUserWithEmailAndPassword(auth, email, password);
}
let google=()=>{
    setLodaer(true)
    return signInWithPopup(auth, googleprovider)
}
useEffect(()=>{
let Unsubscribe=onAuthStateChanged(auth,
    CurrentUser=>{
        setUser(CurrentUser);
        setLodaer(false);
    }
    )

    return()=>{
        Unsubscribe();
    }

},[])

const Authdata={
    user,loader,Createuser,google,
}

        return (
       
            <ContextAuth.Provider value={Authdata} >
{children}
            </ContextAuth.Provider>

   

      
    );
};

export default AuthenticationCenter;