/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, button, drawer);
    });

    button.addEventListener('keypress', (event) => {
      event.key === 'enter'
        ? this._toggleDrawer(event, button, drawer)
        : '';
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, button, drawer);
    });
  },

  _toggleDrawer(event, button, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('mobile-nav');
    button.classList.toggle('is-active');
  },

  _closeDrawer(event, button, drawer) {
    event.stopPropagation();
    drawer.classList.remove('mobile-nav');
    button.classList.remove('is-active');
  },
};

export default DrawerInitiator;
