import easyVueCofig from "./easyVueCofig";
export default (appConfig) => {
    return Object.assign({}, easyVueCofig, appConfig);
};