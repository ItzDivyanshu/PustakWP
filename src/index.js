
const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");

 console.log (path.join(__dirname,"../src"));

const staticPath = path.join(__dirname,"../src/config");

 
const partialsPath = path.join(__dirname,"../src/partials");

 app.set("view engine","hbs");

hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));

app.get("/",(req,res)=> {
    res.render("index1")   
});

app.get("/p2",(req,res)=> {
    res.render("p2")   
});

app.get("/aboutus",(req,res)=> {
    res.render("aboutus")   
});

app.get("/address",(req,res)=> {
    res.render("address")   
});

app.get("/payment",(req,res)=> {
    res.render("payment")   
});

app.get("/purchase",(req,res)=> {
    res.render("purchase")   
});

app.get("/signup",(req,res)=> {
    res.render("signup")   
});

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../public", "error.html"));

});

const db = require('./config/mongoose');
const User = require('./models/user');


// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static('Assets'));


app.post("/signup", async(req, res) => {
    try{
        
        const newuser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            confirmpassword: req.body.confirmpassword,
        })

        const created = await newuser.save();
        res.status(201).render("signup")
    } catch(error){
        res.status(400).send(error);
    }
})


app.listen(8000,()=>{
    console.log("listing to port 8000")
    });


