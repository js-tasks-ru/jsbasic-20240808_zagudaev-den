export default class ProductCard {
  #elem;
  #product;

  constructor(product) {
    this.#product = product;
    this.#elem = document.createElement("div");
    this.#render();
    this.#clickOnButton();
  }
  get elem() {
    return this.#elem;
  }
  #render() {
    let temp = `
    <div class="card__top">
        <img src="/assets/images/products/${
          this.#product.image
        }" class="card__image" alt="product">
        <span class="card__price">€${this.#product.price}.00</span>
      </div>
      <div class="card__body">
        <div class="card__title">${this.#product.name}</div>
        <button type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    `;
    this.#elem.innerHTML = temp;
  }

  #clickOnButton() {
    this.#elem.querySelector(".card__button").addEventListener("click", () =>
      this.#elem.dispatchEvent(
        new CustomEvent("product-add", {
          detail: this.#product.id,
          bubbles: true,
        })
      )
    );
  }
}
