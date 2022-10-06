function ScrollAnimate() {
  const scrollanimate = () => {
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => {
      const windowHeight = window.innerHeight;
      const eltop = el.getBoundingClientRect().top;
      const elvisible = 150;
      if (eltop < windowHeight - elvisible) {
        el.classList.add('revealactive');
      } else {
        el.classList.remove('revealactive');
      }
    });
  };

  window.addEventListener('scroll', scrollanimate);
}

export default ScrollAnimate;
