const mongoose=require('mongoose');
async function dbconn(){
    try{
        //mongodb+srv://tomer1580:<db_password>@cluster0.8thnxca.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    //await mongoose.connect("mongodb://localhost:27017/studentappcsea");
    await mongoose.connect("mongodb+srv://tomer1580:admin@cluster0.8thnxca.mongodb.net/studentappcsea?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Database connected successfully!!!")
    }catch(err){
        console.log(err.message)
    }
}
module.exports=dbconn;