let handleKurvEl = document.getElementById("handlekurv")

let varerEl = document.getElementById("varer")

let varer = [
    {navn: "Gullerot", pris: 4.90, bilde: "gullerot.jpg" ,handlekurv: 0, },  
    {navn: "Tomat", pris: 5.0, bilde: "tomat.jpg" ,handlekurv: 0, },  
    {navn: "Agurk", pris: 2.40, bilde: "agurk.jpg" ,handlekurv: 0, },  
]

for (let index = 0; index < varer.length; index++) {
    // lager en div til varen
    var vareDiv = document.createElementI("div");
    vareDiv.className = "vare";

    // lager er overskrift for varen
    vareOverskrift = document.createElement("h3");
    vareOverskrift.innerHTML = varer[i].navn;

    // viser et bilde av varen
    vareBilde = document.createElement("img");
    vareBilde.src = "bilderEksempel/" + varer[i].bilde;

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
    vareDiv.appendChild(vareBild);
    vareDiv.appendChild(varePris);
    vareDiv.appendChild(vareKnapp);

    // "Legger til div-elementet i elementet med alle varene"
    varerEl.appendChild(vareDiv);
}

// legger en vare i handlekurven
function kjopVare() {
    
    var vareNummer = e.target.id;

    varer[vareNummer].handleKurv++;

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

            handleKurvEl.innerHTML += "Totalpris:" + totalPris.toFixed(2) + "kr.";
        } 
        
    }
    
}