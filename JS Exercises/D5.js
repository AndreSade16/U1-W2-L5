/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

const printElements = function (arr) {
  pets.forEach((el) => console.log(el));
};

console.log("Ecco gli elementi dell'array 'pets': ");
printElements(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

const sortArrayAlphabetically = function (arr) {
  return arr.sort();
};

console.log(
  "\nEcco gli elementi di 'pets' ordinati alfabeticamente: ",
  sortArrayAlphabetically(pets),
);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

const printElementsReversed = function (arr) {
  pets.reverse().forEach((el) => console.log(el));
};

console.log(
  "\nEcco gli elementi di 'pets' ordinati alfabeticamente e poi invertiti: ",
);
printElementsReversed(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const firstLast = function (arr) {
  let shifted = arr.shift();
  arr.push(shifted);
  return arr;
};

console.log("\nQui il primo elemento (redfish), finisce in fondo: ");
console.log(firstLast(pets));

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

const addLicensePlate = function (arr) {
  arr.forEach((car) => (car.licensePlate = "AB123CD"));
  return arr;
};

console.log("\nElementi di 'cars' con l'aggiunta di licensePlate: ");
console.log(addLicensePlate(cars));

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

cars.push({
  brand: "Audi",
  model: "A4",
  color: "yellow",
  trims: ["berlina", "limo", "sportback"],
  licensePlate: "AB123CD",
});

const removeLastTrim = function (arr) {
  arr.forEach((el) => el.trims.pop());
  return arr;
};

console.log(
  "\nAggiunto un elemento a 'cars' e rimosso ultimo elemento di trims da ognuno: ",
);
console.log(removeLastTrim(cars));

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

const saveFirstTrim = function (arr) {
  arr.forEach((el) => justTrims.push(el.trims[0]));
  return justTrims;
};

console.log("\nPrimo elemento di 'trims' salvato in 'justTrims': ");
console.log(saveFirstTrim(cars));

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

const fizzOrBuzz = function (arr) {
  arr.forEach((el) => {
    if (el.color.charAt(0) === "b") {
      console.log("Fizz");
    } else {
      console.log("Buzz");
    }
  });
};

console.log("\nFizz or Buzz?: ");
fizzOrBuzz(cars);

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let c = 0;
let temp = 0;

console.log("\nRisultato del ciclo while: \n");

while (temp !== 32) {
  temp = numericArray[c];
  console.log(temp);
  c++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

const getNumbersFromLetters = function (arr) {
  const newArr = [];
  arr.forEach((el) => {
    switch (el) {
      case "a":
        newArr.push(1);
        break;
      case "b":
        newArr.push(2);
        break;
      case "c":
        newArr.push(3);
        break;
      case "d":
        newArr.push(4);
        break;
      case "e":
        newArr.push(5);
        break;
      case "f":
        newArr.push(6);
        break;
      case "g":
        newArr.push(7);
        break;
      case "h":
        newArr.push(8);
        break;
      case "i":
        newArr.push(9);
        break;
      case "l":
        newArr.push(10);
        break;
      case "m":
        newArr.push(11);
        break;
      case "n":
        newArr.push(12);
        break;
      case "o":
        newArr.push(13);
        break;
      case "p":
        newArr.push(14);
        break;
      case "q":
        newArr.push(15);
        break;
      case "r":
        newArr.push(16);
        break;
      case "s":
        newArr.push(17);
        break;
      case "t":
        newArr.push(18);
        break;
      case "u":
        newArr.push(19);
        break;
      case "v":
        newArr.push(20);
        break;
      case "z":
        newArr.push(21);
        break;
      default:
        console.log("Inserisci una lettera valida");
    }
  });
  return newArr;
};

console.log(
  "\nGenerato un array che ricava la posizione alfabetica di ogni lettera dell'array: ",
);
console.log(getNumbersFromLetters(charactersArray));
