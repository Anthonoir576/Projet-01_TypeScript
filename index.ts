// ------ variable ----------

let numero1     = 24;

// declarer un type a une variable
// le type declaré ne peut changé. un string, ne peut devenir un number. evite les erreurs
let numero2     :number;
let numero3     :string;
let numero4     :boolean;
let numOrString : number | string;


numOrString     = 45;
numOrString     = '45';

// NON numero2  = false;
// OUI numero2  = 45;

numero2         = 45;

console.log(numero2);
console.log(numOrString);

// --------------------------




// ------- Tableau ----------

let array   = ['chien', 'chat', 'poisson'];
let array2  = ['chien', 'chat', 'poisson'];

console.log(array2);

array2[0]   = 'cheval';

console.log(array2);
console.log(array2);

// type de données dans le tab
let array3  : number[]                         = [];
let array4  : number[] | string[] | boolean[]  = [];
let array5  : (number | string | boolean)[]    = [];
let tableau : (number | boolean)[]             = [];

array4[0]   = 45; 
array4[1]   = '45'; 
array4[2]   = false;

array5[0]   = 47; 
array5[1]   = '47'; 
array5[2]   = true;

console.log(array4);
console.log(array5);
console.log(tableau);

tableau.push(false); 
tableau.push(24);

console.log(tableau);


// --------------------------




// -------- Objet -----------

let obj    = {};

let joueur1 = {
    id  : 1,
    nom : 'moi'
}; 

let joueur2 = {
    id  : 2,
    nom : 'moi2'
}; 

// NON joueur1.prenom = 'antho';
// On ne peut ajouter un prenom de cette façon
// Il faut créer un schéma un peu comme mongoose 
// le '?' Permet de dire qu'il est pas obligatoire de mettre un prenom par exemple si j'avais pas mis ce point d'interrogation, j'aurais été obligé de mettre un prenom
interface Joueur {
    id?     : number,
    nom?    : string,
    prenom? : string
};

let joueur3 :Joueur = {
    id      : 3,
    nom     : 'moi3',
    prenom  : 'antho'
};

console.log(joueur3);

let joueurs = {
    joueur1 : joueur1,
    joueur2 : joueur2,
    joueur3 : joueur3
};

console.log(joueurs);
console.log(joueur3.nom);

let joueur4 :Joueur = {
    id      : 5,
    prenom  : 'antho2'
};

console.log(joueur4);


// --------------------------




// -------  Classe  ---------

class Chanteur {
    id              :number;
    nom             :string | number;
    alive?          :boolean;

    constructor(id: number, nom: string | number, alive?: boolean) {
        this.id     = id;
        this.nom    = nom;
        this.alive  = alive;
    };
};

const orelsan = new Chanteur(10, 'orelsan', true);
const nekfeu  = new Chanteur(11, 'nekfeu');

console.log(orelsan);
console.log(nekfeu);


// --------------------------




// -----  Fonction  ---------

const ditMonNomBoy = (name?: string) => {

    console.log(`hello ${name}`);

};
ditMonNomBoy('antho');


const ageDuKeum = (age: number | string, size?: Number) => {

    if (size) {
      
        console.log(`La taille du mec est de ${size} cm et il est agé de ${age} ans`);
        
    } else {

        console.log(`l'age du mec est de ${age} ans`);

    };   

};

ageDuKeum(18, 170);
ageDuKeum(18);

// --------------------------




// ----- ENUM & TUPLE  ------


// TUPLE
interface User {
    name        : string;
    attributes  : [number, string];
    role?       : Role
};

// ENUM

enum Role {ADMIN, PREMIUM, BASIC}

console.log(Role.ADMIN);
console.log(Role.PREMIUM);
console.log(Role.BASIC);

const user1:User = {
    name        : 'anthony',
    attributes  : [24, 'ici'],
    role        : Role.BASIC
};

const user2:User = {
    name        : 'anthony',
    attributes  : [24, 'ici'],
    role        : Role.ADMIN,
};

if (user2.role === Role.ADMIN) {

    console.log('connexion administrateur');
    

} else {

    console.log('connexion basic');

}


if (user1.role === Role.ADMIN) {

    console.log('connexion administrateur');
    

} else {

    console.log('connexion basic');

}

// --------------------------
