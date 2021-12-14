# Bulletin 39 - 11/03/2020

*Par Tristan LE GODAIS ([@PolariTOON](https://github.com/PolariTOON))*

- *Firefox 74* est sorti hier et apporte les nouveautés suivantes :

	- Du côté de *HTTP* :

		- *TLS 1.0* et *TLS 1.1* sont désormais désactivés par défaut (au profit des nouvelles version *TLS 1.2* et *TLS 1.3*), dans le cadre d'un effort commun des différents navigateurs

		- *CORP* et *FP* sont désormais supportés via l'en-tête `Cross-Origin-Resource-Policy` et un sous-ensemble de valeurs de l'en-tête `Feature-Policy` respectivement

	- Du côté de *HTML* :

		- L'attribut `allow=""` et la propriété `allow` des éléments `<iframe></iframe>` sont désormais supportés et permettent de contrôler finement les permissions d'une page embarquée ; à noter que la géolocalisation, le plein-écran, l'accès à la caméra et au micro et l'enregistrement de l'écran depuis une page embarquée d'une autre origine sont désormais désactivés par défaut

	- Du côté des *CSS* :

		- La propriété `text-underline-position`, qui permet de spécifier où dessiner la ligne de soulignage, a été implémentée

		- Les propriétés `text-underline-offset` et `text-decoration-thickness` acceptent désormais des pourcentages (relatifs à une valeur de `1em` de la fonte)

		- La propriété `outline-style` accepte désormais la valeur `auto`, qui correspond au style d'*outline* natif du navigateur ou bien du système ; dans le futur, elle pourrait devenir la nouvelle valeur initiale de la propriété

		- Les propriétés préfixées `-moz-columns`, `-moz-column-count`, `-moz-column-fill`, `-moz-column-gap`, `-moz-column-rule`, `-moz-column-rule-color`, `-moz-column-rule-style`, `-moz-column-rule-width`, `-moz-column-span` et `-moz-column-width`, non nécessaires pour la rétro-compatibilité, ont été retirées car leur versions non préfixées ont terminé d'être implémentées dans *Firefox 71*

	- Du côté du *JS* :

		- À l'instar de *Chrome 80* le mois dernier, *Firefox 74* supporte désormais les opérateurs de chaînage optionnel `?.`, `?.[]` et `?.()`

		- Les fonctions de décompilation `Object.prototype.toSource()` et `uneval()`, qui datent de l'époque de *Netscape*, ont pu être retirées

		- La méthode `IDBTransaction.prototype.commit()` a été ajoutée

		- L'évènement `languagechange` est désormais supporté dans les *Workers*

		- L'objet `TextMetrics` retourné par la méthode `CanvasRenderingContext2D.prototype.measureText()` dispose désormais des nouvelles propriétés `actualBoundingBoxAscent`, `actualBoundingBoxDescent`, `actualBoundingBoxLeft` et `actualBoundingBoxRight` et non plus seulement `width`

		- Au niveau de la gestion des fichiers, les méthodes `HTMLCanvasElement.prototype.mozGetAsFile` , `IDBDatabase.prototype.mozCreateFileHandle()` et `IDBMutableFile.prototype.getFile()` ont été retirées

		- La propriété `isReload` des évènements de type `FetchEvent` a été retirée, conformément à la dernière version de la spécification

		- La méthode `document.createEvent()` ne permet plus de créer les évènements de types non-standards `KeyEvents`, `MouseScrollEvents`, `ScrollAreaEvent` et `TimeEvent`

	- Pour plus d'informations, consultez les pages [https://hacks.mozilla.org/2020/03/security-means-more-with-firefox-74-2/,](https://hacks.mozilla.org/2020/03/security-means-more-with-firefox-74-2/,) [https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/74](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/74) et [https://www.fxsitecompat.dev/en-CA/versions/74/](https://www.fxsitecompat.dev/en-CA/versions/74/)
