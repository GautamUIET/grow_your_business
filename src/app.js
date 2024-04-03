const express = require("express");
const path = require("path");
require("./db/conn");
const User = require("./models/register");
const hbs = require("hbs");
const app = express();
const PORT = 8000;
//path set karra
const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");

app.use(express.urlencoded({extended:false}));
app.use(express.static(staticPath));
app.set("view engine","hbs");
app.set("views",templatePath);


app.get("/",(req,res)=>{
   res.render("index");
})

app.get("/index",async(req,res)=>{
    try{
        // res.send(req.body);
        const userData = new User(req.body);
        await userData .save();
        res.status(201).render("/")
    }
    catch(error){
        res.status(500).send(error);
    }
 })
//  app.post()
app.listen(PORT,()=>{
    console.log(`connection successful ${PORT}`);
})