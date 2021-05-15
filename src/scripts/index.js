import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/menu.css';
import '../public/images/logo/fires.png';
import './main';
import './views/index';

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
