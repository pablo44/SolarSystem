// const proxy = require('http-proxy-middleware');
// const { createProxyMiddleware } = require('http-proxy-middleware');
 
// module.exports = function(app) {
//   app.use(proxy('/json/', { target: 'HTTP://localhost:3001/' 
//     }));
// };
const { createProxyMiddleware } = require('http-proxy-middleware');
//you have to define proxymiddleweare it doesnt enough only app.use, write createProxyMiddleware
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true
    })
  );
};