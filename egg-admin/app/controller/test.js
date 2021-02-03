'use strict';
module.exports = app => {
  class TestController extends app.Controller {
    async index(){
         this.ctx.body = 'test'
    }
  }
  return TestController;
};

