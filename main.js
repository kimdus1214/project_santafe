new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 50,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay : 5000
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".swiper-prev",
    nextEl: ".swiper-next",
  },
})