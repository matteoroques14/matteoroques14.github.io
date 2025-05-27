const swiperInit = () => {
  let certsWrapper = document.querySelector(
    "#certifications .swiper .swiper-wrapper"
  );
  let certsTransformValue;

  if (!certsWrapper) {
    return;
  }

  const certsSwiper = new Swiper("#certifications .swiper", {
    loop: true,
    freeMode: true,
    spaceBetween: 20,
    grabCursor: true,
    slidesPerView: 2, // default value
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
    speed: 5000,
    freeModeMomentum: false,
    breakpoints: {
      // when window width is >= 760px
      768: {
        spaceBetween: 50,
        slidesPerView: 4,
      },
    },
  });

  certsWrapper.addEventListener("mouseenter", (event) => {
    certsSwiper.autoplay.stop();
    certsTransformValue = certsWrapper.style.transform;
    certsWrapper.style.transitionDuration = "0ms";
    certsWrapper.style.transform =
      "translate3d(" + certsSwiper.getTranslate() + "px, 0px, 0px)";
  });

  certsWrapper.addEventListener("mouseleave", (event) => {
    certsWrapper.style.transitionDuration = certsSwiper.params.speed + "ms";
    certsWrapper.style.transform = certsTransformValue;
    certsSwiper.autoplay.start();
  });

  let trustedByWrapper = document.querySelector(
    "#trusted-by .swiper .swiper-wrapper"
  );
  let trustedByTransformValue;

  const trustedBySwiper = new Swiper("#trusted-by .swiper", {
    grabCursor: true,
    slidesPerView: 2, // default value
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
    spaceBetween: 20,
    loop: true,
    freeMode: true,
    speed: 5000,
    freeModeMomentum: false,
    breakpoints: {
      // when window width is >= 768px
      768: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
      1024: {
        spaceBetween: 50,
        slidesPerView: 4,
      },
    },
  });

  trustedByWrapper.addEventListener("mouseenter", (event) => {
    trustedBySwiper.autoplay.stop();
    trustedByTransformValue = trustedByWrapper.style.transform;
    trustedByWrapper.style.transitionDuration = "0ms";
    trustedByWrapper.style.transform =
      "translate3d(" + trustedBySwiper.getTranslate() + "px, 0px, 0px)";
  });

  trustedByWrapper.addEventListener("mouseleave", (event) => {
    trustedByWrapper.style.transitionDuration =
      trustedBySwiper.params.speed + "ms";
    trustedByWrapper.style.transform = trustedByTransformValue;
    trustedBySwiper.autoplay.start();
  });

  certsWrapper.style.visibility = "visible";
  trustedByWrapper.style.visibility = "visible";
};
