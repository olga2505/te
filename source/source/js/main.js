import {mobileVhFix} from './utils/mobile-vh-fix.js';
import {Form} from './modules/form-validate/form';
import {CustomSelect} from './modules/select/custom-select';
import {uploadAllFile, uploadFile, uploadImageDrop} from './modules/input-file/init-upload';
import {scrollAnchors} from './modules/scroll-anchors.js';
import {initInputRange} from './modules/input-range/init-input-range.js';
import {Burger} from './modules/header/burger.js';
import {initFadeUp} from './modules/animations/init-fade-up.js';
import {initFade} from './modules/animations/init-fade.js';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  mobileVhFix();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    initFadeUp();
    initFade();
    const burger = new Burger();
    burger.init();

    uploadFile();
    uploadAllFile();
    uploadImageDrop();
    const select = new CustomSelect();
    select.init();

    const form = new Form();
    window.form = form;
    form.init();

    scrollAnchors();
    initInputRange();
  });
});

// ---------------------------------
