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

/*Ajout de code Johan*/ /*Carrousel*/
/**Global**/
const dots = document.querySelector(".dots");
let index = 0;
const arrow_right = document.querySelector(".arrow_right");
const arrow_left = document.querySelector(".arrow_left");
const img = document.querySelector("#banner .banner-img");
console.log(img);
const text = document.querySelector("#banner p");
console.log(text);

/*Ajout de navigation arrow left*/
function clickLeft() {
  arrow_left.addEventListener("click", () => {
    console.log("Vous avez cliqué sur le bouton gauche");
    /*Ajout changement de bullet point actif ci-dessous + vers l'arrière*/
    const arrayDots = document.querySelectorAll(".dots .dot");
    arrayDots[index].classList.remove("dot_selected");
    /*Ajout défilement infini ci-dessous + img + texte*/
    index--;
    if (index < 0) {
      index = slides.length - 1;
    }
    console.log(img);
    img.src = `./assets/images/slideshow/${slides[index].image}`;
    text.innerHTML = `${slides[index].tagLine}`;
    /*Bullet point actif vers l'avant ci-dessous*/
    arrayDots[index].classList.add("dot_selected");
    console.log(arrayDots);
  });
}
clickLeft();

/*Ajout de navigation arrow right*/
function clickRight() {
  arrow_right.addEventListener("click", () => {
    console.log("Vous avez cliqué sur le bouton droit");
    const arrayDots = document.querySelectorAll(".dots .dot");
    arrayDots[index].classList.remove("dot_selected");
    index++;
    if (index > slides.length - 1) {
      index = 0;
    }
    console.log(img);
    img.src = `./assets/images/slideshow/${slides[index].image}`;
    text.innerHTML = `${slides[index].tagLine}`;
    arrayDots[index].classList.add("dot_selected");
    console.log(arrayDots);
  });
}
clickRight();

/*Ajout des bullet points*/
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
