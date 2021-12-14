# Bulletin 19 - 10/07/2019

*Par Tristan LE GODAIS ([@PolariTOON](https://github.com/PolariTOON))*

- *Firefox 68* est sorti ce mardi en version stable et ESR et apporte pas mal de nouveautés pour les développeurs :

	- Du côté des outils de développement :

		- Les problèmes d'accessibilité en termes de contraste entre couleurs sont désormais signalés, selon les critères du standard *WCAG* (un standard fondamental du *web* qui décrit les conditions pour qu'une page *web* soit accessible à toute personne)

		- Un nouvel outil permet d'émuler (quelque peu) l'apparence d'une page *web* telle qu'elle serait imprimée

		- L'espacement entre les lettres peut être ajusté grâce à un outil dédié

	- Du côté du *JS* :

		- `BigInt`, le nouveau type de valeurs numériques entières en cours de standardisation (stage 3 / 4) a été implémenté ; il est ainsi possible de manipuler des entiers d'une taille arbitraire, ce qui jusque là n'était pas possible avec le type historique de valeurs numériques flottantes, `Number`

		- L'API *Visual Viewport* est supportée sous *Android*

		- Les nombreuses méthodes génériques non-standard de `String`, introduites en 2005 mais conservés jusqu'alors pour des raisons de compatibilité, ont été retirées

	- Du côté des *CSS* :

		- La nouvelle spécification *CSS Scroll Snap* a été implémentée et introduit un certain nombre de nouvelles propriétés *CSS* (`scroll-snap-*`, `scroll-margin-*` et `scroll-padding-*`) ; ce faisant, les propriétés définies par l'ancienne spécification *CSS Scroll Snap Points* ont été retirées (et ça casse ma technique d'aperçu avant impression des cours de la *Web Academy*...) ; un objectif de ce module *CSS* est de permettre la réalisation de carrousels sans avoir recours aux très nombreuses bibliothèques *JavaScript* qui simulent le défilement d'une manière trop peu accessible

		- Le nouveau pseudo-élément `::marker` est désormais supporté, ainsi que son interaction avec les compteurs *CSS* et notamment la toute nouvelle propriété `counter-set` (mais par contre ça casse mon système de pagination des cours de la *Web Academy*...) ; standardisés ensemble dans le cadre du module *CSS Lists Level 3*, ils permettent enfin d'expliquer et de modifier le comportement et l'apparence des puces des items de listes `<li></li>`, des intitulés `<summary></summary>` et plus généralement de tous les éléments et pseudo-éléments avec la propriété `display: list-item` (depuis le temps que j'attendais ça !)

		- La propriété non-standard `-webkit-line-clamp` est supportée (oui, oui une propriété propriétaire *Webkit*) à des fins de compatibilité en attendant la finalisation de la standardisation de la propriété `line-clamp` ; uniquement fonctionnelle en interaction avec la propriété non standard `display: -webkit-box` (qui date d'avant *FlexBox*), elle permet de borner le nombre de lignes de texte affichées d'un élément

	- Du côté de *HTML* :

		- L'attribut `disabled` sur un élément `<link/>` permet de désactiver le chargement d'une feuille de style

		- Le chargement asynchrone d'une image est désormais possible via la méthode `HTMLImageElement.prototype.decode()` ; il était précédemment nécessaire d'avoir recours à un évènement `"load"` pour cela

	- Pour plus d'informations, consultez les pages [https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/68,](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/68,) [https://hacks.mozilla.org/2019/07/firefox-68-bigints-contrast-checks-and-the-quantumbar/](https://hacks.mozilla.org/2019/07/firefox-68-bigints-contrast-checks-and-the-quantumbar/) et [https://www.fxsitecompat.dev/en-CA/versions/68/](https://www.fxsitecompat.dev/en-CA/versions/68/)

- La première version publique de *Firefox Preview* (*Fenix*) peut être installée depuis le 27 juin ; il s'agit d'une pré-version de la prochaine mouture de *Firefox* pour *Android* (*Fennec*) qui intègre *GeckoView*, le moteur graphique *standalone* de *Mozilla* initialement inclus dans *Firefox Focus* / *Klar* ; cette bibliothèque constitue une alternative viable à la *WebView* *Android* propulsée par *Blink* (le moteur graphique de *Chrome*, vous suivez ?) et a été conçu pour pouvoir servir de base à d'autres navigateurs ou applications, en plus d'offrir de meilleures performances par rapport à la version actuelle de *Firefox* pour *Android* ; pour plus d'informations, consultez les pages [https://blog.mozilla.org/futurereleases/2019/06/27/reinventing-firefox-for-android-a-preview/,](https://blog.mozilla.org/futurereleases/2019/06/27/reinventing-firefox-for-android-a-preview/,) [https://hacks.mozilla.org/2019/06/geckoview-in-2019/](https://hacks.mozilla.org/2019/06/geckoview-in-2019/) et [https://www.soeren-hentzschel.at/firefox-android/fenix-firefox-preview-veroeffentlicht/](https://www.soeren-hentzschel.at/firefox-android/fenix-firefox-preview-veroeffentlicht/)
