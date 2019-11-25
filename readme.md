# *Web Academy*

## Présentation

La *Web Academy* est une formation sur le *web* dispensée aux élèves de [*Telecom Nancy*](//telecomnancy.univ-lorraine.fr/) par l'association [*Telecom Nancy Services*](//tnservices.fr/). Ce dépôt contient les supports de cours, les sujets de travaux pratiques, des exercices et leur correction ainsi que des exemples pour la session 2018-2019.

## Documents

### Supports de cours

- [Introduction au développement *web*](chapters/01-web/index.html.pdf)

- [Structuration de page *web* en *HTML*](chapters/02-html/index.html.pdf)

- [Mise en forme de page *web* en *CSS*](chapters/03-css/index.html.pdf)

- [Manipulation de page *web* en *ECMAScript*](chapters/04-es/index.html.pdf)

### Sujets de travaux pratiques

***HTML*** :

- Structure d'un *CV* ([sujet](practical-works/01-html/subject.html.pdf), [squelette](practical-works/01-html/index.html), [correction](practical-works/01-html/correction.html))

***CSS*** :

- Reproduction du style du site d'un club ([sujet](practical-works/02-css/subject.html.pdf), [squelette](practical-works/02-css/resources/index.css), [objectif](practical-works/02-css/goal.png), [correction](practical-works/02-css/resources/correction.css))

***ECMAScript*** :

- Conception d'un moteur de recherche ([sujet](practical-works/03-es/subject.html.pdf), [squelette](practical-works/03-es/resources/index.js), [correction](practical-works/03-es/resources/correction.js))

### Exercices

***HTML*** :

- Mon super site ([sujet](exercices/01-html/subject.html.pdf), [squelette](exercices/01-html/index.html), [objectif](exercices/01-html/goal.png), [correction](exercices/01-html/correction.html))

- Tableaux ([sujet](exercices/02-html/subject.html.pdf), [squelette](exercices/02-html/index.html), [objectif](exercices/02-html/goal.png), [correction](exercices/02-html/correction.html))

- Formulaires ([sujet](exercices/03-html/subject.html.pdf), [squelette](exercices/03-html/index.html), [objectif](exercices/03-html/goal.png), [correction](exercices/03-html/correction.html))

### Exemples

***HTML*** :

- [Document vide](examples/01-html/index.html)

- [Présentation des formulaires](examples/02-html/index.html)

## Lancement du serveur local

À partir d'un certain point de la formation, vous aurez besoin d'un serveur local pour effectuez vos tests. Le script [`package.js`](package.js) vous permet d'en lancer un rapidement, avec le minimum de configuration. Pour cela, installez au préalable *Node.js* au moins en version 13.2.0 (à l'aide de [*nvm*](https://github.com/nvm-sh/nvm) par exemple) et clonez ce dépôt. Ensuite, à la racine du projet, exécutez le fichier `package.sh` si vous êtes dans un environnement de type *Unix*, `package.bat` sous *Windows* ou bien la commande suivante :

```sh
$ npm start
```

## Note sur les fichiers `.html.pdf`

Les supports de cours et les sujets de travaux pratiques et d'exercices qui portent l'extension `.html.pdf` ont été générés via le navigateur *Firefox 67.0.4* sous *Ubuntu 19.04* à partir d'une page *web* codée en *HTML* et *CSS*.
