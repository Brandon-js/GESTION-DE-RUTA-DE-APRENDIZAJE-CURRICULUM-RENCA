const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
  var main = document.querySelector(".main");
  if (main.style.opacity != 0.3) {
    main.style.opacity = 0.3;
  } else {
    main.style.opacity = 1;
  }
});
