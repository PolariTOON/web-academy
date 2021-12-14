# Bulletin 12 - 26/04/2019

*Par Tristan LE GODAIS ([@PolariTOON](https://github.com/PolariTOON))*

Mardi sont sortis les nouvelles moutures de *Chrome* et *Node.js* ; petit résumé des nouveautés :

- *Chrome 74* apporte les nouveautés suivantes :

	- Du côté du *JS* :

		- Les déclarations de champs de classes privés (proposition en stage 3 ) sont désormais supportés, 3 mois après les déclarations de champs de classes publics, ce qui va permettre une encapsulation plus aisée des variables de classes

		- La proposition en stage 3 de la syntaxe *Hashbang Grammar* est supportées ; il s'agit uniquement de rendre valides les programmes débutant par `#!` en traitant une telle ligne en début de programme comme un commentaire

		- La proposition en stage 3 `Intl.Locale` est ajoutée

		- La fonctionnalité *Import maps* visant à permettre les *bares imports* en *JavaScript* (pour importer une bibliothèque juste par son nom et non son chemin) est en test

		- Le premier module natif *JavaScript* dans les navigateurs de tous les temps, `std:kv-storage`, a été ajouté ; cela intervient dans le cadre d'un effort de standardisation du futur système de bibliothèque standard de *JavaScript*

	- Du côté du *CSS* :

		- Les événements relatifs aux transitions peuvent désormais être écoutés en*JavaScript*

	- Pour plus d'informations, consultez notamment les pages [https://developers.google.com/web/updates/2019/04/nic74,](https://developers.google.com/web/updates/2019/04/nic74,) [https://developers.google.com/web/updates/2019/03/devtools,](https://developers.google.com/web/updates/2019/03/devtools,) [https://v8.dev/blog/v8-release-74](https://v8.dev/blog/v8-release-74) et [https://developers.google.com/web/updates/2019/03/kv-storage](https://developers.google.com/web/updates/2019/03/kv-storage)

- *Node.js 12* est sorti et deviendra la prochaine version à support étendu vers octobre ; énormément de nouveautés sont présentes, dont certaines dont je vous ai déjà parlé :

	- Les fonctionnalités standard `Array.prototype.{flat, flatMap}`, `Object.fromEntries`, `String.prototype.matchAll`, `Symbol.prototype.description`, *Well-formed `JSON.stringify`*, un tri `Array.prototype.sort` stable

	- Les fonctionnalités en stage 3 que sont `globalThis` et les déclarations de champs de classes publics et privés

	- De nouvelles API d'internationalisation en cours de standardisation

	- La tant attendue nouvelle implémentation des modules *ECMAScript*, toujours derrière le *flag* `--experimental-modules`, plus stable, avec des nouveautés même si elle ne que partielle ; on peut espérer qu'elle soit terminée et disponible par défaut d'ici octobre ; en attendant, il est demandé de ne pas publier de paquet utilisant les modules *ECMAScript* pour *Node.js*

	- La dernière version du protocole *TLS*, *TLS 1.3* a été implémentée, remplaçant ainsi la version précédente qui avait 11 ans

	- Diverses API comme `fs.promises` (la version asynchrone de `fs`) désormais considérées comme stables

	- Pour plus d'informations, consultez les pages [https://medium.com/@nodejs/introducing-node-js-12-76c41a1b3f3f,](https://medium.com/@nodejs/introducing-node-js-12-76c41a1b3f3f,) [https://medium.com/@nodejs/announcing-a-new-experimental-modules-1be8d2d6c2ff](https://medium.com/@nodejs/announcing-a-new-experimental-modules-1be8d2d6c2ff) et [https://2ality.com/2019/04/nodejs-esm-impl.html](https://2ality.com/2019/04/nodejs-esm-impl.html)
