document.addEventListener("DOMContentLoaded", () => {
  // FAQ accordion
  document.querySelectorAll(".dynamic-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".change-bg");
      const dynamicElements = card.querySelectorAll(".dynamic-p, .open-close-btn");
      const closeBtnIcon = card.querySelector(".close-btn");
      const openBtnIcon = card.querySelector(".open-btn");
      const isClosed = dynamicElements[0].classList.contains("hidden");

      dynamicElements.forEach((el) => el.classList.toggle("hidden"));
      openBtnIcon?.classList.toggle("hidden");
      closeBtnIcon?.classList.toggle("hidden");

      card.classList.toggle("bg-transparent", !isClosed);
      card.classList.toggle("bg-surface", isClosed);
    });
  });

  // Swiper home
  const swiper = new Swiper(".mySwiper", { loop: true, grabCursor: true });
  const nextBtn = document.querySelector(".custom-next");
  nextBtn?.addEventListener("click", () => swiper.slideNext());

  // Swiper comments
const customersSwiper = new Swiper(".customersSwiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 16,
    centeredSlides: true, // پیشفرض موبایل

  breakpoints: {
    1024: { // lg
      centeredSlides: false,
      slidesPerView: 3,   // یا 4 هرچقدر میخوای
    },
  },

  observer: true,
  observeParents: true,
  
});

window.addEventListener("load", () => {
  customersSwiper.update();
});

});
