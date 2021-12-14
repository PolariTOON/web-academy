# Bulletin 6 - 23/03/2019

*Par Tristan LE GODAIS ([@PolariTOON](https://github.com/PolariTOON))*

Les informations de la semaine :

- La version *66* de *Firefox* est sortie mardi avec les nouveautés suivantes :

	- Du côté des *CSS* :

		- Plusieurs propriétés logiques ont été ajoutées dont `{padding, margin, border, inset}-{block, inline}` notamment ; ces propriétés constituent une alternative à leurs versions originales `{padding, margin, border}-{top, right, bottom, left}` et `position` mais qui tiennent compte du sens d'écriture / de lecture du texte

		- Les mots-clés `min-content` et `max-content` ont été dé-préfixés et sont désormais supportés par un certain nombre de propriétés *CSS* ; ils constituent entre autres une meilleure alternative aux bidouilles à base de `display: table;` pour centrer des éléments de taille variable

	- Mais aussi :

		- Désactivation du démarrage automatique de certains contenus sonores par défaut

	- Pour plus d'informations, consultez les pages [https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/66,](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/66,) [https://hacks.mozilla.org/2019/03/firefox-66-the-sound-of-silence/](https://hacks.mozilla.org/2019/03/firefox-66-the-sound-of-silence/) et [https://www.fxsitecompat.com/en-CA/versions/66/](https://www.fxsitecompat.com/en-CA/versions/66/)

- Le *TC39* qui spécifie *ECMAScript* a officiellement lancé sont site *web* lundi : [https://tc39.github.io/](https://tc39.github.io/) ; vous pouvez y découvrir l'état des propositions sur le point d'intégrer le langage ; plus d'informations ici : [https://hacks.mozilla.org/2019/03/a-homepage-for-the-javascript-specification/](https://hacks.mozilla.org/2019/03/a-homepage-for-the-javascript-specification/)

- Une *pull request* a été ouverte lundi pour intégrer une nouvelle implémentation des modules *ECMAScript* à *Node.js* à partir de la version *12* qui sort le mois prochain, et même potentiellement de la version *10* : [https://github.com/nodejs/node/pull/26745](https://github.com/nodejs/node/pull/26745) ; cette nouvelle implémentation demande toujours d'utiliser l'option `--experimental-modules` pour l'instant mais garantit une meilleure interopérabilité entre les modules *CommonJS* actuels et les modules *ECMAScript* en introduisant entre autres le champ `type` dans le fichier `package.json` et les fichiers `*.cjs` qui utilisent explicitement les modules *CommonJS* ; on attend encore l'annonce officielle qui ne devrait pas tarder
