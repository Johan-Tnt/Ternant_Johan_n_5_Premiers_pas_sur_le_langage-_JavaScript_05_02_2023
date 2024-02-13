const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
/*Rajout de code pour vérifier le fonctionnement dans l'inspecteur ci-dessous*/
console.log(slides);

/*Ajout de code Johan*/ /*Carroussel*/
/**Global **/
const dots = document.querySelector(".dots");
let index = 0;
const arrow_right = document.querySelector(".arrow_right");
const img = document.querySelector("#banner .banner-img");
console.log(img);
const text = document.querySelector("#banner p");
console.log(text);

/*Ajout de event listenner arrow left*/
arrow_left.addEventListener("click", () => {
  console.log("Vous avez cliqué sur le bouton gauche");
});

/*Ajout de event listenner arrow right*/
function clickRight() {
  arrow_right.addEventListener("click", () => {
    console.log("Vous avez cliqué sur le bouton droit");
    index++;
    console.log(img);
    img.src = `./assets/images/slideshow/${slides[index].image}`;
    text.innerHTML = `${slides[index].tagLine}`;
  });
}
clickRight();

/*Ajout des bullet point*/
function displayDots() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);
    if (i == index) {
      dot.classList.add("dot_selected");
    }
  }
}
displayDots();
/*Fin du code Johan*/
