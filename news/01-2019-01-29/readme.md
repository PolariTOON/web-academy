# Bulletin 1 - 29/01/2019

*Par Tristan LE GODAIS ([@PolariTOON](https://github.com/PolariTOON))*

Il est temps d'inaugurer cette série avec pour commencer, l'actualité de ce 29 janvier qui est assez considérable, avec la sortie de deux nouvelles versions de navigateurs et la tenue du *meeting* bimestriel du *TC39* :

- Tout d'abord *Firefox 65* sort en version stable aujourd'hui ; voici un petit aperçu des changements :

	- Du côté des outils de développement :

		- un inspecteur d'éléments *flex* a été ajouté

		- un panneau répertoriant tous les changements effectués sur les *CSS* dans l'inspecteur a été ajouté

	- Du côté des *CSS* :

		- la compatibilité avec les autres navigateurs augmente :

			- les propriétés `break-before`, `break-after` et `break-inside` ont été ajoutées ; *Firefox* était le dernier navigateur à ignorer ces propriétés

			- la propriété `-webkit-appearance` est dotée de nouvelles valeurs dans la perspective de standardiser la propriété

			- l'implémentation de la propriété `user-select` converge vers celle des autres navigateurs, bien que sa spécification soit toujours en débat

		- les variables d'environnements `env()` ont été implémentées, ce qui permet actuellement de gérer le *notch* introduit avec l'*IPhone X*

	- Du côté du *JS* :

		- la proposition en stage 3 *`Intl.RelativeTimeFormat`* a été ajoutée ; malheureusement `formatToParts` n'est pas encore supporté

		- la proposition en stage 3 *`globalThis`* visant à standardiser le nom de l'objet global (`window`, `self`, `global` selon l'environnement...) a été implémentée, le nom `global` ayant été refusé car n'étant pas compatible avec la plateforme *web* ; cependant un autre nom, `Global`, est en débat cette semaine

	- Et beaucoup d'autres choses ! Pour plus d'informations, consultez les pages [https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/65,](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/65,) [https://hacks.mozilla.org/2019/01/firefox-65-webp-flexbox-inspector-new-tooling/](https://hacks.mozilla.org/2019/01/firefox-65-webp-flexbox-inspector-new-tooling/) et [https://www.fxsitecompat.com/en-CA/versions/65/](https://www.fxsitecompat.com/en-CA/versions/65/)

- Ensuite *Chrome 72* sort également en version stable aujourd'hui ; les changements notables :

	- Du côté du *JS* :

		- la proposition en stage 3 `Intl.ListFormat` a été implémentée

		- les attributs de classes publics ont été implémentés conformément à la proposition en stage 3 *Class field declarations*

	- Pour le reste, consultez les pages [https://developers.google.com/web/updates/2019/01/nic72](https://developers.google.com/web/updates/2019/01/nic72) et [https://developers.google.com/web/updates/2018/11/devtools](https://developers.google.com/web/updates/2018/11/devtools)

- Pour finir, le *TC39* se réunit jusqu'à jeudi pour évaluer l'avancement des propositions pour faire évoluer le langage *JS* :

	- 4 propositions viennent d'être ajoutées officiellement au langage :

		- *`Object.fromEntries`*, constituant la méthode inverse de `Object.entries` ([https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries))

		- *Well-formed `JSON.stringify`*, corrigeant la génération de *JSON* invalide selon *UTF-8* ([https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Well-formed_JSON.stringify(](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Well-formed_JSON.stringify()))

		- *`String.prototype.{trimStart,trimEnd}`*, standardisant les méthodes *`String.prototype.{trimLeft,trimRight}`* ([https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart) et [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd))

		- *`Array.prototype.{flat,flatMap}`*, marquant enfin la fin du *#smooshgate* ([https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) et [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap))

	- Si vous souhaitez suivre le développement du langage *JS*, tenez-vous au courant de l'évolution des différentes propositions sur la page [https://github.com/tc39/proposals](https://github.com/tc39/proposals)

Voilà j'espère que je ne vous ai pas trop noyés avec toutes ces informations. Sachez que la plateforme *web* évolue bien plus que ne pourrait le résumer cette liste, et que c'est donc une sélection assez personnelle et subjective que je vous ai concoctée. Si, par ailleurs, vous êtes à fond intéressés dans le développement *web* et tout ce qui gravite autour, n'hésitez pas à me demander ; je peux vous fournir un certain nombre de liens vers des ressources utiles.
