const db =require("../models/db_helper");
exports.showIndex = (req,res)=>{
    res.render("index.html");
}