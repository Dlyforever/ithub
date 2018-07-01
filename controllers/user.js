// 1 展示登录页面

// 3 展示注册页面

// 5 退出

// 导入数据库模块
const db = require("../models/db_helper");
// 导入md5 模块
const md5 = require("md5");

exports.showSignin=(req,res)=>{
    res.render('signin.html');
};
// 2 处理登录逻辑
exports.handleSignin=(req,res)=>{
    // 验证用户输入
    // TODO
    // 验证邮箱和密码是否正确
    db.query(
        "select * from `users` where  `email` => ?",
        req.body.email,
        (err,results)=> {
            if(err) {
                return res.send("服务端错误");
            }
            // 判断邮箱是否存在
            if(results.length <= 0 ){
            // { code: 401,msg: 不储在}
                res.send({
                    code: 401,
                    msg: "邮箱不存在"
                });

            }
            // 判断密码是否正确
            const password = md5(req.body.password);
            if (password !== results[0].password) {
                return res.json({
                    code: 402,
                    msg: "密码错误"
                });
            }
            // 如果使用ajax 请求，没办法使用res.redirect()
            // 成功
            res.json({
                code: 200,
                msg:"登陆成功"
            });

        }
    )

};
exports.showSignup=(req,res)=>{
    res.render("signup.html");
};
// 4 处理注册逻辑

exports.handleSignp=(req,res)=>{
    // 添加数据前要验证数据
    // 验证邮箱是否重复
    db.query(
        "select * from `users` where `email` = ? ",
        req.body.email,
        (err,results)=>{
            if (err) {
                return res.send("服务器内部错误");
            } 
            if (results.length > 0 ) {
                // 数据表中已存在数据
                res.render("signup.html",{
                    msg:"邮箱已存在"
                })
                return;
            }
            // 验证昵称是否重复
            db.query(
                "select * from `users` where `nickname` = ? ",
                req.body.nickname,
                (err,results)=> {
                    if(err) {
                        return res.send("服务器内部错误");
                    }
                    if (results.length > 0) {
                        res.render("signup.html",{
                            msg: "昵称已存在"
                        });
                        return;
                    }
                    // 插入数据
                    req.body.createdAt = new Date();
                    req.body.password = md5(req.body.password);
                    // 插入数据库
                    db.query(
                        "insert into `users` set ? ",
                        // 要插入到数据表的数据
                        req.body,  
                        (err,results) => {
                            if(err) {
                                console.log(err);
                                return res.send("服务器内部错误");
                            } 
                            if (results.affectedRows === 1 ) {
                                // 注册成功
                                res.redirect("/signin");
                            } else {
                                res.render("signup.html",{
                                    msg: "注册失败"
                                });
                            }
                           
                
                        }
                    );

                }
            ) 
        }
    )

};
exports.handleSignout=(req,res)=>{
    res.send();
};