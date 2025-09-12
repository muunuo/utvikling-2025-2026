// Aray
// Objekt 

let arrayNavn = ["Ola", "Kari", "Per"];

console.log(arrayNavn);


for(let navn of arrayNavn){// viser alle navn som liste i console
    console.log(navn);
}

console.log(arrayNavn[1]);  // viser navn nr 1 (Kari)



let person = {//objekt
    alder: 25,
    navn: "Bert",
    yrke: "IKT",
};

console.log(person);
console.log(person.alder); // consol logger kun alder



let arrayPerson = [ //Aray med felere variabler
    {
        navn: "Emma",
        alder: 24,
    },

    {
        navn: "Sara",
        alder: 18,
    },

    {
        navn: "Markus",
        alder: 32,
    }
];


console.log(arrayPerson);
console.log(arrayPerson[1]);
console.log(arrayPerson[1].navn); //kun navn for person 1


arrayPerson.push(person); //legger til infoen fra person i arrayPerson


console.log("\nHer er arrayen inkludert person fra person:")

// for(let person of arrayPerson) {
//     console.log(arrayPerson)
// }


for (let index = 0; index < arrayPerson.length; index++) {
    console.log(arrayPerson[index].navn);
    
}

console.log("\nGammlinge her -->")
//Viser kun folk som er 25+ år gammel

// for (let index = 0; index < arrayPerson.length; index++) {
//     if (arrayPerson[index].alder >= 25) {
//     console.log(arrayPerson[index].navn);
// }
// }


//Ikke ferdig med dette.
for (let index = 0; index < arrayPerson.length; index++) {
    if (arrayPerson[index].alder >= 25) {
    arrayPerson.splice
    console.log(arrayPerson[index])
}
}
