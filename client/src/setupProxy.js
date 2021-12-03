import { createProxyMiddleware } from "http-proxy-middleware";

const proxy = (app) => {
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
export default proxy;
// const { createProxyMiddleware } = require('http-proxy-middleware');
// module.exports = function (app) {

//     app.use(
//         ["/api", "/auth/google"],
//         createProxyMiddleware({
//             target: "http://localhost:5000",
//         })
//     );
// };
