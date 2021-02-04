'use strict';
const fs = require('fs');

module.exports = app => {
    class PersonManageService extends app.Service {
        // 主页模块接口获取
        async personManage(data) {
            const userData = await fs.readFileSync("./app/data/personManage.json");

            let userList = JSON.parse(userData.toString())
            return userList
        }
    }
    return PersonManageService;
};
