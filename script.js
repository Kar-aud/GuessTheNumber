let min = 1
let max = 10
let random = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(random);
let reponse = prompt("Devine le nombre");
console.log (`Tu as répondu: ${reponse}`);
function resultat(){
    if (isNaN(reponse)){
        console.log(`Erreur: tu dois entrer un nombre.`);
    }
    else if (Number(reponse) === random) {
        console.log(`Bien joué tu as réussi`);
        document.body.className = "vert";
    }
    else {
        console.log(`Tu as perdu la réponse était ${random}`);
        document.body.className = "rouge";
    }
}
resultat();



for (let index = 0; index < 3; index++) {
    const element = random[index];
    
}




