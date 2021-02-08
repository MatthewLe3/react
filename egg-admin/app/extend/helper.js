// Helper 函数用来提供一些实用的 utility 函数。
// 访问方式 ctx.helper

// 假设在 app/router.js 中定义了 home router
// app.get('home', '/', 'home.index');

// 使用 helper 计算指定 url path
// ctx.helper.pathFor('home', { by: 'recent', limit: 20 })
// => /?by=recent&limit=20

module.exports = {
    foo(param) {
        console.log('helper中的function')
      // this 是 helper 对象，在其中可以调用其他 helper 方法
      // this.ctx => context 对象
      // this.app => application 对象
    },
  };