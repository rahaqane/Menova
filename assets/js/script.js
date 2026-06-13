
document.addEventListener("DOMContentLoaded", () => {
  // FAQ accordion
  document.querySelectorAll(".dynamic-btn, .dynamicbtn, .dynamicarrow").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".change-bg");
      const dynamicElements = card.querySelectorAll(".dynamic-p, .open-close-btn");
      const closeBtnIcon = card.querySelector(".close-btn");
      const openBtnIcon = card.querySelector(".open-btn");
      const isClosed = dynamicElements[0].classList.contains("hidden");

      dynamicElements.forEach((el) => el.classList.toggle("hidden"));
      openBtnIcon?.classList.toggle("hidden");
      closeBtnIcon?.classList.toggle("hidden");

      if (!card.classList.contains("no-bg-toggle")) {
      card.classList.toggle("bg-transparent", !isClosed);
      card.classList.toggle("bg-surface", isClosed);
    }
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
if (typeof Swiper !== "undefined") {
  // Swiper home
  const swiper = new Swiper(".mySwiper", { loop: true, grabCursor: true });
  const nextBtn = document.querySelector(".custom-next");
  nextBtn?.addEventListener("click", () => swiper.slideNext());

  // Swiper customers
const customersSwiper = new Swiper(".customersSwiper", {
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 16,
    centeredSlides: true, // پیشفرض موبایل
    rtl: true,
 navigation: {
    nextEl: ".leftbtn",
    prevEl: ".rightbtn",
  },
  breakpoints: {
    1024: { // lg
      centeredSlides: false,
    },
  },

  observer: true,
  observeParents: true,
  
});


// plansForSaleSwiper
const plansForSaleSwiper = new Swiper(".plansForSaleSwiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 16,
  centeredSlides: true,
   navigation: {
    nextEl: ".leftbtn",
    prevEl: ".rightbtn",
  },
  breakpoints: {
    1024: {
      centeredSlides: false,
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});
// articleSwiper
const articleSwiper = new Swiper(".articleSwiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: 1.15,
  spaceBetween: 16,
  centeredSlides: true,
  autoHeight: false,
   navigation: {
    nextEl: ".leftbtn",
    prevEl: ".rightbtn",
  },
  breakpoints: {
    1024: {
      centeredSlides: false,
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});

window.addEventListener("load", () => {
  customersSwiper.update();
    plansForSaleSwiper.update();
});
}
// show password
const togglepassword = document.getElementById("togglePassword")
const password = document.getElementById("passwordInput")
if(togglepassword&&password){
  togglepassword.addEventListener("click",()=>{
  
    const typeInput =password.getAttribute("type")==="password"?"text":"password";
    password.setAttribute("type",typeInput)
})
}
// navbar
const toggle = document.getElementById("menu-toggle-icon");
const menu = document.getElementById("dropdown-menu");

if (toggle && menu) {

  menu.addEventListener("click", (e)=>{
    e.stopPropagation();
  });

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.remove("active");
    }
  });
}

});

