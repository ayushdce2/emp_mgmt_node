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
        </>
    )
}

export default AdminAddEmp;