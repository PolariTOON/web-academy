# *Web Academy* [<img width="100" height="100" alt="" src="resources/web-academy.png" align="right"/>](//polaritoon.github.io/web-academy/)

## Présentation

La *Web Academy* est une formation sur le *web* dispensée aux élèves de [*Telecom Nancy*](//telecomnancy.univ-lorraine.fr/) par l'association [*Telecom Nancy Services*](//tnservices.fr/). Ce dépôt contient les supports de cours, des énoncés et des corrigés d'exercices et de travaux pratiques, ainsi que des exemples pour la session 2018-2019.

## Documents

### Supports de cours

- [Introduction au développement *web*](lessons/01-web/index.pdf)

- [Structuration de page *web* en *HTML*](lessons/02-html/index.pdf)

- [Mise en forme de page *web* en *CSS*](lessons/03-css/index.pdf)

- [Manipulation de page *web* en *JS*](lessons/04-js/index.pdf)

### Sujets de travaux pratiques

***HTML*** :

- Structure d'un *CV* ([énoncé](labs/01-html/subject/index.pdf), [squelette](labs/01-html/skeleton/index.html), [corrigé](labs/01-html/correction/index.html))

***CSS*** :

- Reproduction du style du site d'un club ([énoncé](labs/02-css/subject/index.pdf), [squelette](labs/02-css/skeleton/index.css), [objectif](labs/02-css/goal.png), [corrigé](labs/02-css/correction/index.css))

***JS*** :

- Conception d'un moteur de recherche ([énoncé](labs/03-js/subject/index.pdf), [squelette](labs/03-js/skeleton/index.js), [corrigé](labs/03-js/correction/index.js))

### Exercices

- Corps ([énoncé](exercises/01-body/subject/index.pdf), [squelette](exercises/01-body/skeleton/index.html), [objectif](exercises/01-body/goal.png), [corrigé](exercises/01-body/correction/index.html))

- Tableaux ([énoncé](exercises/02-table/subject/index.pdf), [squelette](exercises/02-table/skeleton/index.html), [objectif](exercises/02-table/goal.png), [corrigé](exercises/02-table/correction/index.html))

- Formulaires ([énoncé](exercises/03-form/subject/index.pdf), [squelette](exercises/03-form/skeleton/index.html), [objectif](exercises/03-form/goal.png), [corrigé](exercises/03-form/correction/index.html))

### Exemples

- [Document vide](examples/01-head/index.html)

- [Présentation des formulaires](examples/02-form/index.html)

## Lancement du serveur local

À partir d'un certain point de la formation, vous aurez besoin d'un serveur local pour effectuez vos tests. Le script [`package.js`](package.js) vous permet d'en lancer un rapidement, avec le minimum de configuration. Pour cela, installez au préalable *Node.js* au moins en version 12.17.0 (à l'aide de [*nvm*](https://github.com/nvm-sh/nvm) par exemple) et clonez ce dépôt. Ensuite, à la racine du projet, exécutez le fichier `package.sh` si vous êtes dans un environnement de type *Unix*, `package.bat` sous *Windows* ou bien la commande suivante :

```sh
$ npm start
```

## Note sur les fichiers *PDF*

Les supports de cours et les énoncés de travaux pratiques et d'exercices au format *PDF* ont été générés via le navigateur *Firefox 67.0.4* sous *Ubuntu 19.04* à partir d'une page *web* codée en *HTML* et *CSS*.
