import { useState } from "react";
import { auth,db } from "./Firebase";
const Signout = (presentUser)=>{
    const name = presentUser.email;
    return(
        <span className="">
                        <a href='#' className='text-decoration-none'>{name}</a> <br/>
                        <button onClick={()=>auth.signOut()} className="btn btn-outline-danger btn-sm">O</button>
        </span>
    )
}
export default Signout;