 const express = require("express")

 const app=express();
 app.set("view engine","ejs")
 app.use(express.json())
//  to get data from form 

app.use(express.urlencoded({extended:true}));
var users=[ ]
 app.get("/",(req,res)=>{
   res.render("index")
 })
 app.get("/sucess",(req,res)=>{
   res.render("sucess")
 })
 app.post("/",(req,res)=>{
   console.log(req.body)
   users.push({username:req.body.name,email:req.body.email})
   res.redirect("sucess")
 })

 app.get("/user",(req,res)=>{
   res.json({users})
 })

 app.listen(5000,()=>{
    console.log("Server start")
 })