'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
	async module() {
		const { ctx, app } = this;
		const query = ctx.query;
		// 调用service服务
		const data = await ctx.service.home.module(query);
		// 返回值
		ctx.body = {
			status: 'success',
			code: 200,
			data
		};
	}

	async application() {
		const { ctx, app } = this;
		const query = ctx.query;
		// 调用service服务
		const data = await ctx.service.home.application(query);
		// 返回值
		ctx.body = {
			status: 'success',
			code: 200,
			data
		};
	}

	async chart() {
		const { ctx, app } = this;
		const query = ctx.query;
		// 调用service服务
		const data = await ctx.service.home.chart(query);
		// 返回值
		ctx.body = {
			status: 'success',
			code: 200,
			data
		};
	}

	async table() {
		const { ctx, app } = this;
		const query = ctx.query;
		// 调用service服务
		const data = await ctx.service.home.table(query);
		// 返回值
		ctx.body = {
			status: 'success',
			code: 200,
			data
		};
	}
}

module.exports = HomeController;
