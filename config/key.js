//what credentials to return
if (process.env.NODE_ENV == 'production') {
  //producion env - > return production keys 
  module.exports = require('./prod')
}
else {
  //dev -> return dev keys
  module.exports = require('./dev');
}