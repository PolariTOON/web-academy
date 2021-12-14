# Bulletin 26 - 23/10/2019

*Par Tristan LE GODAIS ([@PolariTOON](https://github.com/PolariTOON))*

Pas mal de nouvelles aujourd'hui avec trois sorties importantes :

- *Firefox* est sorti hier en version *70* avec un nouveau logo et quelques nouveautés :

	- Du côté des outils de développement :

		- Les propriétés sans effet sont désormais signalées dans le panneau des règles *CSS*

		- Le *colorpicker* indique désormais le niveau d'accessibilité du contraste (enfin il paraît parce que j'ai pas ça dans ma version)

		- L'onglet d'inspection de l'accessibilité signale désormais trois types de problèmes d'accessibilité (manque de contraste, absence d'étiquette, ou inaccessibilité au clavier)

		- L'onglet *Network* permet désormais d'inspecter les *Web sockets*

	- Du côté du *JS* :

		- La proposition en stage 3 *Numeric separators* a été implémentée ; il est désormais possible d'insérer des caractères soulignés (`_`) au milieu des nombres pour les rendre plus lisibles (`1_000` au lieu de `1000` par exemple)

		- Plusieurs APIs relatives à l'internationalisation ont été améliorées ; `BigInt.prototype.toLocaleString()` accepte désormais les paramètres `locales` et `options`, `Intl.NumberFormat.format()` et `Intl.NumberFormat.formatToParts()` acceptent des *BigInt* et `Intl.RelativeTimeFormat.formatToParts()` a été ajoutée

		- La navigation induite par les méthodes `History.back()`, `History.forward()` et `History.go()` est désormais asynchrone

		- Les méthodes `getTransform()` et `setTransform()` ont été ajoutées aux contextes 2D des éléments `<canvas></canvas>` pour obtenir et saisir directement les transformations absolues sous forme de matrices

		- Les événements `"ontouchstart"` et `"ontouchmove"` sont désormais passifs, comme dans *Chrome* (ça avait cassé mes sites d'ailleurs à l'époque où *Chrome* avait ajouté ça sans tester)

	- Du côté des *CSS* :

		- Pour les amateurs de typographie, les propriétés `text-decoration-thickness`, `text-underline-offset` et `text-decoration-skip-ink` ont été ajoutées ; sans même les utiliser explicitement, vous pourrez constater que le jambage des lettres n'est par défaut plus traversé par la barre de soulignage

		- Vous croyiez que la propriété `display` ne prenait qu'un seul mot-clé ? désormais ce n'est plus le cas ; *Firefox* introduit la possibilité de spécifier indépendamment le comportement interne et externe de la boîte d'un élément ; certains mots-clés historiques deviennent des alias pour la syntaxe à deux (voire trois) mots-clés (`block` devient synonyme de `block flow`, `inline` devient synonyme de `inline flow`, `inline-block` devient synonyme de `inline flow-root`...) mais la valeur `run-in` n'est toujours pas supportée malheureusement

		- Bonne nouvelle pour ceux qui utilisent les grilles *CSS* ; les propriétés `grid-auto-columns` et `grid-auto-rows` acceptent désormais plusieurs pistes, ce qui permet de réaliser certains *designs* qui n'étaient pas possibles avant (mais attendez, `subgrid` arrive dans la prochaine version !)

		- La propriété `font-size` accepte désormais la valeur `xxx-large` pour des raisons de compatibilité (sans commentaire)

		- La propriété `quotes` accepte désormais la valeur `auto` qui constitue sa nouvelle valeur initiale

		- L'opacité peut désormais être spécifiée comme un pourcentage et plus seulement un nombre dans différentes propriétés (`opacity`, `stop-opacity`, `flood-opacity`, `fill-opacity`, `stroke-opacity`, `-moz-window-opacity`, `shape-image-threshold`...)

	- Pour plus d'informations, consultez les pages [https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/70,](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/70,) [https://hacks.mozilla.org/2019/10/firefox-70-a-bountiful-release-for-all/](https://hacks.mozilla.org/2019/10/firefox-70-a-bountiful-release-for-all/) et [https://www.fxsitecompat.dev/en-CA/versions/70/](https://www.fxsitecompat.dev/en-CA/versions/70/)

- *Chrome* est arrivé en version *78* hier également avec les changements suivants :

	- Du côté des *CSS* :

		- L'opacité peut également être spécifiée via un pourcentage

		- Connaissez-vous *Houdini* ? c'est un ensemble d'APIs en développement dont le but est de permettre au développeur de contrôler directement le moteur de rendu du navigateur ; dans ce cadre et dans cette version de *Chrome*, il est désormais possible de spécifier ses propres propriétés *CSS* (nom, syntaxe, héritage, valeur initiale...) grâce à la méthode `CSS.registerProperty()` (si vous voulez voir le potentiel d'*Houdini*, consultez les pages [https://developers.google.com/web/updates/2016/05/houdini](https://developers.google.com/web/updates/2016/05/houdini) et [https://ishoudinireadyyet.com/](https://ishoudinireadyyet.com/) )

	- Du côté du *JS* :

		- Un certain nombre de fonctionnalités sont désormais disponibles derrière un *flag* ou en tant qu'*origin trial* : la proposition en stage 3 *Optional Chaining* qui apporte les nouveaux opérateurs `?.`, `?.(...)` et `?.[...]` ; l'API *SMS Receiver* ou l'API *Native File System* par exemple

	- Pour plus d'informations, consultez les pages [https://developers.google.com/web/updates/2019/10/nic78,](https://developers.google.com/web/updates/2019/10/nic78,) [https://developers.google.com/web/updates/2019/09/devtools](https://developers.google.com/web/updates/2019/09/devtools) et [https://v8.dev/blog/v8-release-78](https://v8.dev/blog/v8-release-78)

- Un nouveau cycle de développement démarre pour *Node.js* :

	- *Node.js 12.13* "Erbium" constitue depuis lundi la nouvelle version à support étendu (LTS) et devient donc la version recommandée pour développer sous *Node.js*

	- La version *13* est sortie hier :

		- De nombreuses locales sont désormais disponibles et plus seulement l'anglais ce qui rend enfin utiles les APIs d'internationalisation (l'espace de noms `Intl` en *JavaScript*), et d'autant plus lorsqu'on fait des interfaces en français !

		- Les *Workers* sont désormais considérés stables

		- Malheureusement, les modules *ECMAScript* (qui visent à remplacer le système de modules *CommonJS* à base de `require`), prévus pour la version *12.13 LTS*, ne sont pas exactement prêts et ont donc été plus ou moins repoussés à une prochaine version imminente

	- Pour plus d'informations, consultez l'annonce offcielle [https://medium.com/@nodejs/node-js-12-to-lts-and-node-js-13-is-here-e28d6a4a2bd,](https://medium.com/@nodejs/node-js-12-to-lts-and-node-js-13-is-here-e28d6a4a2bd,) la progression de l'implantation des modules [https://github.com/nodejs/node/pull/29866](https://github.com/nodejs/node/pull/29866) ou simplement la documentation [https://nodejs.org/dist/latest-v13.x/docs/api/](https://nodejs.org/dist/latest-v13.x/docs/api/)

- Après le partenariat de *CanIUse* avec *MDN*, c'est au tour de *Bocoup* de s'y associer en intégrant les résultats de la suite de test d'*ECMAScript*, *Test 262*, directement dans les pages de documentation du *MDN* ; c'est donc désormais plus de fiabilité pour les développeurs pour évaluer la compatibilité des moteurs *JavaScript* ; lisez l'annonce en détails : [https://bocoup.com/blog/launching-test262-results-on-mdn](https://bocoup.com/blog/launching-test262-results-on-mdn)
