# Bulletin 37 - 09/02/2020

*Par Tristan LE GODAIS ([@PolariTOON](https://github.com/PolariTOON))*

- Mardi dernier est sorti *Chrome 80* (et vendredi dernier *Edge 80*, qui suit le même cycle de développement), version symbolique pour son moteur *JavaScript* *V8* qui atteint sa version... *v8* ; il s'agit pour le navigateur d'une version qui ne brille pas que par l'ajout de nouvelles fonctionnalités, mais aussi par les nombreux retraits, notamment du côté des *web components*, et c'est somme toute une bonne nouvelle !

	- Du côté des outils de développements :

		- La console supporte désormais les rédéclarations d'identifiants avec `let` et `class`, ce qui facilite énormément la réexécution du code précédent ; attention, il s'agit bien là d'une liberté prise vis-à-vis du standard *ECMAScript* ; ce n'est en aucun cas possible dans vos scripts !

		- Dans l'onglet *Sources*, il est désormais possible de déboguer les sources des programmes compilés en *WebAssembly*, et non plus seulement les instructions machine *WebAssembly* elles-mêmes, grâce au standard *DWARF* ; autrement dit, si vous écrivez votre code en *C* par exemple, vous pourrez déboguer le code *C* lui-même

	- Du côté de *HTML* :

		- La version *v0* des *custom elements* et du *shadow DOM* n'est désormais plus supportée, la version v1 étant désormais approuvée et supportée par tous les navigateurs majeurs

		- Les imports *HTML* ont également été retirés ; la voie actuellement explorée par *Microsoft* pour permettre ce genre de fonctionnalité est de passer par des modules *HTML* importables en tant que modules *ECMAScript*, mais pour ça il faudra d'abord très certainement une standardisation auprès du *TC39* des attributs de modules *ECMAScript*

		- La recherche programmatique dans une page d'un terme particulier n'est plus une peine, grâce à la nouvelle fonctionnalité *Scroll To Text Fragment* ; par exemple si vous cherchez le terme `documents` dans la page `https://example.org/`, vous pouvez vous rendre à l'adresse `https://example.org/#:~:text=documents` ; la syntaxe, plutôt étrange au premier abord, résulte en fait d'une étude minutieuse des options disponibles préservant la rétro-compatibilité

	- Du côté des *CSS* :

		- La valeur `anywhere` des propriétés `line-break` et `overflow-wrap` est désormais supportée et peut constituer une bonne alternative aux valeurs `break-all` et `break-word` de la propriété `word-break`

	- Du côté des *JS* :

		- L'opérateur de fusion nulle `??` est désormais supporté, et fonctionne comme l'opérateur `||`, en n'évaluant l'opérande droit que si l'opérande gauche est `null` ou `undefined`

		- Les opérateurs `?.`, `?.[]` et `?.()`, qui permettent de chaîner optionnellement des accès à des propriétés ou bien des appels de fonctions, ont aussi été ajoutés

		- Les *Workers* acceptent désormais un argument optionnel `{type: "module"}` permettant de les interpréter comme des modules *ECMAScript*, ce qui permet donc d'avoir recours à l'instruction `import` ! les *Service Workers* ne sont pas encore concernés par cet ajout

		- Les constructeurs `CompressionStream` et `DecompressionStream` permettent désormais, comme leurs noms l'indiquent, de faire de la compression et décompression (*gzip* et *deflate* pour le moment)

	- Du côté de *SVG* :

		- *Chrome* supporte enfin les *favicons* *SVG* (vous savez, l'icône qui apparaît dans l'onglet du navigateur) ; ça ouvre de nouvelles possibilités dans tous les navigateurs : qualité conservée quelque soit la résolution de l'écran, mais aussi icône adaptative en fonction des *media queries* *CSS* (par exemple une icône différente selon que le thème du navigateur est clair ou sombre)

	- Pour plus d'informations, consultez les pages [https://developers.google.com/web/updates/2020/02/nic80,](https://developers.google.com/web/updates/2020/02/nic80,) [https://developers.google.com/web/updates/2019/12/devtools](https://developers.google.com/web/updates/2019/12/devtools) et [https://v8.dev/blog/v8-release-80](https://v8.dev/blog/v8-release-80)

- De mardi à jeudi dernier se réunissait à nouveau le *TC39* pour spécifier *JavaScript* ; lors de la réunion, deux propositions relatives à l'internationalisation ont été standardisées :

	- Le constructeur `Intl.Locale` permet d'analyser une chaîne de caractères spécifiant une locale *Unicode* ; consultez la proposition [https://github.com/tc39/proposal-intl-locale](https://github.com/tc39/proposal-intl-locale) ou bien la documentation [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Locale](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Locale)

	- Le constructeur `Intl.NumberFormat` permet de manipuler des formats de nombres avec des unités physiques ou des devises, éventuellement en notation scientifique et en spécifiant des règles de signes ; consultez la proposition [https://github.com/tc39/proposal-unified-intl-numberformat](https://github.com/tc39/proposal-unified-intl-numberformat) ou bien la documentation [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat)

- Evelyn Woods nous raconte dans un article de blog l'évolution de la mise en page *web* et des *CSS* durant ces 30 dernières années du point de vue des développeurs ; c'est un peu long, mais c'est à lire absolument ! et sans oublier les premiers commentaires qui sont assez incroyables ! c'est par ici : [https://eev.ee/blog/2020/02/01/old-css-new-css/](https://eev.ee/blog/2020/02/01/old-css-new-css/) !
