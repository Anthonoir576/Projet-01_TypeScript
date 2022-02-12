"use strict";
// ------ variable ----------
let numero1 = 24;
// declarer un type a une variable
// le type declaré ne peut changé. un string, ne peut devenir un number. evite les erreurs
let numero2;
let numero3;
let numero4;
let numOrString;
numOrString = 45;
numOrString = '45';
// NON numero2  = false;
// OUI numero2  = 45;
numero2 = 45;
console.log(numero2);
console.log(numOrString);
// --------------------------
// ------- Tableau ----------
let array = ['chien', 'chat', 'poisson'];
let array2 = ['chien', 'chat', 'poisson'];
console.log(array2);
array2[0] = 'cheval';
console.log(array2);
console.log(array2);
// type de données dans le tab
let array3 = [];
let array4 = [];
let array5 = [];
let tableau = [];
array4[0] = 45;
array4[1] = '45';
array4[2] = false;
array5[0] = 47;
array5[1] = '47';
array5[2] = true;
console.log(array4);
console.log(array5);
console.log(tableau);
tableau.push(false);
tableau.push(24);
console.log(tableau);
// --------------------------
// -------- Objet -----------
let obj = {};
let joueur1 = {
    id: 1,
    nom: 'moi'
};
let joueur2 = {
    id: 2,
    nom: 'moi2'
};
;
let joueur3 = {
    id: 3,
    nom: 'moi3',
    prenom: 'antho'
};
console.log(joueur3);
let joueurs = {
    joueur1: joueur1,
    joueur2: joueur2,
    joueur3: joueur3
};
console.log(joueurs);
console.log(joueur3.nom);
let joueur4 = {
    id: 5,
    prenom: 'antho2'
};
console.log(joueur4);
// --------------------------
// -------  Classe  ---------
class Chanteur {
    constructor(id, nom, alive) {
        this.id = id;
        this.nom = nom;
        this.alive = alive;
    }
    ;
}
;
const orelsan = new Chanteur(10, 'orelsan', true);
const nekfeu = new Chanteur(11, 'nekfeu');
console.log(orelsan);
console.log(nekfeu);
// --------------------------
// -----  Fonction  ---------
const ditMonNomBoy = (name) => {
    console.log(`hello ${name}`);
};
ditMonNomBoy('antho');
// --------------------------
