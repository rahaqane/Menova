
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
    centeredSlides: true, 
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
let selectedModules = [];

function toggleModule(btn) {
  const id = btn.getAttribute('data-id');
  const title = btn.getAttribute('data-title');
  const price = parseInt(btn.getAttribute('data-price'));
  const icon = btn.getAttribute('data-icon');

  const existingIndex = selectedModules.findIndex(item => item.id === id);

  if (existingIndex > -1) {
    removeModule(id);
  } else {
    selectedModules.push({ id, title, price, icon, btnElement: btn });
    
    btn.className = "btn-done gap-2";
    btn.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#EBD3B0"/>
      </svg>
      افزوده شد
    `;
    updateSummaryPanel();
  }
}

function removeModule(id) {
  const moduleToFind = selectedModules.find(item => item.id === id);
  if (moduleToFind) {
    moduleToFind.btnElement.className = "btn-signIn";
    moduleToFind.btnElement.innerHTML = "افزودن به سفارش";
    selectedModules = selectedModules.filter(item => item.id !== id);
    updateSummaryPanel();
  }
}

function toggleMobileBadges() {
  const badgesContainer = document.getElementById('badges-container');
  const toggleIcon = document.getElementById('mobile-toggle-icon');

  if (badgesContainer.classList.contains('hidden')) {
    badgesContainer.classList.remove('hidden');
    badgesContainer.classList.add('flex');
    toggleIcon.style.transform = 'rotate(180deg)'; 
  } else {
    badgesContainer.classList.add('hidden');
    badgesContainer.classList.remove('flex');
    toggleIcon.style.transform = 'rotate(0deg)'; 
  }
}

function updateSummaryPanel() {
  const summaryPanel = document.getElementById('summary-panel');
  const badgesContainer = document.getElementById('badges-container');
  const priceElement = document.getElementById('total-price');
  const toggleIcon = document.getElementById('mobile-toggle-icon');

  if (selectedModules.length === 0) {
    summaryPanel.classList.add('hidden');
    summaryPanel.classList.remove('flex');
    
    badgesContainer.classList.add('hidden');
    badgesContainer.classList.remove('flex');
    toggleIcon.style.transform = 'rotate(0deg)';
    return;
  }

  summaryPanel.classList.remove('hidden');
  summaryPanel.classList.add('flex');

  badgesContainer.innerHTML = '';
  let totalPrice = 0;

  selectedModules.forEach(module => {
    totalPrice += module.price;
   
    const badgeHTML = `
      <div class="border border-border-main rounded-xl p-2 flex gap-2 max-w-max items-center">
        <img src="${module.icon}" class="h-8 w-8" />
        <p class="text-base font-medium text-txt-caption">${module.title}</p>
        <img src="./assets/icons/cross.svg" class="h-4 w-4 cursor-pointer" onclick="removeModule('${module.id}')" />
      </div>
    `;
    badgesContainer.insertAdjacentHTML('beforeend', badgeHTML);
  });

  const persianPrice = totalPrice.toLocaleString('fa-IR');
  priceElement.innerText = `${persianPrice} تومان`;
}

