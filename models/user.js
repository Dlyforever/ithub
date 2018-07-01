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
            if(results.affectedRows > 0) {
                callback(null,true);
            } else {
                callback(null,false);
            }
        }
      
    );
};

// 根据email查询用户
exports.getByEmail = (email,callback)=> {
    db.query(
        "select * from `users` where `email`= ?",
        email,
        (err,results)=>{
            if(err) {
                return callback(err);
            }
            if (results.length > 0) {
                // eamil 要求是唯一的，不能重复
                // 所以根据email 只能查到一条信息
                callback(null,results[0]);
            } else {
                callback(null,null);
            }
           
        }
    );
};

// 根据nickname 查询用户

exports.getByNickname = (nickname,callback)=>{
    db.query(
        "select * from `users` where `nickname`=? ",
        nickname,
        (err,results)=>{
            if(err){
                return callback(err);
            }
            // nickname 要求是唯一的，不能重复
            // 所以根据nickname 只能查到一条信息
           if (results.length > 0) {
               callback(null,results[0]);
           } else {
               callback(null,null);
           }
        }
    );
};