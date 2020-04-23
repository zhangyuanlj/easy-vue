import config from "./config";
export default (VueRouter, ViewUI, beforeEnter, afterEnter, routerConfig = config) => {
    const router = new VueRouter({
        routes: routerConfig
    });
    router.beforeEach((to, from, next) => {
        document.title = to.meta.title;
        ViewUI.LoadingBar.start();
        beforeEnter();
        next();
    });
    router.afterEach(() => {
        window.scrollTo(0, 0);
        ViewUI.LoadingBar.finish();
        afterEnter();
    });
    return router;
};