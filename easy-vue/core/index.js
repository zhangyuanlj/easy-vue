import Vue from "vue";
import VueRouter from "vue-router";
import ViewUI from "view-design/dist/iview.min.js";
import setupConfig from "./config";
import setupRouter from "./router";
import RootApp from "components/RootApp.vue";
import "view-design/dist/styles/iview.css";
/**
 * EasyVue框架入口 
 * author:GeraltZhang https://github.com/zhangyuanlj
 *
 * @class EasyVue
 */
class EasyVue {
    static version = "1.0.0";
    /**
     * Creates an instance of EasyVue.
     * @param {object} options
     * @options {string} container renderRootElement 首次渲染挂载的dom元素
     * @options {object} RootApp 根组件
     * @options {object} appConfig 应用配置
     * @options {function} beforeEnter:void() 进入路由之前的触发的钩子函数
     * @options {function} afterEnter:void() 进入路由之后的触发的钩子函数
     * @memberof EasyVue
     */
    constructor(options) {
        this.defaults = {
            container: "#app",
            RootApp: RootApp,
            beforeEnter: () => {},
            afterEnter: () => {}
        };
        this.defaults = Object.assign({}, this.defaults, options);
    }
    //安装系统配置
    setupConfig() {
        const {
            appConfig
        } = this.defaults;
        Vue.prototype.$config = setupConfig(appConfig);
    }
    //安装路由
    setupRouter(beforeEnter, afterEnter) {
        this.router = setupRouter(VueRouter, ViewUI, beforeEnter, afterEnter);
        Vue.use(VueRouter);
    }
    //安装view-design
    setupViewUI() {
        Vue.use(ViewUI);
    }
    //启动应用
    startUp() {
        const {
            RootApp,
            container,
            beforeEnter,
            afterEnter
        } = this.defaults;
        this.setupConfig();
        this.setupRouter(beforeEnter, afterEnter);
        return new Vue({
            router: this.router,
            render: h => h(RootApp),
        }).$mount(container);
    }
}
export default EasyVue;