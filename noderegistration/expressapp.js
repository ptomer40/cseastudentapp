const express=require('express');
const cors=require('cors');
const fs=require('fs').promises;
const student=require('./model/student')
const app=express();
const dbconn=require('./database/dbConn')
const port=3002;
dbconn();  //database connection calling
app.use(express.json()); // middleware
app.use(cors()); //allow cross origing request
app.post('/login',async(req,res)=>{
    try{
        console.log("Hello")
    const {password,email} =req.body;
    console.log(password+email);
    const status=await student.findOne({email:email});
    if(status){
        if(status.password==password){
            res.status(200).json({msg:"Successfully login"});
        }
    }else{
        res.status(200).json({msg:"Email is not registered"}); 
    }

//res.send("<h2>Welcome to express server</h2>");

    }catch(err){
        res.status(500).json({msg:err});
    }
})

app.post('/register',async(req,res)=>{
const sregdata=req.body;
//console.log(sregdata);
await student.create(sregdata);

   // res.send("<h2>Welcome to express server post method</h2>");
   res.status(200).json({msg:"Successfully registered"});
})


app.get("/admin/show",async(req,res)=>{
    try{
    const fdata=await fs.readFile('student.json',{encoding:'utf-8'});
    const studentdata=JSON.parse(fdata);
    res.json({msg:studentdata})
    }catch(err){
        res.status(500).json({msg:err.meesage})
    }

})

app.get("/admin/showByEmail/:email",async(req,res)=>{
    const emailid=req.params.email;
    let arr=[];
    //console.log(emailid);
    //const data=await fs.readFile('student.json',{encoding:'utf-8'})
    
    //arr=JSON.parse(data);
    const status=await student.findOne({email:emailid})
    //const status=arr.find(ele=>ele.email==emailid);
    if(!status){
        res.json({msg:"Email is not registered in database"})
    }
    res.json({msg:status})
})


app.delete("/admin/deleteByEmail/:email",async (req,res)=>{
    try{
    const emailid=req.params.email;
    const data=await fs.readFile('student.json',{encoding:'utf-8'})
    arr=JSON.parse(data);
    const index=arr.findIndex(ele=>ele.email==emailid);
    if(index==-1){
        res.json({msg:"Email id is not registered in database"});
    }
    arr.splice(index,1); //remove only one entry
    await fs.writeFile('student.json',JSON.stringify(arr,null,2));
    res.json({msg:"Data deleted succssfully!!! "})
    }catch(err){
        res.json({msg:err.message});
    }
})

app.patch("/admin/updateByEmail/:email",async (req,res)=>{
const emailid=req.params.email;
const {name,password}=req.body;
console.log(name+password+emailid);
let arr=[];
const data=await fs.readFile('student.json',{encoding:'utf-8'})
    arr=JSON.parse(data);
    const status=arr.find(ele=>ele.email==emailid);
    if(!status){
        res.json({msg:"Email is not registered in database"})
    }
status.name=name;
status.password=password;
await fs.writeFile('student.json',JSON.stringify(arr,null,2));
res.json({msg:"Data updated successfully!!!"})
})

app.listen(port,()=>{
    console.log("Express server is running on::"+port)
})