const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/apis',
        createProxyMiddleware({
            target: 'http://localhost:3000',
            changeOrigin: true,  // 设置跨域请求
            pathRewrite: {
                '^/apis': ''
            }
        })
    );
};