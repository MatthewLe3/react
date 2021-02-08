// 访问方式 ctx.response
module.exports = {
    set foo(value) {
        this.set('x-response-foo', value);
    },
};