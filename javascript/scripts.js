document
  .querySelector("#navbarNav")
  .addEventListener("click", function (event) {
    console.log(event.target);
    var targetSlideId = event.target.getAttribute("href").substring(1); //
    var targetSlide = document.querySelector("#" + targetSlideId);

    if (targetSlide) {
      swiper.slideTo(targetSlideId.substring(5) - 1);
    }
  });
