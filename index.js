 const express = require("express")
 const mongoose= require("mongoose")

 const app=express();
//  connect mongoose
mongoose.connect('mongodb://127.0.0.1:27017/backend').then(()=>{
  console.log("connected to db")
})
.catch((e)=>{
  console.log(e)
})

const messageSchema=new mongoose.Schema({
  name:String,
  email:String
})
const Message=mongoose.model("message",messageSchema)


 app.set("view engine","ejs")
 app.use(express.json())
//  to get data from form 

app.use(express.urlencoded({extended:true}));
// var users=[ ]
 app.get("/",(req,res)=>{
   res.render("index")
 })
 app.get("/add",async(req,res)=>{
   await Message.create({name:"Chandan",email:"sample@gmail.com"})
   .then(()=>{
    res.send("Send message to db")
   })
 })
 app.get("/sucess",(req,res)=>{
   res.render("sucess")
 })
 app.post("/contact",(req,res)=>{
  const {name,email}=req.body;
   console.log(req.body)
  //  const messageData=({name:req.body.name,email:req.body.email})
   res.redirect("sucess")
   
   Message.create(req.body)
   res.redirect("/scucess")
 })

 app.get("/user",(req,res)=>{
   res.json({users})
 })

 app.listen(5000,()=>{
    console.log("Server start")
 })