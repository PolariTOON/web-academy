# Bulletin 34 - 13/12/2019

*Par Tristan LE GODAIS ([@PolariTOON](https://github.com/PolariTOON))*

- *Chrome* est sorti en version *79* mardi et apporte les nouveautés suivantes :

	- Du côté des outils de développement :

		- La valeur des *cookies* peut désormais être inspectée et il est possible de vérifier si un *cookie* a été envoyé, stocké ou bloqué

		- Les *media queries* `prefers-color-scheme` et `prefers-reduced-motion` peuvent désormais être simulées ; vous pouvez donc tester plus facilement les directives de thème clair, de thème sombre et de réduction d'animation sans changer de navigateur ou d'ordinateur

	- Du côté du *HTML* :

		- L'attribut `autofocus=""`, qui permet de donner le *focus* à un élément au chargement de la page, devient un attribut universel et ne se limite plus seulement aux contrôles de formulaires (ma seule ligne de *JS* sur le site de *TGD* devient donc inutile dans *Chrome* !)

		- De la même manière que la version *71* de *Firefox* sortie la semaine dernière, *Chrome* calcule désormais le ratio d'aspect des images à partir des attributs `width=""` et `height=""` avant qu'elles ne chargent, ce qui prévient les sauts de l'ascenseur lors du chargement effectif de l'image ; c'est bon de voir une telle coordination entre navigateurs de temps en temps ! on n'attend plus que l'ajout de la propriété `aspect-ratio` désormais

		- L'attribut universel `rendersubtree=""` a été ajouté et permet selon sa valeur (`invisible` ou `activatable`) d'indiquer au navigateur que le rendu du contenu de l'élément peut être différé (j'ai personnellement un gros doute sur la pertinence d'un tel attribut, mais bon...)

		- Du côté du *JS* :

		- L'API *WebXR* a été exposée et permet d'accéder à de nouvelles fonctionnalités en lien avec la réalité augmentée et la réalité virtuelle ; en particulier les ancres, mais aussi les appareils et les manettes dédiées à de domaines sont supportés

	- Du côté des *CSS* :

		- Les fonctions `min()`, `max()` et `clamp()` qui permettent de contenir une valeur dans un intervalle ont été ajoutées ; dans le futur, on n'aura peut-être plus besoin d'avoir recours à des *media queries* dédiées ou aux propriétés `min-width`, `max-width`, `min-height`, `max-height` pour faire du *responsive design* (sachant que certaines techniques permettaient déjà de s'en passer)

		- La propriété quasi-standard `-webkit-appearance` a été modifiée pour ne fonctionner que sur un nombre restreint d'éléments *HTML* afin de réduire les risques de futurs problèmes de rétro-compatibilité ; on se rapproche un peu plus de l'ajout de la propriété standard `appearance` dont `-webkit-appearance` devrait progressivement devenir un alias !

		- La propriété `font-optical-sizing`, qui permet de contrôler l'activation des optimisations de l'interpolation du rendu des fontes, a été ajoutée

		- La propriété `list-style-type`, qui correspond à la manière historique de définir l'apparence des puces d'une liste (en attendant le pseudo-élément `::marker`), accepte désormais des chaînes de caractères quelconques et non plus seulement des mots-clés prédéfinis

		- C'est tout, mais c'est sans doute parce que les ingénieurs de *Chrome* travaillent sur une nouvelle variante de leur moteur de rendu *Blink* : *LayoutNG* (à l'instar des ingénieurs de *Firefox* qui travaillent sur *Gecko*, *WebRender* et *GeckoView*) ; celle-ci devrait permettre le support du pseudo-élément `::marker` par exemple !

	- Pour plus d'informations, consultez les pages [https://developers.google.com/web/updates/2019/12/nic79,](https://developers.google.com/web/updates/2019/12/nic79,) [https://developers.google.com/web/updates/2019/10/devtools](https://developers.google.com/web/updates/2019/10/devtools) et [https://v8.dev/blog/v8-release-79](https://v8.dev/blog/v8-release-79)
