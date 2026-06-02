const dynamicBtns = document.querySelectorAll(".dynamic-btn");

dynamicBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".change-bg");
    const dynamicElements = card.querySelectorAll(".dynamic-p, .open-close-btn");
    const closeBtnIcon = card.querySelector(".close-btn");
    const openBtnIcon = card.querySelector(".open-btn");

    // بررسی اینکه کارت الان بسته است یا باز
    const isClosed = dynamicElements[0].classList.contains("hidden");

    dynamicElements.forEach((el) => {
      el.classList.toggle("hidden");
    });

    openBtnIcon?.classList.toggle("hidden");
    closeBtnIcon?.classList.toggle("hidden");

    if (isClosed) {
      // وقتی باز میشه
      card.classList.remove("bg-transparent");
      card.classList.add("bg-surface");
    } else {
      // وقتی بسته میشه
      card.classList.remove("bg-surface");
      card.classList.add("bg-transparent");
    }
  });
});
