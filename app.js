const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("hello man");
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log("服务器发射成功");
})