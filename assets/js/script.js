
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

  // drop down 
document.querySelectorAll(".dropdown").forEach((dropdown) => {
  const toggle = dropdown.querySelector(".dropdown-toggle");
  const menu = dropdown.querySelector(".dropdown-menu");
  const arrow = dropdown.querySelector(".dropdown-arrow");
  const items = dropdown.querySelectorAll(".dropdown-item");
  const selectedText = dropdown.querySelector(".selected-text");

  // باز و بسته شدن
  toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    arrow.classList.toggle("rotate-180");
  });

  // انتخاب گزینه
  items.forEach((item) => {
    item.addEventListener("click", () => {
      selectedText.textContent = item.textContent;
      menu.classList.add("hidden");
      arrow.classList.remove("rotate-180");
    });
  });
});

// بستن با کلیک بیرون
document.addEventListener("click", (e) => {
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    if (!dropdown.contains(e.target)) {
      dropdown.querySelector(".dropdown-menu").classList.add("hidden");
      dropdown.querySelector(".dropdown-arrow").classList.remove("rotate-180");
    }
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

// drop down