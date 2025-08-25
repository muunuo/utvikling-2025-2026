// enkel js for innsending av skjma uten backend

const skjema = document.getElementById('kontaktSkjema');
const resultat = document.getElementById('resultat');

skjema.addEventListener('submit', function(e) {
    e.preventDefault(); // stopper vanelig innsending

    // hent verdi fra skjema
    const navn = document.getElementById('navn').value.trim();
    const epost = document.getElementById('epost').value.trim();
    const fag = document.getElementById('fag').value;
    const melding = document.getElementById('melding').value.trim();

    // enkel oppsummering for bruker
    resultat.innerHTML = `
    <h3>Takk for innsendelsen!</h3>
    <p><strong>Navn:</strong> ${navn || '(ikke oppgitt)'}</p>
	<p><strong>E-post:</strong> ${epost || '(ikke oppgitt)'}</p>
	<p><strong>Favorittfag:</strong> ${fag}</p>
	<p><strong>Melding:</strong> ${melding || '(ingen melding)'}</p>
    `;
});