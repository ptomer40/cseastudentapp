const mongoose=require('mongoose');
async function dbconn(){
    try{
    await mongoose.connect("mongodb://localhost:27017/studentappcsea");
    console.log("Database connected successfully!!!")
    }catch(err){
        console.log(err.message)
    }
}
module.exports=dbconn;