export default [{
    path: '/',
    meta: {
        title: document.title
    },
    component: (resolve) => require(['components/basic/console-desk'], resolve),
    children: []
}];