// script.js

// BUTTON EFFECT
document.querySelectorAll(".btn").forEach(button => {

  button.addEventListener("mouseenter", () => {
    button.style.transition = ".3s ease";
  });

});

// PARALLAX LIGHT EFFECT
document.addEventListener("mousemove", (e) => {

  const light = document.querySelector(".light");

  let x = (window.innerWidth / 2 - e.pageX) / 40;
  let y = (window.innerHeight / 2 - e.pageY) / 40;

  light.style.transform =
  `translateX(-50%) translate(${x}px, ${y}px)`;

});
