import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  #elem;
  #carouselArrowRight;
  #carouselArrowLeft;
  #carouselSlide;
  #currentSlide;
  #slidesLength;

  constructor(slides) {
    this.slides = slides;
    this.#render();
    this.#carouselSlide = this.#elem.querySelector(".carousel__inner");
    this.#carouselArrowRight = this.#elem.querySelector(
      ".carousel__arrow.carousel__arrow_right"
    );
    this.#carouselArrowLeft = this.#elem.querySelector(
      ".carousel__arrow.carousel__arrow_left"
    );
    this.#slidesLength = this.#elem.querySelectorAll(".carousel__slide").length;
    this.#currentSlide = 0;
    this.#initCarouselArrow();
    this.#addProduct();
  }
  get elem() {
    return this.#elem;
  }

  #render() {
    let temp = createElement(`
      <div class="carousel">

        <div class="carousel__arrow carousel__arrow_right">
           <img src="/assets/images/icons/angle-icon.svg" alt="icon">
         </div>
         <div class="carousel__arrow carousel__arrow_left">
            <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
         </div>
         <div class="carousel__inner">
             ${this.slides
               .map(
                 (obj) => `
           <div class="carousel__slide" data-id="${obj.id}">
                <img src="/assets/images/carousel/${
                  obj.image
                }" class="carousel__img" alt="slide">
               <div class="carousel__caption">
                 <span class="carousel__price">€${obj.price.toFixed(2)}</span>
               <div class="carousel__title">${obj.name}</div>
                 <button type="button" class="carousel__button">
                   <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                 </button>
               </div>
             </div>
         `
               )
               .join("")}
        </div>
       </div>
    `);
    this.#elem = temp;
  }

  #initCarouselArrow() {
    this.#carouselArrowLeft.style.display = "none";
    this.#carouselArrowRight.addEventListener("click", () => {
      this.#carouselTransform(++this.#currentSlide);
    });
    this.#carouselArrowLeft.addEventListener("click", () => {
      this.#carouselTransform(--this.#currentSlide);
    });
  }

  #arrowHideShow(currentSld) {
    currentSld == 0
      ? (this.#carouselArrowLeft.style.display = "none")
      : (this.#carouselArrowLeft.style.display = "");
    currentSld >= this.#slidesLength - 1
      ? (this.#carouselArrowRight.style.display = "none")
      : (this.#carouselArrowRight.style.display = "");
  }

  #carouselTransform(currentSld) {
    this.#carouselSlide.style.transform = `translateX(-${
      this.#carouselSlide.offsetWidth * currentSld
    }px)`;
    this.#arrowHideShow(currentSld);
  }

  #addProduct() {
    this.#elem.addEventListener("click", (e) => {
      if (e.target.closest(".carousel__button")) {
        const currentButton = e.target.closest(".carousel__button");
        const event = new CustomEvent("product-add", {
          detail: e.target.closest(".carousel__slide").dataset.id,
          bubbles: true,
        });
        currentButton.dispatchEvent(event);
      }
    });
  }
}
