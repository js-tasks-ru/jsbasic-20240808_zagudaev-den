function initCarousel() {
  const fieldImg = document.querySelector(".carousel__inner");
  const btnRight = document.querySelector(".carousel__arrow_right");
  const btnLeft = document.querySelector(".carousel__arrow_left");
  const carouselArrow = { btnLeft, btnRight };
  carouselArrow.btnLeft.style.display = "none";
  let indexImage = 0;

  //кнопка свайп право

  btnRight.addEventListener("click", () => {
    fieldImg.style.transform = `translateX(-${
      fieldImg.offsetWidth * (indexImage + 1)
    }px)`;
    ++indexImage;
    hiddenButtons();
  });
  // кнопка свайп влево

  btnLeft.addEventListener("click", () => {
    fieldImg.style.transform = `translateX(-${
      fieldImg.offsetWidth * (indexImage - 1)
    }px)`;
    --indexImage;
    hiddenButtons();
  });
  // скрывать кнопки
  function hiddenButtons() {
    indexImage == 0
      ? (carouselArrow.btnLeft.style.display = "none")
      : (carouselArrow.btnLeft.style.display = "");
    indexImage >= 3
      ? (carouselArrow.btnRight.style.display = "none")
      : (carouselArrow.btnRight.style.display = "");
  }
}
