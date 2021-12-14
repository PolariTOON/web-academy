# Bulletin 18 - 04/06/2019

*Par Tristan LE GODAIS ([@PolariTOON](https://github.com/PolariTOON))*

- Jusqu'à jeudi se tient la réunion bimestrielle du *TC39* et deux nouvelles importantes viennent de tomber :

	- La proposition d'import dynamique de modules via `import()` a (enfin !) été standardisée ; il est donc désormais possible d'importer des modules à la volée en *JavaScript* ; de plus c'est déjà supporté dans *Firefox*, *Chrome* et *Safari* ; cela signifie que le système de modules standard surpasse enfin (à mon sens) les anciens systèmes comme *CommonJS*, encore utilisé par *Node.js* par exemple

	- Qui a dit que *JavaScript* n'avait pas de type d'entiers ? désormais ce n'est plus le cas avec la standardisation d'un nouveau type de valeurs primitives, `BigInt`, qui permet de représenter des entiers d'une grandeur arbitraire ; là encore c'est déjà implémenté dans *Chrome*, *Node.js* et ça arrive dans la prochaine version de *Firefox* !

	- Pour plus d'informations, je vous invite à consulter ces articles d'Axel Rauschmayer : [https://2ality.com/2017/01/import-operator.html](https://2ality.com/2017/01/import-operator.html) et [https://2ality.com/2017/03/es-integer.html](https://2ality.com/2017/03/es-integer.html)

- Par ailleurs, Chrome 75 sort cette nuit et apporte quelques changements notables :

	- Du côté du *JS* :

		- La proposition en stage 3 *Numeric separators* a été implémentée ; il s'agit d'autoriser le caractère souligné `_` au sein des littéraux de valeurs numériques (`Number` ou `BigInt`) dans le but de les rendre plus lisibles (`1_000_000_000n` au lieu de `1000000000n` par exemple)

		- La deuxième itération de l'API *Web Share* est désormais supportée et permet notamment de partager directement des fichiers avec d'autres applications

	- Pour plus d'informations, consultez les pages [https://developers.google.com/web/updates/2019/06/nic75,](https://developers.google.com/web/updates/2019/06/nic75,) [https://developers.google.com/web/updates/2019/04/devtools](https://developers.google.com/web/updates/2019/04/devtools) et [https://v8.dev/blog/v8-release-75](https://v8.dev/blog/v8-release-75)

- *Node.js 12.4* est également sorti aujourd'hui :

	- Suite à sa standardisation par le *WHATWG* dans le cadre du langage *HTML*, l'import de modules *JSON* est désormais activé avec seulement le *flag* `--experimental-modules` ; auparavant les deux options `--experimental-modules` et `--experimental-json-modules` étaient nécessaires
