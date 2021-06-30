/* eslint-disable no-inner-declarations */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */

const smoothScroll = () => {
  const links = document.querySelectorAll('hero-section a, footer-section a');

  for (const link of links) {
    link.addEventListener('click', clickHandler);
  }

  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const { offsetTop } = document.querySelector(href);

    scroll({
      top: offsetTop,
      behavior: 'smooth',
    });
  }
};

export default smoothScroll;
