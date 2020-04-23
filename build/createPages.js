const glob = require("glob");
module.exports = () => {
    const appTitle = "easy-vue";
    const pagesDir = "src/pages";
    const pagesList = glob.sync(`${pagesDir}/*`);
    const pages = {};
    pagesList.forEach((page, i) => {
        const fileName = page.substring(page.lastIndexOf('/') + 1, page.length);
        pages[fileName] = {
            entry: page,
            template: `public/${fileName}.html`,
            filename: `${fileName}.html`,
            title: appTitle,
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        };
    });
    return pages;
};