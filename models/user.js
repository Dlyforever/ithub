const db = require("./db_helper");

// 增加一个用户
exports.createUser = (user,callback)=>{
    db.query(
        "insert into `users` set ? ",
        user,
        (err,results)=>{
            if (err) {
                return callback(err);
            }
            // 返回查询到的数据
             callback(null,results);
        }
      
    );
};

// 根据email查询用户
exports.getByEmail = (email,callback)=> {
    db.query(
        "select * from `user` where `email`= ?",
        email,
        (err,results)=>{
            if(err)=> {
                return callback(err);
            }
            callback(null,results);
        }
    );
};

// 根据nickname 查询用户

exports.getByNickname = (nickname,callback)=>{
    db.query(
        "select * from `users` where `nickname`=? ",
        nickname,
        (err,callback)=>{
            if(err){
                return callback(err);
            }
            callback(null,results);
        }
    );
};