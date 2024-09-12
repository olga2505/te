const updateViewportHeight = (propertyName) => {
  document.documentElement.style.setProperty(
      propertyName,
      `${window.innerHeight * 0.01}px`
  );
};

const mobileVhFix = () => {
  updateViewportHeight('--initial-vh');
  updateViewportHeight('--vh');

  window.addEventListener('resize', () => updateViewportHeight('--vh'));
};

export {mobileVhFix};
