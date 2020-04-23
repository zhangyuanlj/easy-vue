const path = require('path');
const resolve = function (dir) {
    return path.join(__dirname, dir)
}
module.exports = (config) => {
    const srcDir = "../src";
    //配置路径别名
    config.resolve.alias
        .set('@', resolve(srcDir))
        .set('easy-vue', resolve(srcDir))
        .set('animations', resolve(`${srcDir}/animations`))
        .set('components', resolve(`${srcDir}/components`))
        .set('core', resolve(`${srcDir}/core`))
        .set('libs', resolve(`${srcDir}/libs`))
        .set('utils', resolve(`${srcDir}/utils`))
        .set('mixins', resolve(`${srcDir}/mixins`));
};