import React, { useEffect, useState } from "react";
import { auth } from "./Firebase";
import App from "../App";
import Model from "./Model";
import Signout from "./CricbuzzsingOut";
const FireValid = ()=>{
    const[presentUser, SetPresentUser]= useState(null);
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
                SetPresentUser({
                    Uid:user.uid,
                    email:user.email
                })
            }
            else{
                SetPresentUser(null)
            }
        })
    },[])
    return(
        <div>
             {presentUser ? <Signout presentUser ={presentUser}/>:<Model/>}
        </div>
    )
}
export default FireValid;