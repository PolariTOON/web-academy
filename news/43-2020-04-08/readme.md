# Bulletin 43 - 08/04/2020

*Par Tristan LE GODAIS ([@PolariTOON](https://github.com/PolariTOON))*

- Ce mardi est sorti *Firefox 75* et les nouveautés sont au rendez-vous :

	- Du côté des outils de développement :

		- À l'instar de celle de *Chrome*, la console de *Firefox* propose désormais une évaluation instantanée des expressions qui y sont saisies, du moment qu'elle ne provoquent pas d'effet de bord ; les objets *ECMAScript*, les élements *HTML* ou encore les erreurs disposent chacun de leur propre prévisualisation

		- L'outil de mesure d'aires et de distances propose désormais le redimensionnement de la zone mesurée ; c'est bien plus pratique que de s'y reprendre à plusieurs fois ; malheureusement il est pour l'instant pas possible de déplacer cette zone sans la redimensionner

		- La barre de recherche de l'inspecteur *HTML* accepte désormais des requêtes de type *XPath*, pratique si on a besoin de rechercher un élément en particulier au milieu d'une page

	- Du côté de *HTML* :

		- Le chargement paresseux des images, tout juste standardisé, est à présent disponible ; en spécifiant l'attribut `loading="lazy"` sur un élément `<img/>`, le chargement de l'image n'est opéré que lorsque l'image rentre dans le *scrollport* (la zone visible d'un élément défilant)

		- Les nouvelles annotations *ARIA* `aria-description`, `role="comment"`, `role="mark"`, `role="suggestion"` sont disponibles sous *Windows* et *Linux* ; il n'y a plus qu'à attendre leur support par les lecteurs d'écrans

	- Du côté du *JS* :

		- Les champs de classes publics et statiques sont maintenant pris en charge ; la syntaxe est la même que pour les champs de classes publics et non statiques, à part que la déclaration doit être précédée du mot-clé `static`

		- Le constructeur `Intl.Locale` a été ajouté et permet d'instancier une locale *Unicode* pré-configurée

		- Les éléments `<form></form>` disposent désormais d'une méthode `requestSubmit()` qui, contrairement à la méthode `submit()`, permet d'émuler le clic sur un bouton de soumission de formulaire tout en vérifiant sa validité ; par ailleurs l'évènement `"submit"` déclenché est désormais de type `SubmitEvent` avec une propriété `submitter` dont la valeur correspond à l'élément en question

		- L'API *Web Animations* se dote d'une myriade de nouvelles fonctionnalités : valeur initiale et valeur finale implicites, les nouvelles classes `AnimationTimeline` et `DocumentTimeline`, la nouvelle propriété `timeline` des instances de `Animation` et `Document`, la nouvelles méthode `getAnimations()` des classes `Animation` et `Document` entre autres

	- Du côté des *CSS* :

		- Les fonctions `clamp()`, `max()` et `min()` ont été ajoutées ; utilisable partout où la fonction `calc()` pouvait déjà être utilisée, ces nouvelles fonctions permettent de placer des points de rupture sans avoir recours à des *media queries* portant sur les dimensions, aux propriétés `max-height`, `max-width`, `min-height` et `min-width` ou encore la technique des *CSS Locks*

		- La propriété `text-decoration-skip-ink` accepte désormais la valeur `all`

	- Pour plus d'informations, consultez les pages [https://hacks.mozilla.org/2020/04/firefox-75-ambitions-for-april/,](https://hacks.mozilla.org/2020/04/firefox-75-ambitions-for-april/,) [https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/75](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/75) et [https://www.fxsitecompat.dev/en-CA/versions/75/](https://www.fxsitecompat.dev/en-CA/versions/75/)

- *Safari 13.1* est en cours de déploiement et apporte aussi ses nouveautés ; comme j'ai oublié de vous faire le point sur *Safari 13* en décembre dernier, je vous fait un petit récapitulatif des deux versions :

	- Du côté des outils de développement :

		- Un nouvel outil permet de visualiser la chronologie des animations *CSS*

		- Le nouvel onglet "Sources" combine désormais les anciens onglets "Resources" et "Debugger"

		- Le nouvel onglet "Layers" permet de visualiser en 3 dimensions le rendu de la page ; ça me rappelle beaucoup la vue 3D de *Firefox*, retirée dans la versions 47

		- Le sélecteur de couleur a été refait pour supporter d'autres espaces de couleurs plus étendus que *sRGB* ; il permet entre autres de comparer les couleurs *sRGB* aux couleurs *Display-P3* (eh oui, en utilisant les bonnes vieilles couleurs *sRGB*, vous n'avez accès qu'à une partie des couleurs que peut afficher votre ordinateur !)

	- Du côté de *HTML* :

		- L'attribut `enterkeyhint=""` peut être utilisé dans *iOS* sur les champs de formulaires pour spécifier l'apparence du bouton "Entrée" du clavier virtuel

	- Du côté du *JS* :

		- La proposition en stage 3 `String.prototype.replaceAll()` est supportée et permet de remplacer toutes les occurrences d'une chaîne de caractère au sein d'une autre

		- L'opérateur de fusion nulle `??` a été ajouté

		- L'API *ResizeObserver*, alternative moderne à l'évènement `"resize"` a été ajoutée

		- L'API *Async Clipboard* et notamment la propriété `navigator.clipboard` a été ajoutée

		- L'API *Web Animations* a été implémentée

		- L'API *Visual Viewport* a été ajoutée

		- Les évènements de pointeur sont désormais supportés

		- Les évènement de souris ont aussi été ajoutés sur *iPadOS*

		- Sur *iOS* et *iPadOS*, la méthode historique `document.execCommand()` accepte désormais la valeur `"paste"` qui permet comme sont nom l'indique de coller le contenu du presse-papier

	- Du côté des *CSS* :

		- Le mode sombre a été ajouté et est détectable avec les *media queries* appropriées

		- Le module *CSS Shadow Parts* est désormais supporté et permet de réaliser des composants *CSS*

		- L'unité de longueur `q` (le quart de millimètre, très utilisé au Japon) a été ajoutée

		- La propriété `font-family` accepte les nouvelles valeurs système `ui-monospace`, `ui-rounded`, `ui-serif` et `ui-sans-serif`

		- La propriété `line-break` accepte la nouvelle valeur `anywhere`

		- La nouvelle *media query* `dynamic-range` a été ajoutée et permet de tester le support de *HDR* sur les différents appareils

	- Du côté de *WebDriver* :

		- L'API est désormais supportée sous *iOS*

	- Pour plus d'informations, consultez les pages [https://webkit.org/blog/9674/new-webkit-features-in-safari-13/](https://webkit.org/blog/9674/new-webkit-features-in-safari-13/) et [https://webkit.org/blog/10247/new-webkit-features-in-safari-13-1/](https://webkit.org/blog/10247/new-webkit-features-in-safari-13-1/) et je vous rappelle que si vous n'avez pas d'appareil *Apple* et que vous êtes sous *Linux* (plus exactement sous une distribution intégrant *Gnome*, comme *Ubuntu*) vous pouvez quand même tester ces fonctionnalités en installant *Gnome Web* (encore appelé *Epiphany*) qui est basé sur *Webkit*, comme *Safari*
