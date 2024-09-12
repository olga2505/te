
export const scrollAnchors = () => {
  const anchors = document.querySelectorAll('a[href^="#"]:not([href="#"]');

  if (!anchors.length) {
    return;
  }

  anchors.forEach((link) => {
    link.addEventListener('click', function (evt) {
      evt.preventDefault();


      const hrefFull = evt.target.getAttribute('href');

      if (!hrefFull) {
        return;
      }

      let href = hrefFull.substring(1);
      const scrollTarget = document.getElementById(href);

      const topOffset = 80;
      if (!scrollTarget) {
        return;
      }
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });
  });
};
