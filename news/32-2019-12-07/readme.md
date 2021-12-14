# Bulletin 32 - 07/12/2019

*Par Tristan LE GODAIS ([@PolariTOON](https://github.com/PolariTOON))*

Les nouvelles de la semaine :

- *Firefox* est sorti mardi dernier en version *71* avec comme d'habitude pas mal de changements :

	- Du côté des outils de développement :

		- La console se dote d'un éditeur multi-ligne qui vous permet d'exécuter plus facilement un ensemble d'instructions *JavaScript* et éventuellement à partir d'un fichier

		- Les messages *Web Socket* ont désormais un onglet dédié pour les inspecter

		- Parmi les autres changements, l'onglet "Réseau"" possède désormais une barre de recherche, un simulateur de requêtes bloquées et l'onglet "Débogueur" permet quant à lui de visualiser les valeurs des variables à n'importe quelle ligne arrivent de placer un point d'arrêt lors d'un évènement

		- L'inspecteur de grille a été amélioré pour tenir des comptes des nouvelles capacités des grilles *CSS* (voir ci-dessous)

	- Du coté du *JS* :

		- La méthode `Promise.allSettled()` a été ajoutée et permet d'attendre qu'un ensemble de promesses soit traité (*settled*), peut importe qu'elles soient accomplies ou rejetées

		- Les méthodes génériques statiques non-standard d'`Array` introduites en novembre 2005 dans *Firefox 1.5* ont enfin pu être retirées, malgré les problèmes de rétro-compatibilité que cela posait initialement ; voici la liste complète des méthodes supprimées : `Array.concat()`, `Array.every()`, `Array.filter()`, `Array.forEach()`, `Array.indexOf()`, `Array.lastIndexOf()`, `Array.map()`, `Array.pop()`, `Array.push()`, `Array.reduce()`, `Array.reduceRight()`, `Array.reverse`, `Array.shift()`, `Array.slice()`, `Array.some()`, `Array.sort()`, `Array.splice()` et `Array.unshift()`

		- Les méthodes et propriétés non-standard de l'API `DataTransfer` (qui sert lorsque l'on fait du *Drag & Drop*) ont été retirées également : `mozGetDataAt()`, `mozSetDataAt()`, `mozClearDataAt()` and `mozTypesAt()` et `mozItemCount`

		- Le constructeur `StaticRange()` a été ajouté

		- *WebGL* supporte désormais les extensions `OVR_multiview2` et `OES_fbo_render_mipmap` (je ne sais pas ce que c'est)

		- L'API *Media Session* a été partiellement implémentée

	- Du côté des *CSS* :

		- Vous connaissiez *FlexBox* et *Grid* et ça ne vous suffisait pas ? dites bonjour à `subgrid`, la nouvelle valeur des propriétés `grid-template-columns` et `grid-template-rows` qui permet à une grille de réutiliser les colonnes et / ou les lignes de la grille parente ; avec cette valeur, un certain nombre de *designs* qui ne pouvait jusqu'à être réalisés qu'avec des tableaux (ouh c'est pas bien) ou avec du *JS* sont désormais réalisables facilement ! à mon avis, cette grâce à cette valeur que la mise en page en *CSS* va devenir réellement puissante (mais c'est uniquement dans *Firefox* actuellement)

		- *Firefox* rattrape enfin son retard quant aux colonnes *CSS* en ajoutant la propriété `column-span` qui permet à un élément de s'étendre sur plusieurs colonnes comme les chapeaux ou les sous-titres dans les journaux par exemple

		- La propriété `clip-path` (l'alternative moderne à la propriété `clip`) supporte enfin comme valeur la fonction `path()` qui permet de spécifier un chemin *SVG* quelconque pour rogner un élément

		- Nouveauté qui peur sembler insignifiante mais qui pourtant devrait avoir de formidables conséquences pour les utilisateurs : les attributs `height=""` et `width=""` des éléments `<img/>` participent désormais au calcul de la propriété `aspect-ratio` (non exposée et interne à *Firefox* pour l'instant seulement, mais qui sera standardisée à terme) ; autrement dit, une image, même pas encore chargée, devrait respecter le ratio d'aspect spécifié et ne plus provoquer de sauts dans la page au moment effectif de son chargement ; il est donc désormais à nouveau recommandé de toujours spécifier les attributs `width=""` et `height=""` sur une image (et pas seulement les attributs `src=""` et `alt=""`)

	- Du côté de *MathML* :

		- Il y avait bien longtemps que *MathML* n'avait pas reçu de modifications dans *Firefox*, mais avec l'implémentation en cours de *MathML* dans *Chrome* et la rédaction (en cours également) de la spécification qui devrait devenir *MathML 4*, tout ceci va changer !

		- Pour commencer, le DOM des éléments *MathML* obtient désormais la même structure que *HTML* et *SVG* ; autrement dit la propriété `style` et les gestionnaires d'évènements sont désormais disponibles sur ces éléments par exemple !

		- Ensuite, dans la perspective de les retirer prochainement, sont dépréciés : les attributs `align=""` sur les éléments `<munderover></munderover>`, `<munder></munder>` et `<mover></mover>`, `bevelled=""`, les attributs `denomalign=""` et `numalign=""` sur l'élément `<mfrac></mfrac>`, l'attribut `radical=""` sur l'élément `<menclose></menclose>`, les attributs `subscriptshift=""` et `superscriptshift=""` sur les éléments `<msubsup></msubsup>`, `<msub></msub>` et `<msup></msup>`, l'élément `<mfenced></mfenced>` et les attributs *XLink* `xlink:actuate="", xlink:href="", xlink:show=""` et `xlink:type=""`

	- Pour plus d'informations, consultez les pages [https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/71,](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/71,) [https://hacks.mozilla.org/2019/12/firefox-71-a-year-end-arrival/](https://hacks.mozilla.org/2019/12/firefox-71-a-year-end-arrival/) et [https://www.fxsitecompat.dev/en-CA/versions/71/](https://www.fxsitecompat.dev/en-CA/versions/71/)

- De mardi à jeudi se déroulait la réunion bimestrielle du *TC39* qui standardise *JavaScript* et comment souvent, un certain nombre de fonctionnalités sont venues rejoindre la onzième édition de la spécification du langage, *ES2020* :

	- La proposition *Nullish coalescing Operator*, c'est-à-dire l'opérateur `??`, a été standardisée ; à l'instar des opérateurs `||` et `&&` qui travaillent sur `true` et `false`, ce nouvel opérateur permet de court-circuiter l'évaluation de l'opérande droit si l'opérande gauche n'est ni `null` ni `undefined` ; l'idée est de pouvoir donner une valeur par défaut à une expression : `const articleTitle = article.title ?? "Pas de titre";` ; consultez la proposition [https://github.com/tc39/proposal-nullish-coalescing](https://github.com/tc39/proposal-nullish-coalescing) elle-même ou bien la documentation [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)

	- La proposition *Optional Chaining* a également été standardisée ; elle apporte trois opérateurs : `?.`, `?.[]` et `?.()`, versions "court-circuitantes" (non, non, aucun néologisme) des opérateurs `.` (accès à une propriété), `[]` (accès à une propriété au nom calculé) et `()` (appel de fonction) ; autrement dit, si l'opérande gauche est `null` ou `undefined`, l'accès à la propriété ou bien l'appel de fonction n'est pas réalisé et l'expression retourne `undefined` (en gros, si on avait été en *Java*, on aurait pu dire : "Le *NullPointerException* est mort, vive le *NullPointerException* !") consultez la proposition [https://github.com/tc39/proposal-optional-chaining](https://github.com/tc39/proposal-optional-chaining) ou bien la documentation [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

	- Si vous connaissez bien *JavaScript* et *JSON*, alors vous savez que les objets sont des collections non-ordonnées de paires de clés et de valeurs (non-ordonnées, vous avez vu ?) ; en pratique ce n'est pas complètement le cas car lors du parcours d'un objet avec une boucle `for (... in ...) ...`, les navigateurs sont d'accord sur une partie de l'ordre d'énumération des clés ; eh bien la proposition *for-in mechanics* tout juste standardisée décrit et standardise désormais ce dénominateur commun de l'énumération avec une boucle `for (... in ...) ...` ; pour les développeurs ça ne change rien, à part apporter une bonne piqûre de rappel : ne vous reposez pas sur l'ordre d'énumération des clés d'un objet avec la boucle `for (... in ...) ...`, c'est globalement imprévisible ! consultez la proposition [https://github.com/tc39/proposal-for-in-order](https://github.com/tc39/proposal-for-in-order) ou bien la documentation [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

	- Dernière nouveauté : l'API `Intl.RelativeTimeFormat` a été standardisée et permet, comme son nom l'indique, de formater des dates relativement au moment présent ("il y a un jour", "demain", "le mois dernier", "dans 2 minutes", "maintenant"...), le genre de truc qui serait super fastidieux à implémenter pour un développeur lambda, et ce surtout dans n'importe quelle locale (en gros dans n'importe langue) ; consultez la proposition [https://github.com/tc39/proposal-intl-relative-time](https://github.com/tc39/proposal-intl-relative-time) ou bien la documentation [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat)
