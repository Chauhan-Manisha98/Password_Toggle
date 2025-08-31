
import React, {useState} from "react";
import ReactDOM from "react-dom/client";


function Password(){
   
    let [showPassword, setShowPassword]= useState(false)

    return(
        <>
        <div id= "toggle" >
            <h1>Password Toggle</h1>
            <input type={showPassword ? "text" : "password"} placeholder = "Enter your password"/>
            <button onClick ={ (()=>{setShowPassword(!showPassword)})}>Password</button>
        </div>

        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<Password/>)