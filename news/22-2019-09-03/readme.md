# Bulletin 22 - 03/09/2019

*Par Tristan LE GODAIS ([@PolariTOON](https://github.com/PolariTOON))*

- *Firefox 69* sort aujourd'hui et comme d'habitude avec un paquet de nouveautés :

	- Du côté des outils de développement :

		- L'outil d'accessibilité est désormais capable de vérifier certains problèmes ou manquements comme l'absence d'étiquettes (noms de boutons, titres, textes alternatifs...)

	- Du côté de *Flash* (encore lui ?) :

		- Emboîtant le pas à *Chrome*, *Firefox* désactive désormais systématiquement *Flash* et demande une activation expresse par l'utilisateur à chaque visite

	- Du côté de *HTML* :

		- Chose plutôt rare, un élément a été retiré : `<keygen/>` ; cet élément qui était spécifié dans une ancienne version d'*HTML* (jusqu'à *HTML 5.1* en fait) permettait comme son nom l'indique de générer automatiquement des clés publiques

	- Du côté du *JS* :

		- Les déclarations de champs de classes publics (proposition en stage 3) sont désormais supportés ; youpi ! on peut déclarer les attributs publics à la fois dans *Chrome* et *Firefox* maintenant

		- L'API `ResizeObserver` permet de réagir plus intelligemment au redimensionnement des différents éléments, et plus seulement de toute la page en écoutant l'évènement `"resize"` sur l'objet global `window`

		- La nouvelle fonction `queueMicrotask` permet de programmer une microtâche (parfois appelée *job*) à exécuter prioritairement, et constitue en cela une alternative déterministe aux techniques à base de `setTimeout(..., 0)` voire pire, de `setImmediate()` (fonctionnalité non-standard disponible uniquement dans feux *Internet Explorer* et l'ancienne version de *Edge*)

		- Les nouveaux évènements `"unhandledrejection"` et `"rejectionhandled"` sont désormais disponibles ~~pour ceux qui oublieraient de *catch* les erreurs dans le code asynchrone ou à base de promesses~~ __pour faire de la télémétrie et du débogage__

		- La nouvelle méthode statique `DOMMatrix.fromMatrix()` permet de cloner une matrice (ne me demandez pas pourquoi ce n'était pas possible avant), par contre, la méthode `DOMMatrix.scaleNonUniformSelf()` a été retirée au profit de la méthode `DOMMatrix.scaleSelf()` déjà disponible

		- Les méthodes `Blob.text()`, `Blob.arrayBuffer()` et `Blob.stream()` permettent une lecture plus facile des objets binaires comme les fichiers de manière asynchrone

	- Du côté des *CSS* :

		- La propriété `user-select`, qui permet de spécifier de quelle manière un élément peut-être sélectionné, a été dépréfixée suite à des clarifications dans la spécification

		- La nouvelle propriété `line-break` et la nouvelle valeur `break-spaces` de la propriété `white-space` on été ajoutées pour une meilleure gestion des sauts de lignes, notamment pour les modes d'écritures CJK (Chinois, Japonais, Coréen)

		- Les propriétés logiques `overflow-block` et `overflow-inline` constituent désormais les alias des propriétés `overflow-x` et `overflow-y` selon le mode d'écriture spécifié par la valeur de la propriété `writing-mode`

		- Un certain nombre de propriétés géométriques *SVG* peuvent désormais être renseignées directement via des *CSS* ! cela inclut les propriétés `width` et `height` des éléments `<svg></svg>` par exemple, mais aussi les coordonnées des éléments avec `x`, `y`, `cx`, `cy`, `rx`, `ry` et `r`

		- La propriété `contain` a été exposée et permet d'améliorer les performances du moteur de rendu en indiquant explicitement à quel point l'apparence des différentes parties de la page peuvent être calculées indépendamment

		- La règle `@supports` permet d'appliquer conditionnellement du style plus seulement lorsqu'une certaine propriété *CSS* est implémentée, mais aussi selon le support d'un sélecteur *CSS* (du moment que sa syntaxe est valide), du genre `::marker`, `::marker::marker`, `:focus-within`, `:target-within`, `:is()`, `:has()` ou `:where()` qui sont peu répandus

	- Et parce que les changements ne se résument pas seulement à ça, consultez les pages [https://hacks.mozilla.org/2019/09/firefox-69-a-tale-of-resize-observer-microtasks-css-and-devtools/,](https://hacks.mozilla.org/2019/09/firefox-69-a-tale-of-resize-observer-microtasks-css-and-devtools/,) [https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/69](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/69) et [https://www.fxsitecompat.dev/en-CA/versions/69/](https://www.fxsitecompat.dev/en-CA/versions/69/) pour plus d'informations

- Par ailleurs, *Igalia* nous fait à nouveau un point sur l'état de l'implémentation de *MathML* dans *Chrome* en effectuant une petite comparaison des différents navigateurs : [https://mathml.igalia.com/news/2019/08/28/mathml-and-browsers/](https://mathml.igalia.com/news/2019/08/28/mathml-and-browsers/)
