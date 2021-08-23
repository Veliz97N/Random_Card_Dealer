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
    let indice_A = RandomIndex(valores_A);
    if (valores_cartas[indice_carta] == "A") {
        let indice_A = RandomIndex(valores_A); //Obtengo el indice de los valores de A
        number.style.width = "200px";
        number.style.height = "200px";
        number.style.backgroundImage = "url(/Suit/" + valores_A[indice_A] + ")"; //Defino como fondo la imagen obtenida
        number.style.backgroundSize = "contain"; //La de fino como contain
        number.style.backgroundRepeat = "no-repeat"; //Defino que no se repita  
        if (valores_A[indice_A] == "1.png") { //Spade
            number.style.transform = "translate(65%,75%)";
            suits[0].classList.add(valores_suits[0]); //No coincide porque no hay una clase destinada a eso
            suits[1].classList.add(valores_suits[0]); //No coicide porqe no hay una clase destinada a eso
        } else if (valores_A[indice_A] == "2.png") { //Heart
            number.style.transform = "translate(60%,80%)";
            suits[0].classList.add(valores_suits[2]); //No coincide porque no hay una clase destinada a eso
            suits[1].classList.add(valores_suits[2]); //No coicide porqe no hay una clase destinada a eso
        } else if (valores_A[indice_A] == "3.png") { //Club
            number.style.transform = "translate(55%,80%)";
            suits[0].classList.add(valores_suits[1]); //No coincide porque no hay una clase destinada a eso
            suits[1].classList.add(valores_suits[1]); //No coicide porqe no hay una clase destinada a eso
        } else if (valores_A[indice_A] == "4.png") { //Diamond
            number.style.transform = "translate(65%,75%)";
            suits[0].classList.add(valores_suits[3]); //No coincide porque no hay una clase destinada a eso
            suits[1].classList.add(valores_suits[3]); //No coicide porqe no hay una clase destinada a eso
        }
    } else {
        number.innerHTML = valores_cartas[indice_carta];
        let indice_suit = RandomIndex(valores_suits);
        suits[0].classList.add(valores_suits[indice_suit]);
        suits[1].classList.add(valores_suits[indice_suit]);
    }
};
window.onload = function () {
    Recargar_Cartas();
};

