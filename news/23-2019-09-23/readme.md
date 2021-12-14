# Bulletin 23 - 23/09/2019

*Par Tristan LE GODAIS ([@PolariTOON](https://github.com/PolariTOON))*

- *Chrome 77* est sorti mardi 10 septembre (oui j'ai un peu de retard) avec quelques changements :

	- Du côté du *HTML* :

		- Les formulaires `<form></form>` émettent désormais un nouveau type d'évènement, `"formdata"`, lors de leur soumission, ce qui permet à la fois d'accéder aux paires de clés et de valeurs générées par le formulaire et d'en ajouter à la volée en évitant le recours à l'instanciation `new FormData(...)` ou l'élément `<input type="hidden"/>`, et en particulier dans le cadre des *custom elements*

		- Le nouvel attribut `loading` a été introduit et permet avec la valeur `"lazy"` de différer le chargement des images `<img/>` et des *frames* `<iframe/>` ; celles-ci ne sont pas chargées tant qu'elles sont placées en dehors de l'écran par exemple

		- L'objet `TextMetrics` permettant de mesurer du texte à afficher sur un `<canvas>` et retourné par la méthode `CanvasRenderingContext2D.measureText()` a été étendu et ne se limite plus seulement à une unique propriété `width`, mais dispose désormais également des propriétés `actualBoundingBoxAscent`, `actualBoundingBoxDescent`, `actualBoundingBoxLeft`, `actualBoundingBoxRight`, `alphabeticBaseline`, `emHeightAscent`, `emHeightDescent`, `fontBoundingBoxAscent`, `fontBoundingBoxDescent`, `hangingBaseline`, `ideographicBaseline` par exemple

	- Du côté du *JS* :

		- L'implémentation de la proposition en stage 3 d'API unifiée `Intl.NumberFormat` a été étendue et permet de formater des chaînes de caractères localisées pour les devises, les unités, la notation scientifique et la notation ingénieur par exemple

	- Du côté des *CSS* :

		- La propriété `content`, qui permet notamment de spécifier le contenu (texte, image) générant les pseudo-éléments `::before` ou `::after` a été étendue et accepte désormais un texte alternatif (à l'instar de l'attribut `alt` des éléments `<img/>`) ; ces pseudo-éléments vont donc désormais pouvoir être lus par les lecteurs d'écrans par exemple

		- Les propriétés logiques `overscroll-behavior-inline` et `overscroll-behavior-block`, versions longues de la propriété `overscroll-behavior`, ont été implémentées

		- La propriété `tab-size` qui définit la taille des tabulations supporte désormais des valeurs non entières

	- Pour plus d'informations, consultez les pages [https://developers.google.com/web/updates/2019/09/nic77,](https://developers.google.com/web/updates/2019/09/nic77,) [https://developers.google.com/web/updates/2019/07/devtools](https://developers.google.com/web/updates/2019/07/devtools) et [https://v8.dev/blog/v8-release-77](https://v8.dev/blog/v8-release-77)

- Les sites *MDN* (la référence en termes de documentation pour le *web*) et *Can I Use* (le site de compatibilité *web* le plus connu) ont annoncé un partenariat : désormais les informations de compatibilité du *MDN* seront affichées lors d'une recherche sur le moteur de recherche *Can I Use*, portant ainsi le nombre de résultats indexés de 500 à environ 10500 ! l'annonce en détails : [https://hacks.mozilla.org/2019/09/caniuse-and-mdn-compat-data-collaboration/](https://hacks.mozilla.org/2019/09/caniuse-and-mdn-compat-data-collaboration/)

- Si vous ne le saviez pas déjà, sachez qu'un des formats de courriels les plus utilisés est *HTML* (oui oui on peut coder ses courriels en *HTML*) ; si vous le saviez déjà, alors vous savez aussi que c'est LE PIRE CALVAIRE pour un développeur de s'assurer de la compatibilité d'un courriel avec les différentes applications de messageries (la cause étant, aussi étonnant que ça puisse paraître, l'absence complète de standard en la matière) ; dans la pratique, il faut ignorer tous les conseils qu'on a pu vous donner pour un coder un site *web* et tout bricoler à l'aide de tableaux `<table></table>` et d'images `<img/>` ; eh bien, bonne nouvelle : le nouveau site *Can I Email*, justement inspiré de *Can I Use*, recense désormais un certain nombre de données sur l'interopérabilité des différents clients *mail* ; direction [https://www.caniemail.com/](https://www.caniemail.com/) toute ! l'annonce en question : [https://www.caniemail.com/news/2019-09-09-introducing-caniemail/](https://www.caniemail.com/news/2019-09-09-introducing-caniemail/)
