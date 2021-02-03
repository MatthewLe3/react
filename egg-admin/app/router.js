'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller,jwt } = app;
  router.get('/', controller.home.index);

  router.get('/test', controller.test.index);


  // 第一个参数是访问的地址，第二个参数告诉我们匹配成功后分发到相应的controller上，

  // 登陆接口
  router.get('/api/egg/login', controller.login.login);
  // 查询用户
  // router.get('/keeping/api/v1/getUser', jwt, controller.user.selectUser);

};
