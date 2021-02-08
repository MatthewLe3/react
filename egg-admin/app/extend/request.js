// 访问方式 ctx.request
module.exports = {
    get foo() {
        return this.get('x-request-foo');
    },
};