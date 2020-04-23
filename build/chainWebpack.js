const path = require('path');
const resolve = function (dir) {
    return path.join(__dirname, dir)
}
module.exports = (config) => {
    const srcDir = "../src";
    const easyVueDir = `../easy-vue`;
    //配置路径别名
    config.resolve.alias
        .set('@', resolve(srcDir))
        .set('easy-vue', resolve(easyVueDir))
        .set('animations', resolve(`${easyVueDir}/animations`))
        .set('components', resolve(`${easyVueDir}/components`))
        .set('core', resolve(`${easyVueDir}/core`))
        .set('libs', resolve(`${easyVueDir}/libs`))
        .set('utils', resolve(`${easyVueDir}/utils`))
        .set('mixins', resolve(`${easyVueDir}/mixins`));
};