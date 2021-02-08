// 在它上面我们可以挂载一些全局的方法和对象

module.exports = {
    // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
    // app 对象指的是 Koa 的全局应用对象，全局只有一个，在应用启动时被创建
    // 调用application中的方法
    appFun() {
        console.log('在application.js中定义的function')
        //Controller，Middleware，Helper，Service 中都可以通过 this.app 访问到 Application 对象，
        // 例如 this.app.config 访问配置对象。
    }
}