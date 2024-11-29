const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");

        mongoose.connect("mongodb://localhost:27017/empMgmtD")
            .then((response)=>{console.log("Connected to empMgmtD")})
            .catch((error)=>{console.log(error,"error NOT connected to empMgmtD")});

const loginSchema = mongoose.Schema({
            username: String,
            password: String
        });

const loginModel = mongoose.model("login",loginSchema);


app.use(cors());
app.use(express.json());

app.get("/api/login",(req,res)=>{
    res.json({message:"Login Successfull"})
})

app.post("/api/login",async (req,res)=>{
    
    // console.log(req.body,"<--req.body");
    const loggedUserData = await loginModel.findOne({ username:req.body.username });
    // console.log(loggedUserData,"loggedUserData");

    if(loggedUserData){
        res.json({message:"login success",redirectUrl:"/admin/dashboard"});
    }else{
        res.json({message:"Invalid username or password"});
    }
});

const empSchema = mongoose.Schema({
    name: String,
    phno: String,
    email: String,
    jdate: String
});

const empModel = mongoose.model("emp",empSchema);
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post("/api/empadd",async (req,res)=>{
    console.log(req.body,"req.body");
    try{
        const empData = new empModel(
            {
                name : req.body.name,
                phno : req.body.phno,
                email : req.body.email,
                jdate : req.body.jdate
            }
        );
    
            await empData.save();
             res.json({message:"data saved to db"});

    }catch(error){
        
        res.status(500).json({ message: "Data NOT saved to DB", error });
    
    }
    // res.json({message:"hahahahahah"});
    
});

app.listen("3001",()=>{
    console.log("Server is running on port 3001");
});