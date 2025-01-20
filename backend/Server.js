const express = require("express")
const app = express()
const userModel = require('./model/userschme')
const conectDb = require('./config/db')

var cors = require('cors')
app.use(cors())

conectDb();
app.use(express.json())


app.get('/',(req,res)=>{
    res.send("Hello")
})

app.post('/register',async (req,res)=>{
    try{
        const {name,email,message} = req.body;
        const userExist = await userModel.findOne({email});
        if(userExist){
            return res.send({message: "User already exist"})
        }
        const newUser = new userModel({name,email,message});
        console.log(newUser);
         await newUser.save()
        res.send({message: "User created successfully"})
    } catch(err){
        console.log(err)
    }
});

app.listen(3000,()=>{
    console.log("Server is running...");
});