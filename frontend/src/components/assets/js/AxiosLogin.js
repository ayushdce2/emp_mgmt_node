
import axios from "axios";

export const AxiosLogin = async (signInData)=>{
    await axios.post('http://localhost:3001/api/login',signInData)
    .then((response)=>{
        // console.log('login request sent and redirected to ->',response.data.redirectUrl);
        if(response.data.redirectUrl==="/admin/dashboard"){
           return window.location.href = response.data.redirectUrl;
        }else{
            return console.log(response.data.message)
        }
        
    })
    .catch((error)=>{
        console.log(error,"<----error")
    })
}