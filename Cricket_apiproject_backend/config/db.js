const mongoose=require("mongoose");
const connectdb=async()=>{
    try {
    await mongoose.connect("mongodb+srv://rvinayreddy1234:tCNKlBNEo7Plt6K4@test-pro-db.6leoq.mongodb.net/?retryWrites=true&w=majority&appName=test-pro-db")
      console.log("mongodb connected") 
   }catch(err)
    {
        console.log(err)
    }
}
module.exports=connectdb;