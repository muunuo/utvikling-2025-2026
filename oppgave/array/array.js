let handlekurvEl = document.getElementById("handlekurv");

let varerEl = document.getElementById("varer");

let varer = [
    {navn: "Gullerot", pris: 4.90, bilde: "gullerot.png" ,handlekurv: 0, },  
    {navn: "Tomat", pris: 5.0, bilde: "tomat.png" ,handlekurv: 0, },  
    {navn: "Agurk", pris: 2.40, bilde: "agurk.png" ,handlekurv: 0, },  
    { navn: "Rødløk", pris: 8.30, bilde: "lok.png", handlekurv: 0 },
    { navn: "Paprika", pris: 13.30, bilde: "paprika.png", handlekurv: 0 },
    { navn: "Potet", pris: 3.90, bilde: "potet.png", handlekurv: 0 },
];

for (let i = 0; i < varer.length; i++) {
    // lager en div til varen
    var vareDiv = document.createElement("div");
    vareDiv.className = "vare";

    // lager er overskrift for varen
    vareOverskrift = document.createElement("h3");
    vareOverskrift.innerHTML = varer[i].navn;

    // viser et bilde av varen
    vareBilde = document.createElement("img");
    vareBilde.src = "../bilderEksempel/" + varer[i].bilde;

    // viser prisen på varen
    varePris = document.createElement("p")
    varePris.innerHTML = varer[i].pris + "kr";

    // lager en knapp for å kjøpe varen
    vareKnapp = document.createElement("button");
    vareKnapp.innerHTML = "kjøp";
    vareKnapp.id = i;
    vareKnapp.addEventListener("click", kjopVare);

    // alt går inn i diven
    vareDiv.appendChild(vareOverskrift);
    vareDiv.appendChild(vareBilde);
    vareDiv.appendChild(varePris);
    vareDiv.appendChild(vareKnapp);

    // "Legger til div-elementet i elementet med alle varene"
    varerEl.appendChild(vareDiv);
}

// legger en vare i handlekurven
function kjopVare(e) {
    
    var vareNummer = e.target.id;

    varer[vareNummer].handlekurv++;

    oppdaterHandlekurv();
}

function oppdaterHandlekurv() {

    var totalPris = 0;

    handlekurvEl.innerHTML = "<h3> Handlekurv </h3>";

    for (var i = 0; i < varer.length; i++) {
        if (varer[i].handlekurv > 0) {
            // hvis du kjøper mer enn en vare
            var varePris = varer[i].pris * varer[i].handlekurv;

            totalPris += varePris;

            handlekurvEl.innerHTML += "<p> " + varer[i].handlekurv + " x " + varer[i].navn + " (" + varePris.toFixed(2) + " kr)" + "</p>";
        } 
        
    }
    handlekurvEl.innerHTML += "Totalpris:" + totalPris.toFixed(2) + "kr.";
}