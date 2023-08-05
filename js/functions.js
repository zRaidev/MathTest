h1.addEventListener("click", () => {
  location.reload()
})

function myFunction(x) {
  if (x.matches) { // If media query matches
    bar.addEventListener("click", () => {
      if (aside.classList.contains("show")) {
        aside.style.animation = "aside-disappears 1s forwards";
        aside.classList.remove("show");
        restAside.style.display = "none";
      } else {
        aside.style.animation = "aside-appears 1s forwards";
        aside.classList.add("show");
        restAside.style.display = "block";
      }
      
    });

    restAside.addEventListener("click", () => {
      aside.style.animation = "aside-disappears 1s forwards";
      aside.classList.remove("show");
      restAside.style.display = "none";
    });
  } else {
    if (aside.classList.contains("show") == false) {
      aside.classList.add("show");
      aside.removeAttribute("style")
      responsiveAside.innerHTML = `
      aside {
        background-color: #222;
        height: 91.8vh;
        width: 18%;
        position: relative;
        left: 0;
      }`
    }

  }
}
let x = window.matchMedia("(max-width: 1199.97px)")
myFunction(x)
x.addEventListener("change", myFunction);

let selectionsArray = []; //[operacion, dificultad]
let readyToStart;

asideTitle.addEventListener("click", () => {
  difficultiesDiv.style.display = "none";
  operationsDiv.style.display = "block";
  asideH2.innerHTML = 'Operation Options'
  selectionsArray = [];
  arrowLeft.style.display = "none"
  readyToStart = false;
});