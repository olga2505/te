export const initInputRange = () => {
  const blocks = document.querySelectorAll('[data-input-range="wrapper"]');

  if (!blocks.length) {
    return;
  }

  blocks.forEach((block) => {
    const input = block.querySelector('input[type="range"]');
    const blockValue = block.querySelector('[data-input-range="value"]');
    blockValue.innerHTML = input.value;

    input.addEventListener('change', function () {
      blockValue.innerHTML = input.value;
    });
  });
};
