import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------
const btn = document.querySelector('.page-header__nav-toggle');
const click = document.querySelector('.page-header__nav-toggle__span');
const nav = document.querySelector('.header-nav__list');

document.querySelector('.page-header').classList.remove('no-js');
document.querySelector('.page-header__nav-toggle').classList.remove('no-js');
document.querySelector('.header-nav__list').classList.remove('no-js');
document.querySelector('.banner__logo').classList.remove('no-js');

window.addEventListener('DOMContentLoaded', () => {
  btn.onclick = () => {
    click.classList.toggle('is-active');
    nav.classList.toggle('is-open');
    document.querySelector('.banner__logo').classList.toggle('open-js');
    document.querySelector('.banner__title').classList.toggle('open-js');
    document.querySelector('.banner__text').classList.toggle('open-js');
  };

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✔️

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
