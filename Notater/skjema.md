```javascript

```
I dag skal vi lage et skjema som bruker kan svare på. 

Begynn med et ! for å starte prosjekt
Link og Script (med src) for å linke filer sammen

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scad=1.0">
    <title>Tester</title>
    <link rel="stylesheet" href="skjema.css">
    <script src="skjema.js"></script>
</head>
```
No som vi har det skjedelige gjordt, la oss begynne på HTML.

(alt under skrives inne i body med mindre annet sies)

### HTML

Som med de fleste prosjekt begynner vi med en div. Denne diven skal lage en boks rundt skjemaet, så vi kaller den for boks
```javascript
    <div class="boks"></div>
```

Inne i denne kommer vi til å bruke HTML5 til å makere koden våres på best mulig måte.

Kort sagt: bruk "header" i stede for en div med en classe i den for overskriften

vi gjør det samme for "main"

```javascript
        <header>
            <h1>Skjema</h1>
        </header>

        <main> </main>
```
<body>
    <div>
        <main>
            <h2>formeksempel (&lt;form&gt;)</h2>
            <p>Flere input-typer og enkel JS-håntering</p>

            <!-- vi beholder "action" tomt fordi vi honterer innsendigen i JavaScript -->
            <form id="kontaktSkjema">

                <!-- tekstfelt -->
                <label for="navn">Navn:</label>
                <input type="text" id="navn" name="navn" placeholder="skriv ditt fornavn" required>

                <!-- e-post -->
                <label for="e-post">E-post:</label>
                <input type="email" id="epost" name="epost" placeholder="navn@eksempel.no" required>

                <!-- passord (visuell demonstrasjon) -->
                <label for="passord">Passord:</label>
                <input type="password">

                <!-- Checkbox og radio -->
                <fieldset>
                    <legend>Velg interesser</legend>
                    <label><input type="checkbox" name="interesser" value="koding">Koding</label>
                    <label><input type="checkbox" name="interesser" value="design">Design</label>
                </fieldset>

                <fieldset>
                    <legend>Kjønn (radio)</legend>
                    <!-- #gjøre at du kan unselecte -->
                    <label><input type="radio" name="kjonn" id="mann">Mann</label>
                    <label><input type="radio" name="kjonn" id="kvinne">Kvinne</label>
                    <label><input type="radio" name="kjonn" id="annet">annet/vil ikke svare</label>
                </fieldset>

                <label for="fag">Favorittfag:</label>
                <select name="fag" id="fag">
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="js">JavaScript</option>
                </select>

                <label for="melding">Melding:</label>
                <textarea name="melding" id="melding" rows="4" placeholder="Skriv en kort melding..."></textarea>

                <button type="submit" class="btn">Send</button>
            </form>

            <div id="resultat"></div>
        </main>
        
    </div>
</body>
</html> 
```