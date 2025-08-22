
# CSS

## Gridcontainer

```javascript
html, body {
    margin: 0;
    padding: 0;
}

.overskrift { grid-area: overskrift; }
.meny { grid-area: meny; }
.paragraf { grid-area: paragraf; }
.media { grid-area: media; }

.grid-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 
    'overskrift overskrift overskrift overskrift overskrift'
    'meny meny meny meny meny'
    'paragraf paragraf paragraf paragraf paragraf'
    'media media media media media';
}

```

Html delen: 

Husk å bruke samme navn som i CSS

```javascript
<body>
    <div class="grid-container">

        <div class="overskrift">
            <h1 class="farge">Overskrift</h1> 
        </div>
    </div>
```

### Flex
Bruk flex til å plasere elementer inne i en gridcontainer.

```javascript
.flex{
    display: flex;
    justify-content: center;
    align-items: center;
}
```

## Annet

### Flyt
Bruk dette til å la elementer stå ved siden av hverandre.

```javascript
.flytL {
    float: left;
}
```
### To ting ved siden av hverandre
```javascript
    .media{
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: row; /* bytt row til role reverse for å bytte hvor to elementer er */
    justify-content: space-between;
    align-items: center; /* centrerer vertikalt */
    min-height: 100vh;
    gap: 2rem;
}
```

### Endre farge

Color endrer farge på tekst

```javascript
body{
    color: rgb(50, 46, 54);
    background-color: rgb(246, 245, 241);
}
```

### Endre tekst

Skrifttypen du ønsker å bruke kan endres. 

Hvordan å gjøre dette, og infoen du trenger for dette kan du finne på google font.

### Sette opp bokser

Dette brukes mest for å få en boks rundt en link. Men vær kreativ med det.

```javascript
    border: solid lemonchiffon 0.5rem;
    border-radius: 0.5rem;
```

### List style

Hvis du vil at en link ikke skal se ut som en link (kansje det er en del av menyen din) så kan du bruke det under for å få linken til å se ut som en vanlig svart ord.

```javascript
list-style: none;
    color: black;
    text-decoration: none;
```

