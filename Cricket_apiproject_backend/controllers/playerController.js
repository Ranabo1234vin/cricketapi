const player=require("../models/playersmodel");
const getplayers= async(req,res)=>{
    try{
        const data= await player.find({})
        res.status(200).send({
            success:true,
            message:"Data of players",
            data
        })

    }catch(error)
    {
    res.status(200).send({
        success:false,
        message:"internal server error",
        error

    })
    }
         
}
const addplayers=async(req,res)=>{
    console.log(req.body);
    try{
        const {first_name,last_name,email,phone_number,role,avalible,}=req.body

        if(!first_name|| !last_name || !email || !phone_number || !role )
        {
          return res.status(404).send({
            success:false,
            message:"each feild is mondaritary"
          })
        }
        await player({
            first_name,
            last_name,
            email,
            phone_number,
            role,
            avalible
        }).save();
        res.status(200).send({
            message:"status as sucessfull"
        })
    }catch(error)
    {
    console.log(error);
    res.status(404).send({
        success:false,
        message:"internal server error",
        error
    
    })
    }
  

}
const updateplayers=async(req,res)=>{
    try{
        const player_id=req.params.id
        await player.updateOne({_id:player_id},{$set:req.body})
        res.status(200).send({
            success:true,
            message:"player updated successfully"
        })
    }catch(error)
    {
        console.log(error)
    res.status(404).send({
        success:false,
        message:"internal server error",
        error
    
    })
    }
}
const deleteplayers=async(req,res)=>{
   console.log(req.params.id);
   console.log("this is delete");
  await player.findOneAndDelete(req.params.id);
  console.log("deleted sucessfully");
    
}



module.exports={getplayers,addplayers,updateplayers,deleteplayers};