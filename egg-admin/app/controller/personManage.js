'use strict';
module.exports = app => {
  class PersonManageController extends app.Controller {
    async personManage() {
		const { ctx, app } = this;
		const query = ctx.query;
        // 调用service服务
		const data = await ctx.service.personManage.personManage(query);
		// 返回值
		ctx.body = {
			status: 'success',
			code: 200,
			data
		};
	}
  }
  return PersonManageController;
};
