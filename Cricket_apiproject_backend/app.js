const express=require("express");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const bodyparser=require("body-parser");
app.use(bodyparser.json());
const connectdb=require("./config/db")
const player=require("./models/playersmodel");
const playerRouter=require("./routes/playerRoutes")
const cors=require("cors");
app.use(cors());
app.get("/",async(req,res)=>{
    const data=await new player({
    first_name:"vinayreddy",
    last_name:"ranabothu",
    email:"rvinayreddy1234@gmail.com",
    phone_number:9640706695,
    role:"batsman",
    avalible:true
}).save();
res.send({
    data
})
})
app.use("/api/v1/players",playerRouter);
app.listen(3000,()=>{
    console.log("server is running at port 3000")
})
connectdb();