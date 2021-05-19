import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/menu.css';
import '../public/images/logo/fires.png';
import './main';
import './views/index';
import 'css-skeletons';
import '../styles/font/font-awesome-4.7.0/css/font-awesome.min.css';
import swRegister from './utils/sw-register.js';

import App from './views/app';

const app = new App({
    button: document.querySelector('.menu-toggle'),
    drawer: document.querySelector('.nav'),
    content: document.querySelector('.app'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
});
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
swRegister();
