import './assets/css/login.css';
import React,{useState} from "react";

import {AxiosLogin} from "./assets/js/AxiosLogin"

const Login = ()=>{

    const[signInData,setSignInData] = useState({username:"",password:""});
    const signInSubmit=(e)=>{
        e.preventDefault();
        // console.log(signInData,"<-------signInData");
        AxiosLogin(signInData);
        
    }
    return (
        <>
            <div className="my_login_background">
                <div className='w-screen h-lvh flex flex-col items-center justify-center'>
                    <div className="my_login_form mr-96 w-96">
                        <div className="mb-4">
                            <label>Sign In</label>
                        </div>
                            <form onSubmit={signInSubmit}>
                                <div className="pl-2">
                                    <input type="text" placeholder="Username"  className="w-full" onChange={(e)=>{setSignInData({...signInData,username:e.target.value})}}/>
                                </div>
                                <div className="mt-4 pl-2">
                                    <input type="text" placeholder="Password" className="w-full" onChange={(e)=>{setSignInData({...signInData,password:e.target.value})}}/>
                                </div>
                                <div className="mt-8 mb-2 pl-2">
                                    <button type="submit">Sign In</button>
                                </div>
                            </form>
                    </div>
                    <div className="mr-96 mt-4">
                        <p>Admin [admin - admin123] ~~ Employee [emp1 - emp1] </p>
                    </div>
                
                </div>
            </div>
        </>
    )
}

export default Login;