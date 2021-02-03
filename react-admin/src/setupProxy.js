const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
      createProxyMiddleware(
        '/apis',
        {
          target: 'http://127.0.0.1:7001',
          changeOrigin: true,
          pathRewrite: {
            '/apis': ''
          }
        }
      )
    );
  };
