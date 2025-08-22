# Grunnleggende HTML og CSS

## Innholdsliste

# Html
* Div
* Starte nytt prosjekt
* Koble sammen dokument
* Skrift
* Id/Class
* Link
* Bilde

### HTML 

## Grunnleggende

    Div er en måte å samle kode på. Det er en nyttig måte å kunne bruke class eller id. 

#### Starte et nytt prosjekt 

1) Sett opp dokumentene du trenger
- index.html
- style.css
- code.js

> Gjør Jo Bjørnar stolt (og andre iritert) med å bruke den norske versjonen av navnene
>- index.html
>- stilark.css
>- kode.js



!

Er alt du trenger for å lage all koden du ser i bildet her.
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

### Koble sammen dokument

```javascript
<link rel="stylesheet" href="style.css">
    <script src="/01-introoppgave/code.js"></script>
```

### Skrift

```javascript
<h1>Overskrift</h1>
<p>paragraf skrives her</p>
```
Hvis du trenger fylletekst kan du skrive inn lorem i tekstfeltet.

lorem*3 for å få tre ganger så mye fylletekst


### Id/Class

Id er for et element
Class er for flere element

```javascript
    <div class="paragraf"></div>
```

bytt ut "class" med "id" for å lage en id.

### Link


Linke sammen to nettsider i samme fil
```javascript
<a class="mb" href="eksempel.html">Eksempel</a>
```
Hvis du må ut av filen du er i kan du ta ../ før navnet på filen

### Bilde

Når du skal ha et bilde burde du bruke Figure. Dette er en del av HTML-5
```javascript
<figure>
    <img src="NDLA-Paraply.jpg"alt="Beskrivelse på bilde går her">
    <figcaption>Bilde av NDLA</figcaption>
</figure>
```




