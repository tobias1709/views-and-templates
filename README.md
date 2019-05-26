# Views and Templates

Opgaven går ud på at oprette routes og benytte includes i ejs filer.

## Installation

Fork dette repository og klon det til din computer, og åben mappen i VSCode.

Kør kommandoen:  `npm install` for at installere de nødvendige modules

Kør også kommandoen: `npm install -g nodemon` for at installere nodemon på computeren, det modul sørger for at genstarte serveren hver gang en server-fil ændres, det er smart!

For at teste alt er installeret og sat op som det skal, køres kommandoen `npm start` og derefter burde siden være tilgængelig på http://localhost:3000 *(dette vil først virke efter grundstrukturen er sat helt op)*

## Opgave beskrivelse

I mappen `server` skal der oprettes en mappe til ejs dokumenterne, den kaldes for `views`.

I den nye `views` mappe oprettes en ny mappe kaldet `partials`, det er den navngivnings konvention alle andre benytter sig af, så det gør vi også.

Vi skal også have en mappe til de statiske filer som f.eks. stylesheets, javascripts og billeder. Derfor oprettes en mappe i roden af projektet, kaldet `public`

Opret to filer i `public` mappen: `styles.css` og `scripts.js` 

Din mappestruktur bør se sådan ud på nuværende tidspunkt *(de vigtige filer)*:

* **public/**
  * styles.css
  * scripts.js
* **server/**
  * **routes/**
    * routes.js
  * **views/**
    * **partials/**
* app.js


## Grund strukturen 
Der skal sættes 3 'sider' op, hvor der trænes at inkludere de rette `.ejs` filer, på de rette steder.

Så du skal oprette 3 filer i roden af `/server/views` mappen.

1. home.ejs
2. product.ejs
3. contact.ejs

Indsæt en grundlæggende html struktur på `home.ejs` som indeholder en `header`, `nav`, `main` og `footer` struktur.

* **views/**
  * **partials/**
  * contact.ejs
  * home.ejs
  * product.ejs

--- 

Samtidigt skal der oprettes en route for hver side, det foregår i filen `/server/routes/routes.js`

I den fil ligger allerede 1 route som tager sig af at indlæse `home` skabelonen.

Der skal oprettes 2 routes mere, her er et eksempel på hvordan `produkt` routen skal se ud.

```javascript
   app.get('/product', (req, res, next) => {
      res.render('product');
   });
```

Opret en der ligner, men hvor der står `contact` istedet for `product`

## Stylesheets og scripts
Opret en fil kaldet `styles.ejs` i `/server/views/partials/` mappen, og i den fil skives `<link rel="stylesheet" href="/styles.css">` tagget som peger på det stylesheet som ligger i roden af public mappen.

Men i stedet for at linke direkte til stylesheet fra `home.ejs` så inkluderes `styles.ejs` der hvor linket normalt ville være placeret... det samme skal gøres på de to andre sider lige om lidt.

* **views/**
  * **partials/**
      * styles.ejs
  * contact.ejs
  * home.ejs
  * product.ejs

---

Benyt samme koncept til at indlæse `scripts.js` filen, som skal indeholde et `<script src="/scripts.js"></script>` tag. placer include som det sidste inden `</body>` tagget.

## elementerne på siden

Den simple hjemmeside vi skal sætte op består af nogle elementer som går igen på flere sider, `nav` f.eks. skal være på alle siderne. Men der er også indhold som er unikt for hver side, f.eks. den tekst der skal være på forsiden.

De elementer der benyttes på mere end 1 side skal trækkes ud i en `.ejs` fil så den kan inkluderes, som f.eks. følgende elementer

* header.ejs 
* footer.ejs
* nav.ejs
* offers.ejs
* scripts.ejs
* styles.ejs 

Opret dem og inkluder dem der hvor de hører til, på de sider hvor de skal vises.

`offers` er tænkt som den tilbud kolonne der skal sidde til højre på produkt og kontakt siden.

