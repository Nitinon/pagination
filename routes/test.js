var express=require("express");
var router=express.Router();
router.get("/",function(req,res){
    res.render("main/test")
})
router.post("/eiei",function(req,res){
    console.log(req.body)
})


module.exports=router;