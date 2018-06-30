const express = require('express');
const app = express();

// 导入路由模块
const router = require("./routers/router.js");
// 导入模板引擎模块
const expressArtTemplate = require("express-art-template");

const PORT = 3000;
// 监听端口
app.listen(PORT, () => {
    console.log("服务器发射成功");
})



// 处理静态资源

app.use("/public",express.static("./public"));
app.use("/node_modules",express.static("./node_modules"));

// 配置模板引擎

app.engine("html",expressArtTemplate);

// 挂载路由 
app.use(router);

