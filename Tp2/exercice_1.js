let devinette = Math.floor(Math.random() * 10) + 1;
let essai = 5;

choose.onclick = function () {
    let choose = document.querySelector("#rand");

    if (isNaN(choose.value)) {
         alert("Entrer un nombre entre 1 est 10");
    }
    else if (choose.value == devinette) {
         alert("Vous avez gagné BRAVO");
         reset();
    }
    else if (essai == 0) {
         alert("Vous avez perdu");
         reset();
    }
    else (choose.value != devinette) 
         alert("Choisissez un autre nombre svp!");
         lose();
};

function lose() {
    let tries = document.querySelector("#tries");
    essai -= 1;
    tries.textContent = "Nombre de chances restantes : " + essai;
}

function reset() {
    devinette = Math.floor(Math.random() * 10) + 1;
    essai = 5;
    tries.textContent = "Nombre de chances restantes : 5";
}