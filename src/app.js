/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Función onLoad cada vez que se refresca la página
window.onload = () => {
  cardRandom();

  document.getElementById("btn").addEventListener("click", () => {
    cardRandom();
    reset();
  });
};

// Función padre que se ejecuta

function cardRandom() {
  let iconos = ["♦", "♥", "♠", "♣"];
  let numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

  let icono = iconos[getIcono(iconos)];
  let numero = numeros[getNumero(numeros)];

  let iconLeft = document.querySelector(".iconLeft");
  let cardContent = document.querySelector(".number");
  let iconRight = document.querySelector(".iconRight");

  function getIcono(array) {
    let icono = Math.floor(Math.random() * array.length);
    return icono;
  }

  function getNumero(array) {
    let numero = Math.floor(Math.random() * array.length);
    return numero;
  }

  iconLeft.innerHTML = icono;
  cardContent.innerHTML = numero;
  iconRight.innerHTML = icono;

  if (icono == "♦" || icono == "♥") {
    iconLeft.style.color = "red";
    iconRight.style.color = "red";
  } else {
    iconLeft.style.color = "black";
    iconRight.style.color = "black";
  }
}

// Cada 5s se genera una carta si no presionas el boton, reset si lo presionas
let test = timer();

function timer() {
  return setInterval(cardRandom, 5000);
}

function reset() {
  clearInterval(test);
  test = timer();
}
