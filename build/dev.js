const webpack = require("webpack")
const middleware = require('webpack-dev-middleware');
const devConfig = require("./webpack.dev.conf.js")
const express = require('express');
const app = express();

const compiler = webpack(devConfig)
app.use(require('connect-history-api-fallback')({
  index: '/index.html'
}));
app.use(middleware(compiler, {
  publicPath: devConfig.output.publicPath
}))
app.use(require("webpack-hot-middleware")(compiler))

app.listen(8080, () => { console.log("Example app listening on port 8080!") })