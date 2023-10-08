import { addContainer } from '../addContainer';

export class Order {
  static instance = null;

  constructor() {
    if (!Order.instance) {
      Order.instance = this;
      this.element = document.createElement('section');
      this.element.classList.add('order');
      this.containerElement = addContainer(this.element, 'order__container');
      this.isMounted = false;
    }

    return Order.instance;
  }

  mount() {
    if (this.isMounted) return;

    const orderWrapper = document.createElement('div');
    orderWrapper.classList.add('order__wrapper');

    orderWrapper.insertAdjacentHTML(
      'beforeend',
      `
      <div class="order__wrapper-info">
        <h2 class="order__title">Заказ успешно размещен</h2>

        <p class="order__price">20&nbsp;000&nbsp;₽</p>
      </div>

      <span class="order__number">№43435</span>

      <h3 class="order__subtitle">Данные доставки</h3>

      <table class="order__table table">
        <tr class="order__table-row table__row">
          <td class="order__table-field table__field">Получатель</td>
          <td class="order__table-value table__value">Иванов Петр Александрович</td>
        </tr>
        <tr class="order__table-row table__row">
          <td class="order__table-field table__field">Телефон</td>
          <td class="order__table-value table__value">+7 (737) 346 23 00</td>
        </tr>
        <tr class="order__table-row table__row">
          <td class="order__table-field table__field">E-mail</td>
          <td class="order__table-value table__value">Ivanov84@gmail.com</td>
        </tr>
        <tr class="order__table-row table__row">
          <td class="order__table-field table__field">Адрес доставки</td>
          <td class="order__table-value table__value">Москва, ул. Ленина, 21, кв. 33</td>
        </tr>
        <tr class="order__table-row table__row">
          <td class="order__table-field table__field">Способ оплаты</td>
          <td class="order__table-value table__value">Картой при получении</td>
        </tr>
        <tr class="order__table-row table__row">
          <td class="order__table-field table__field">Способ получения</td>
          <td class="order__table-value table__value">Доставка</td>
        </tr>
      </table>

      <a class="order__link" href="/">На главную</a>
    `,
    );

    this.containerElement.append(orderWrapper);

    document.querySelector('main').append(this.element);
    this.isMounted = true;
  }

  unmount() {
    this.element.remove();
    this.isMounted = false;
  }
}
