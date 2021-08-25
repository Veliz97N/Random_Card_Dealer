let valores_cartas = [2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"];
let valores_suits = ["spade", "club", "heart", "diamond"];
let valores_A = ["1.png", "2.png", "3.png", "4.png"];
let number = document.getElementById("number");
let suits = document.getElementsByClassName("suit");

function RandomIndex(array) {
    let largo_array = array.length;
    let indice_random = Math.floor(Math.random() * (largo_array));
    return indice_random;
}

function Recargar_Cartas() {
    let indice_carta = RandomIndex(valores_cartas);
    number.innerHTML = valores_cartas[indice_carta];
    let indice_suit = RandomIndex(valores_suits);
    suits[0].classList.add(valores_suits[indice_suit]);
    suits[1].classList.add(valores_suits[indice_suit]);
}

window.onload = function () {
    Recargar_Cartas();
}

