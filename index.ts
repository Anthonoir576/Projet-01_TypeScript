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