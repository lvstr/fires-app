import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/menu.css';
import './views/index';
import 'css-skeletons';
import '../styles/fontawesome/css/font-awesome.min.css';
import swRegister from './utils/sw-register';

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
window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};
swRegister();
