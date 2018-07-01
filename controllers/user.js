
// 导入md5 模块
const md5 = require("md5");
const userModel = require("../models/user");
exports.showSignin=(req,res)=>{
    res.render('signin.html');
};
// 2 处理登录逻辑
exports.handleSignin=(req,res)=>{
   
};
exports.showSignup=(req,res)=>{
    res.render("signup.html");
};
// 4 处理注册逻辑

exports.handleSignup = (req,res)=>{
    // 添加数据前要验证数据
    // 验证邮箱是否重复
    userModel.getByEmail(req.body.email,(err,user)=>{
        if(err) {
            console.log(err);
            return res.send("服务器内部错误");

        }
        // 验证昵称
        userModel.getByNickname(req.body.nickname,(err,user)=>{
            if(err) {
                return res.send("服务器内部错误");
            }
            req.body.createdAt = new Date();
            req.body.password = md5(req.body.password);
            // 插入用户
            userModel.createUser(req.body,(err,isOk)=>{
                if(isOk) {
                    res.redirect("/signin");
                } else {
                    res.render("signup.html",{
                        msg: "注册失败"
                    })
                }
            })
        })
    });

};
exports.handleSignout=(req,res)=>{
    res.send();
};