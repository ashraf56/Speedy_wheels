import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import app from '../Firebase/firebase.config';


const auth = getAuth(app);
export let ContextAuth=createContext();

const AuthenticationCenter = ({children}) => {
    let [user,setUser]=useState(null);
    let [loader,setLodaer]=useState(true);


         let Createuser=(email,password)=>{
    setLodaer(true)
    return createUserWithEmailAndPassword(auth, email, password);

}
const Authdata={
    user,loader,Createuser
}

        return (
       
            <ContextAuth.Provider value={Authdata} >
{children}
            </ContextAuth.Provider>

   

      
    );
};

export default AuthenticationCenter;