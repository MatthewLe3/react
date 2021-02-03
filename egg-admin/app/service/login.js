
'use strict';
const fs = require('fs');

module.exports = app => {
    class LoginService extends app.Service {
        // 登陆
        async login(data) {
            const userData = await fs.readFileSync("./app/data/user.json");
            let userList = JSON.parse(userData.toString())
            // 匹配data与userList的数据
            let ifMatch = 'fail'
            userList.map(val=>{
                if(val.name == data.username && val.password == data.password){
                    ifMatch = 'success' 
                }
            })
            return ifMatch
        }
    }
    return LoginService;
};
