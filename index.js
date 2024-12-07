const express =require('express');
const cors=require('cors');
const mongoose = require('mongoose');
const app = express();

//Adding the Middleware

//enabling Cross-Origin Resource Sharing
app.use(cors());

//for parsing the request body as JSON
app.use(express.json())

const PORT = process.env.PORT ||8080

//schema
const schemaData=mongoose.Schema(
    {
        name: String,
        age: Number,
        email: String
    },{timestamp:true}
 )

const usermodel=mongoose.model('User', schemaData);

//for getting the data
//http://localhost:8080/

app.get("/", async(req, res) => {
    const data=await usermodel.find({})
    res.json({ success:true, data:data});
  });

//for adding data
app.post("/create",async(req, res) => {
    console.log(req.body)
    const newUser=new usermodel(req.body)
    await newUser.save()
    res.send({success:true,message:"Success data added successfully",data:newUser})
})

//for updating the user
app.put("/update/:id",async(req, res,) => {
    console.log(req.body)
    const {id,...rest} = req.body
    console.log(rest)
    const updatedUser=await usermodel.updateOne({id:id},rest)
    res.send({success:true,message:"Success data update",data:updatedUser})
})

//for deleting the user

app.delete("/delete/:id",async(req, res,) => {
    const id = req.params.id
    console.log(id)
    const deletedUser=await usermodel.deleteOne({_id:id})
    res.send({success:true,message:"Success data delete",data:deletedUser})
})

//database connection

mongoose.connect('mongodb://localhost:27017/mydatabase')
.then(()=>{
    console.log('connected to DB')
    app.listen(PORT,() => console.log('Server is Running'))
})
.catch(err=>console.log(err));



