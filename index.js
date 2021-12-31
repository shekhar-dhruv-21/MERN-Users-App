const express = require("express");

const { json } = require("express/lib/response");
const userModel = require("./module/user");
const app = express();
app.use(express.json());
const port = 5000;


//mongoose 
const mongoose = require("mongoose");
mongoose
    .connect("mongodb://localhost:27017/dcs")
    .then(() => console.log("mondoDB Connected"));
//-----

app.get("/api/",(req,res) => {
    res.json("Hello from Api");
})
app.post("/api/insert-user", (req,res) => {
    const newUser = req.body;
    userModel.create(newUser);
    return res.send({message:"Registration Successfully"});
})

//Search User
app.get("/api/search-user/:uname", async (req,res) => {
    const un = req.params.uname;
    console.log(un);
    const getuser = await userModel.find({username : un})
    return res.send(getuser);
})
//Fetch All User
app.get("/api/list",async (req,res) => {
    const alluser = await userModel.find();
    return res.send(alluser);
})
//Delete User
app.delete("/api/delete-user/:id", async (req,res) => {
    const id = req.params.id;
    const deleteuser = await userModel.findOneAndDelete(
        {_id:id}
    )
})
//update 
app.put("/api/update/:uname",async (req,res) => {
    const un = req.params.uname;
    const pass = req.body.passoword;
    const fn = req.body.firstname;
    const ln = req.body.lastname;
    const ag = req.body.age;
    const updatedUser = await userModel.updateMany(
        {username:un},
        {$set : {username : un,password : pass, firstname : fn, lastname: ln,age:ag}}
    )
    return res.json({data: "Updated successfully"});
})
//Login Code
app.post("/api/Login",async (req,res) => {
    const uname = req.body.username;
    const pass = req.body.password;
    console.log(uname);
    console.log(pass);
    let chlogin;
    const checkuser = await userModel.findOne({username:uname,password:pass});
    if(checkuser){
        console.log("Login successfully");
        chlogin = "Login User";
        return res.json({data: checkuser})
    }else{
        console.log("Login Faild");
        chlogin = "Login Faild";
    }
})
app.listen(port, () => console.log("App is running on port 5000"));