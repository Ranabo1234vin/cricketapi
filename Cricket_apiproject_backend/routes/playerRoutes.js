const express=require("express")
const playerRouter=express.Router();
const {getplayers,addplayers,updateplayers,deleteplayers}=require("../controllers/playerController");
playerRouter.get("/get_players",getplayers);
playerRouter.post("/add_players",addplayers);
playerRouter.put("/update_players/:id",updateplayers);
playerRouter.delete("/delete_players/:id",deleteplayers);
module.exports=playerRouter;
