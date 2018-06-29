const express = require("express");

// 设计路由 要引入controllers 里的处理函数

const indexCtrl = require("../controllers/index.js");
const userCtrl = require("../controllers/user.js");
const topicCtrl = require("../controllers/topic.js");
const categoryCtrl = require("../controllers/category.js");
//  创建路由对象
const router = express.Router();
//  导出路由对象
module.exports = router;

// 1 index.js 不需要登录展示的功能

router.get("/",indexCtrl.showIndex);

// 2 use.js 登录 注册 退出

router
    .get("/signin",userCtrl.showSignin)
    .post("/signin",userCtrl.handleSignin)
    .get("/signUp",userCtrl.showSignup)
    .post("/signup",userCtrl.handleSignp)
    .get("/signout",userCtrl.handleSignout)
    
