import 'regenerator-runtime';
import '../styles/main.css';
import './views/index';
import 'css-skeletons';
import '../styles/fontawesome/css/font-awesome.min.css';
import swRegister from './utils/sw-register';
import smoothScroll from './utils/smoothScroll';
import App from './views/app';

const app = new App({
  button: document.querySelector('.menu-toggle'),
  drawer: document.querySelector('.nav'),
  content: document.querySelector('.app'),
});

window.addEventListener('hashchange', () => {
  smoothScroll();
  app.renderPage();
});

window.addEventListener('load', () => {
  smoothScroll();
  app.renderPage();
});

swRegister();
