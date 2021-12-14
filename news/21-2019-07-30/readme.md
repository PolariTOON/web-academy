# Bulletin 21 - 30/07/2019

*Par Tristan LE GODAIS ([@PolariTOON](https://github.com/PolariTOON))*

- Ce jour sort *Chrome 76* avec plusieurs changements notables :

	- Du côté des outils de développement... de *Firefox* !? :

		- *Puppeteer*, une API initialement conçue pour contrôler *Chrome* de l'extérieur via *Node.js*, est désormais compatible avec *Firefox* (à titre expérimental) ; un des intérêts d'un tel outil est de pouvoir automatiser des tests au sein des navigateurs, que ce soit au niveau de contenu, du comportement ou de l'apparence ; pour l'installer, un simple `npm i puppeteer-firefox` suffit !

	- Du côté de *Flash* !? :

		- Dans le cadre du plan de retrait de *Flash* de la plateforme *web*, *Chrome* ne mémorise désormais les préférences d'activation de *Flash* de l'utilisateur que pour la durée d'une session ; le même changement arrive dans la prochaine version de *Firefox*

	- Du côté du *JS* :

		- La proposition `Promise.allSettled()` tout juste standardisée, dont je vous parlais la semaine dernière, est désormais disponible

		- La toute nouvelle méthode `HTMLFormElement.requestSubmit()` permet de soumettre un formulaire via un script, après avoir vérifié les contraintes de validation et en émettant un événement `"submit"`, ce que ne permettait pas la méthode `HTMLFormElement.submit()`

		- L'implémentation de l'API *Async Clipboard* dans *Chrome* permet désormais de lire et d'écrire des images *PNG* dans le presse-papier, et non plus seulement du texte

	- Du côté des *CSS* :

		- La propriété `backdrop-filter` initialement proposée par *Apple* sous le nom `-webkit-backdrop-filter` a été implémentée selon une version plus moderne de la spécification ; contrairement à la propriété `filter` qui s'applique à un élément lui-même, le filtre s'applique ici sur son arrière-plan

		- *Chrome* supporte à son tour la *media query* `prefers-color-scheme` qui permet d'ajuster le thème (clair / sombre / sans préférence) d'un site selon les préférences de l'utilisateur ; le support de la fonctionnalité étant désormais très bon (les trois moteurs de navigateurs l'implémentent !), on devrait voir émerger rapidement plus de sites avec un thème sombre dédié

	- Pour plus d'informations, consultez les pages [https://developers.google.com/web/updates/2019/07/nic76,](https://developers.google.com/web/updates/2019/07/nic76,) [https://developers.google.com/web/updates/2019/05/devtools](https://developers.google.com/web/updates/2019/05/devtools) et [https://v8.dev/blog/v8-release-76](https://v8.dev/blog/v8-release-76)

- Par ailleurs, *Igalia* a annoncé avoir quasiment terminé d'implémenter le noyau de *MathML* dans *Chrome* ; on peut enfin se mettre à rêver d'interopérabilité en ce qui concerne les fomules mathématiques sur le *web*... ; l'annonce en détails : [https://mathml.igalia.com/news/2019/07/25/project-status-after-one-semester/](https://mathml.igalia.com/news/2019/07/25/project-status-after-one-semester/)
