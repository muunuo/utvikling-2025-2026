const overskrit = document.createElement("h1"); // lager overskrift
overskrit.innerText = "Dette er en overskrit"; // skriver inn en faktisk overskrift 
document.body.appendChild(overskrit);// får overskriften til å eksistere på siden

let knapp = document.createElement("button"); // opretter ideen på en knapp
knapp.innerText = "Eksempelkode";// gir knapp tekst
knapp.id = "knapp1"; // gir knapp id
knapp.addEventListener("click",trykk)
document.body.appendChild(knapp);// får knapp til å eksistere

let knapp2 = document.createElement("button"); // opretter ideen på en knapp
knapp2.innerText = "Eksempelkode2";// gir knapp tekst
knapp2.id = "knapp2erbedre"; // gir knapp id
knapp2.addEventListener("click",trykk)
document.body.appendChild(knapp2);// får knapp til å eksistere

let bilde = document.createElement("img");
bilde.src = "../kattunge.jpg" 
document.body.appendChild(bilde)

// endrer farge på nettsiden
document.body.style.backgroundColor = "lightblue"
document.body.style.color = "lightpink"

document.body.style.border = "solid red 1rem"


function trykk(evt) {// (evt) er et parometer
    console.log("trykket");
    console.log(evt.target.id); // registrerer hva du trykket på
    // slipper no å ha flere funksjoner takket vært evt.target.id
}