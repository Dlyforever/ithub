const db =require("./db_helper");
exports.showIndex = (req,res)=>{
    res.render("index.html");
}