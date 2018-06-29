const express = require('express');
const app = express();

// 导入路由模块
const router = require("./routers/router.js");



// 挂载路由 
app.use(router);

const PORT = 3000;

// 监听端口
app.listen(PORT,()=>{
    console.log("服务器发射成功");
})