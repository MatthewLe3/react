'use strict';
module.exports = app => {
    class LoginController extends app.Controller {
        async login() {
            const { ctx, app } = this;
            // 拿到用户的输入值
            const query = ctx.query;
            // 调用service服务
            const userList = await ctx.service.login.login(query);
            // 返回值
            ctx.body = {
                status: 'success',
                code: 200,
                data:userList
            };
        }
    }
    return LoginController;
};
