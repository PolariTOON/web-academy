# Bulletin 35 - 07/01/2020

*Par Tristan LE GODAIS ([@PolariTOON](https://github.com/PolariTOON))*

- *Firefox* est sorti en version *72* aujourd'hui :

	- Les cycles de développement passent de 6 à 8 semaines à 4 semaines ; les versions sortiront donc plus souvent

	- Du côté des outils de développement :

		- Le bloc-notes *JavaScript* a été retiré ; la console multiligne constitue un bon remplacement si vous aviez l'habitude d'utiliser cette fonctionnalité

	- Du côté d'*HTTP* (c'est rare !) :

		- Le type `image/webp`, initialement enlevé de l'en-tête `Accept` des requêtes dans *Firefox 66*, a été réintroduit pour des raisons d'interopérabilité avec *Chrome* ; la valeur redevient donc `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8`

	- Du côté du *JS* :

		- L'opérateur *Nullish coalescing Operator* (`??`), dont je vous parlais il y a deux mois, a été introduit

		- À l'instar de *Chrome* il y a quatre mois, les formulaires `<form></form>` émettent désormais un évènement `"formdata"` lors de leur soumission

	- Du côté des *CSS* :

		- Les propriétés `rotate`, `scale` et `translate`, désormais stables, sont désormais exposées et permettent de spécifier indépendamment la rotation, l'échelle et la translation d'un élément, sans avoir systématiquement recours à la propriété `transform`

		- Les propriétés `offset`, `offset-anchor`, `offset-distance`, `offset-path` et `offset-rotate` (anciennement désignées `motion-*`) ont été ajoutées et permettent de définir la trajectoire exacte d'un élément ; le cas d'utilisation récurrent est l'animation des éléments mouvants

		- L'attribut `part=""` et le pseudo-élément `::part()` sont désormais supportés et permettent d'appliquer des styles spécifiques à des descendants donnés des *shadow hosts*

	- Pour plus d'informations, consultez les pages [https://hacks.mozilla.org/2020/01/firefox-72-our-first-song-of-2020/,](https://hacks.mozilla.org/2020/01/firefox-72-our-first-song-of-2020/,) [https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/72](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/72) et [https://www.fxsitecompat.dev/en-CA/versions/72/](https://www.fxsitecompat.dev/en-CA/versions/72/)

- *QuickJS*, le moteur *JavaScript* de Fabrice Bellard ([https://bellard.org/quickjs/](https://bellard.org/quickjs/)) supporte d'ores et déjà les décimaux `BigDecimal`, avant même que le travail de spécification ait véritablement commencé de la part du *TC39* ! la proposition initiale ([https://github.com/littledan/proposal-bigdecimal](https://github.com/littledan/proposal-bigdecimal)) devrait être présentée le mois prochain (mais on en a encore pour quelques années avant de voir arriver ça dans les navigateurs)
