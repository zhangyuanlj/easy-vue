const createPages = require('./build/createPages');
const chainWebpack = require('./build/chainWebpack');
module.exports = {
    productionSourceMap: false,
    //多页面配置
    pages: createPages(),
    chainWebpack: chainWebpack
};