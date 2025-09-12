const skjema = document.getElementById("hjelp")
const svar = document.getElementById("svar")

skjema.addEventListener("subit", function(e) {
    e.preventDefault();

    const problem = document.getElementById('problem').value.trim();
    const tid = document.getElementById('tid').value.trim();
    const beskriv = document.getElementById('beskriv').value;

})