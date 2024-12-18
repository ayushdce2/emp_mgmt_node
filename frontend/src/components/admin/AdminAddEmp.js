import {Link } from "react-router-dom";
import "../assets/css/adminaddemp.css";
import React,{useState} from "react";
import axios from 'axios';
import upload from "../assets/images/upload.svg"

const AdminAddEmp = ()=>{
    
    const[empImgUrl,setEmpImgUrl]=useState(upload);

    const empImgUpload = (e)=>{
        
        if(e.target.files.length != 0){
            setEmpImgUrl(URL.createObjectURL(e.target.files[0]))
        }else{
            setEmpImgUrl(upload);
        }
    }

    const [empData,setEmpData] = useState({});

    const empAdd = async (e)=>{

        e.preventDefault();
        console.log(empData,"<------ FRONt empData");
        
        await axios.post('https://emp-mgmt-node-4.onrender.com/api/empadd',empData)
        .then((response)=>{console.log(response,"<---response")})
        .catch((error)=>{console.log(error,"<---error")});
    
    }
    return(
        <>
        <div className="my_admindashboard_background">
                <div className='w-screen h-lvh flex'>
                    <div className="my_admindash_navwrap w-64">
                        <div className="my_admindash_nav">
                            <div className="mb-16">
                                <label className="m-2">Admin</label>
                            </div>

                            <div className="">
                                <ul className="my_admindash_navlist">
                                    <li className={`my_admindash_navitem`} ><Link to={{pathname: "/admin/dashboard"}}><span className="my_admindash_navicon dashboard_icon"></span><span className="my_admindash_navcontent">Home</span></Link></li>
                                    <li className={`my_admindash_navitem`} ><Link to={{pathname: "/admin/addEmp"}} ><span className="my_admindash_navicon addemp_icon"></span><span className="my_admindash_navcontent">Add Employee</span></Link></li>
                                    <li className={`my_admindash_navitem`} ><Link to={{pathname: "/admin/comingsoon"}}><span className="my_admindash_navicon comingsoon_icon"></span><span className="my_admindash_navcontent">Coming Soon . . </span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="my_admindash_contentwrap grow">
                        <div className='my_admindash_notification mb-4 '>
                            <ul className='flex justify-end gap-4'>
                                <li><a href='/#'>Messages</a></li>
                                <li><a href='/#'>Notifications</a></li>
                                <li><a href='/#'>Logout</a></li>
                            </ul>
                        </div>
                        <form autoComplete="off" onSubmit={empAdd}>
            <div className="my_admindash_addemp">
                <div className="mb-6">
                    <p className="main_heading">Add Employee</p>
                </div>
              
                <div className="flex gap-3 items-center mb-4 ">
                <div className="uploadImg" >
                        
                        <input type="file" onChange={(e)=>{empImgUpload(e)}}/>
                        <img src={empImgUrl}/>

                    </div>
                    <div className="flex flex-wrap gap-4 grow items-center">

                        <input type="text" placeholder="Name" autoComplete="off" onChange={(e)=>{setEmpData({...empData,name:e.target.value})}} />
                        <input type="text" placeholder="Phone No." autoComplete="off" onChange={(e)=>{setEmpData({...empData,phno:e.target.value})}}/>
                        <input type="text" placeholder="Email" autoComplete="off" onChange={(e)=>{setEmpData({...empData,email:e.target.value})}}/>
                        <input type="text" placeholder="Joining Date" autoComplete="off" onChange={(e)=>{setEmpData({...empData,jdate:e.target.value})}}/>

                    </div>
                </div>

                <div className="flex gap-3 mb-4">
                
                    <textarea placeholder="Address" rows="3" onChange={(e)=>{setEmpData({...empData,jdate:e.target.value})}}></textarea>
                    
                    
                </div>
                <div className="flex gap-3 mb-4 w-3/5">
                
                    <button type="submit">Register</button>
                    
                    
                </div>

                
                
            </div>
            </form>
                        {/* {activeMenu === "home" && <AdminHome/>}
                        {activeMenu === "addEmp" && <AdminAddEmp/>}
                        {activeMenu === "comingSoon" && <AdminComingSoon/>}
                        {activeMenu === "comingSoon1" && <AdminComingSoon/>}
                        {activeMenu === "comingSoon2" && <AdminComingSoon/>}
                        {activeMenu === "comingSoon3" && <AdminComingSoon/>} */}
                        
                    </div>
                </div>
            </div>

        </>
    )
}

export default AdminAddEmp;