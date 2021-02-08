'use strict';
module.exports = app => {
  class TestController extends app.Controller {
    async index() {
      // 调用application中的方法
      this.ctx.app.appFun()
      this.ctx.ctxFun()
      this.ctx.helper.foo()


      this.ctx.body = 'test'
    }
  }
  return TestController;
};

