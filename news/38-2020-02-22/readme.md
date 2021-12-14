# Bulletin 38 - 22/02/2020

*Par Tristan LE GODAIS ([@PolariTOON](https://github.com/PolariTOON))*

- La semaine dernière est sorti *Firefox 73* ; rapide tour des nouveautés :

	- Du côté des *CSS* :

		- Les propriétés logiques `overscroll-behavior-block` et `overscroll-behavior-inline`sont désormais suportées

		- Les propriétés `letter-spacing` et `word-spacing` ne fonctionnent plus seulement en *HTML* mais aussi en *SVG*

	- Du côté du *JS* :

		- La méthode `Intl.DateTimeFormat.prototype.formatToParts()` supporte désormais les options `relatedYear` et `yearName`

	- Du côté de *MathML* :

		- L'élément `<mfenced></mfenced>` a été retiré

	- Du côté de *WebDriver* (vous ai-je déjà parlé de *WebDriver* ? c'est une des APIs standardisées par le *W3C* qui permettent de contrôler un navigateur ; à noter que des alternatives émergentes sont *puppeteer* de *Google* et *playwright* de *Microsoft*) :

		- `WebDriver:Print` a été implémenté et permet d'imprimer un document dans un PDF ; il est donc par exemple possible de convertir automatiquement un document *HTML* en *PDF*, comme par exemple les cours de la *WebAcademy* ! (jusqu'à maintenant je devais le faire à la main)

	- Pour plus d'informations, consultez les pages [https://hacks.mozilla.org/2020/02/firefox-73-is-upon-us/,](https://hacks.mozilla.org/2020/02/firefox-73-is-upon-us/,) [https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/73](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/73) et [https://www.fxsitecompat.dev/en-CA/versions/73/](https://www.fxsitecompat.dev/en-CA/versions/73/)
