'use strict';
module.exports = app => {
  class FileController extends app.Controller {
    async list() {
      const { ctx, app } = this;
      // 拿到用户的输入值
      const query = ctx.query;
      // 调用service服务
      const fileList = await ctx.service.file.list(query);
      // 返回值
      ctx.body = {
        status: 'success',
        code: 200,
        data: fileList
      };
    }

    async add() {
      const { ctx, app } = this;
      // 拿到用户的输入值
      const query = ctx.query;
      // 调用service服务
      const info = await ctx.service.file.add(query);
      // 返回值
      ctx.body = {
        status: 'success',
        code: 200,
        data: info
      };
    }

    async del() {
      const { ctx, app } = this;
      // 拿到用户的输入值
      const query = ctx.query;
      // 调用service服务
      const info = await ctx.service.file.del(query);
      // 返回值
      ctx.body = {
        status: 'success',
        code: 200,
        data: info
      };
    }

  }
  return FileController;
};
