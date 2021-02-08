// Context 指的是 Koa 的请求上下文，这是 请求级别 的对象，每次请求生成一个 Context 实例，通常我们也简写成 ctx
// middleware 中 this 就是 ctx，例如 this.cookies.get('foo')。
// controller 有两种写法，类的写法通过 this.ctx，方法的写法直接通过 ctx 入参。
// helper，service 中的 this 指向 helper，service 对象本身，使用 this.ctx 访问 context 对象，例如 this.ctx.cookies.get('foo')。
module.exports = {
    ctxFun(){
        console.log('context中的function')
    }
}