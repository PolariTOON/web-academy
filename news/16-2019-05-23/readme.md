# Bulletin 16 - 23/05/2019

*Par Tristan LE GODAIS ([@PolariTOON](https://github.com/PolariTOON))*

- Ce mardi est sorti *Firefox 67* avec un peu de retard à cause de la désactivation inopinée des extensions de tous les utilisateurs le *week-end* du 4 mai ; cependant cette version apporte un certain nombre de nouveautés intéressantes :

	- Du côté du *JS* :

		- La méthode `String.prototype.matchAll`, désormais standard (souvenez-vous, je vous en parlais il y a deux mois), est supportée

		- La proposition en stage 3 de la syntaxe *Hashbang Grammar* (les commentaires `#!` en début de script) est supportée également

		- La proposition en stage 3 `import()`, c'est-à-dire les imports dynamiques de modules *ECMAScript*, est maintenant exposée dans la version stable de *Firefox*, ce qui en fait déjà le troisième navigateur à l'implémenter ; cela fait désormais plus de deux ans et demi que cette proposition attend d'être standardisée à cause des craintes de certains délégués d'*Ecma* (l'organisme qui spécifie *ECMAScript*), qui la jugent potentiellement incompatible avec la future proposition visant à étendre les `Realm`s (désomais connue sous le nom de *Secure ECMAScript*, ou *SES*) ; cependant le feu vert semble avoir été donné et on peut enfin espérer la standardisation dans deux semaines, lors de la réunion bimestrielle du *TC39* ! je vous tiendrai au courant !

	- Du côté des *CSS* :

		- Le mot-clé universel `revert`, qui permet de restaurer la valeur originale d'une propriété (telle que définie par l'*User-Agent*, c'est-à-dire le navigateur), a été ajouté et constitue un complément aux valeurs universelles `unset`, `initial` et `inherit`

		- La *media query* `prefers-color-scheme` est désormais implémentée, et ceci selon la dernière version de la spécification (contrairement à *Safari*) ; nous disposons donc de deux navigateurs indépendants à supporter les thèmes (clairs, sombres et sans-préférence) ! un certain nombre de sites propose déjà deux versions de leurs pages via ce nouveau mécanisme

	- Pour plus d'informations, consultez certaines de ces pages [https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/67,](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/67,) [https://hacks.mozilla.org/2019/05/firefox-67-dark-mode-css-webrender/](https://hacks.mozilla.org/2019/05/firefox-67-dark-mode-css-webrender/) et [https://www.fxsitecompat.com/en-CA/versions/67/](https://www.fxsitecompat.com/en-CA/versions/67/)

- D'autres nouvelles relatives aux modules en *ECMAScript* :

	- Si vous avez bien suivi, vous n'êtes pas sans savoir que :

		- Tous les navigateurs supportent déjà les modules *ECMAScript* statiques via l'instruction `import` et que *Node.js* dispose d'une implémentation expérimentale

		- *Firefox*, *Chrome* et *Safari* supportent l'import dynamique de modules *ECMAScript* (autant dans un script classique que dans un script modulaire) et que *Node.js* a aussi une implémentation expérimentale

	- Par contre saviez-vous que :

		- *Node.js 12.3*, sorti mardi, supporte également les modules *JSON* (`import "./structured-data.json";`) et *Web Assembly* (`import "./low-level.wasm";`), toujours de manière expérimentale

		- L'import de modules *JSON* a été standardisé par le *WHATWG* et intégré au langage *HTML* cette semaine

		- Les travaux débutent sur la généralisation des imports *ECMAScript* aux formats *HTML*, *CSS*, *JSON*, *Web Assembly* et *WebIDL*, connue sous le nom de *Synthetic Modules*, qui dispose à la fois du soutien des auteurs de spécifications et des concepteurs de navigateurs, en plus de l'enthousiasme des développeurs

	- Vous trouverez plus d'informations dans les pages [https://github.com/nodejs/node/pull/27752,](https://github.com/nodejs/node/pull/27752,) [https://github.com/w3ctag/design-reviews/issues/375,](https://github.com/w3ctag/design-reviews/issues/375,) [https://github.com/nodejs/node/pull/27659](https://github.com/nodejs/node/pull/27659) et [https://github.com/w3ctag/design-reviews/issues/377](https://github.com/w3ctag/design-reviews/issues/377)
