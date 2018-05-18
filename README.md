# Detai node setup

Dit is een opzet voor Detai node projecten. Het doel is om de opstartfase te versnellen en een consistente codestructuur na te volgen.

## Hoe werkt het?

### Stap 1 - Repository clone maken

Om te beginnen maak je een clone van de repository met behulp van een GUI zoals Sourcetree of in de command line.

`git clone [link naar repo]`

### Stap 2 - Nieuwe repository maken

Voor het nieuwe project maak je een nieuwe repository. Wij gebruiken hier [Gitlab](https://www.gitlab.com) voor.

### Stap 3 - Kopieer de code

Clone dit nieuwe repository net zoals je bij stap 1 hebt gedaan. Kopieer alle code uit de detai-node-setup repository en plak deze in het nieuwe project.

<!-- Als het goed is ziet je mappenstructuur er ongeveer zo uit:
```
├── src
│   ├── fonts
│   │
│   ├── images
│   │
│   ├── scripts
│   │   ├── modules
│   │   ├── main.js
│   │
│   ├── styles
│   │   ├── components
│   │   ├── generic
│   │   │   ├── animations.scss
│   │   │   ├── generic.scss
│   │   │   ├── objects.scss
│   │   │   ├── reset.scss
│   │   │   ├── variables.scss
│   │   ├── main.scss
│   │
│   ├── templates
│   │   ├── components
│   │   │   ├── base.html
│   │   │   ├── test.html
│   │   ├── index.html
│   │
│   └── .gitignore
│   └── gulpfile.js
│   └── package.json
│   └── README.md

``` -->

### Stap 4 - Gulp

1.  Open je terminal en navigeer naar je nieuwe project (bijv. `cd /Users/user/projects/detai-code-setup`).
2.  Typ `npm install` en druk op enter. Wacht tot het installatie proces klaar is.
3.  Typ `gulp start` en druk op enter. [localhost:8001](http://localhost:8001/) opent nu automatisch in je browser. Wanneer je [localhost:8001](http://localhost:8001/) al in je browser geopend hebt, typ dan `gulp` en druk op enter.

<!-- ### Productie

Wanneer het product klaar is voor productie kan je `gulp prod` typen in je terminal. Wanneer je op enter drukt worden de laatste optimalisaties uitgevoerd.

#### dist

In de map `dist` staan alle bestanden die je nodig hebt om de website live te zetten. Het is belangrijk dat je alleen de inhoud van deze map live zet. -->
