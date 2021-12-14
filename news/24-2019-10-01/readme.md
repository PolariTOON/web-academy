# Bulletin 24 - 01/10/2019

*Par Tristan LE GODAIS ([@PolariTOON](https://github.com/PolariTOON))*

- Comme tous les deux mois, le *TC39* se réunit pour faire évoluer *ECMAScript* et il y a quelques minutes, une des plus anciennes propositions vient d'être standardisée, `globalThis` ! avant, l'objet global portait un nom différent selon l'environnement (~ `window` sur le *web*, `self` dans les *workers* ou encore `global` dans *Node.js*) ce qui rendait l'écriture de code portable (et notamment de *polyfills*) difficile, d'où la volonté de le standardiser ; mais paradoxalement c'est aussi ce qui a ralenti l'adoption de cette proposition car un certain nombre de choix de noms pour cette variable (`global` par exemple) cassait une très grande partie du *web* existant, à tel point que le nom final a été gardé secret un certain temps... désormais le nom de l'objet global est fixé et implémenté par tous les navigateurs et *Node.js* ! voici la proposition en détails : [https://github.com/tc39/proposal-global](https://github.com/tc39/proposal-global) et si vous voulez comprendre les défis qu'ont posés cette standardisation et comment on en est arrivé là, je vous invite à lire [https://github.com/tc39/proposal-global/blob/master/NAMING.md](https://github.com/tc39/proposal-global/blob/master/NAMING.md)