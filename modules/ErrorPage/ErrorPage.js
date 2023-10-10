import { addContainer } from '../addContainer';

export class ErrorPage {
  static instance = null;

  constructor() {
    if (!ErrorPage.instance) {
      ErrorPage.instance = this;
      this.element = document.createElement('section');
      this.element.classList.add('error');
      this.containerElement = addContainer(this.element, 'error__container');
      this.isMounted = false;
    }

    return ErrorPage.instance;
  }

  mount(parent) {
    if (this.isMounted) return;

    const errorWrapper = document.createElement('div');
    errorWrapper.classList.add('error__wrapper');

    errorWrapper.insertAdjacentHTML(
      'beforeend',
      `
      
      <h2 class="error__title">Страница не найдена</h2>

      <span class="error__subtitle">
        <svg
          clip-rule="evenodd"
          fill-rule="evenodd"
          image-rendering="optimizeQuality"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
          viewBox="0 0 2833 2833"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="1417" cy="1417" fill="#780096" r="1417"></circle>
          <path
            d="m2182 2088h-1531c-48 0-88-40-88-88v-84h1707v84c0 48-39 88-88 88zm-1087-329c-11 0-20-9-20-20v-268h-268c-11 0-20-9-20-20v-288c0-11 9-20 20-20s20 9 20 20v268h248v-268c0-11 9-20 20-20s20 9 20 20v288 288c0 11-9 20-20 20zm448 0h-253c-35 0-64-28-64-64v-487c0-36 29-65 64-65h253c36 0 65 29 65 65v487c0 36-29 64-65 64zm-253-576c-13 0-24 11-24 25v487c0 13 11 24 24 24h253c14 0 25-11 25-24v-487c0-14-11-25-25-25zm736 576c-11 0-20-9-20-20v-268h-268c-11 0-20-9-20-20v-288c0-11 9-20 20-20s20 9 20 20v268h248v-268c0-11 9-20 20-20s20 9 20 20v287 1 288c0 11-9 20-20 20zm-353-809c-35 0-63-29-63-64s28-63 63-63 64 28 64 63-29 64-64 64zm0-87c-13 0-23 10-23 23s10 24 23 24 24-11 24-24-11-23-24-23zm201 87c-35 0-64-29-64-64s29-63 64-63 63 28 63 63-28 64-63 64zm0-87c-13 0-24 10-24 23s11 24 24 24 23-11 23-24-10-23-23-23zm200 87c-35 0-63-29-63-64s28-63 63-63 63 28 63 63-28 64-63 64zm0-87c-13 0-23 10-23 23s10 24 23 24 23-11 23-24-10-23-23-23zm-907 43h-451c-11 0-20-9-20-20s9-20 20-20h451c11 0 20 9 20 20s-9 20-20 20zm-604 970v-849h1707v849zm0-889v-154c0-48 40-87 88-87h1531c49 0 88 39 88 87v154z"
            fill="#fff"
          ></path>
        </svg>
      </span>

      <p class="error__description">Через 5 секунд вы будете перенаправлены на главную страницу</p>
      
      <a class="error__link" href="/">На главную</a>
    `,
    );

    this.containerElement.append(errorWrapper);

    parent.append(this.element);
    this.isMounted = true;
  }

  unmount() {
    this.element.remove();
    this.isMounted = false;
  }
}
