# Bulletin 20 - 24/07/2019

*Par Tristan LE GODAIS ([@PolariTOON](https://github.com/PolariTOON))*

- Cette semaine se tient la réunion bimestrielle du *TC39* lors de laquelle une proposition s'est vue standardisée :

	- La proposition `Promise.allSettled()` est ainsi passée au stage 4 ; contrairement à la méthode statique `Promise.all()` dont la promesse retournée peut être rejetée (*rejected*) dès lors qu'une des promesses en attente a été rejetée, la nouvelle méthode statique `Promise.allSettled()` retourne une promesse qui n'est accomplie (*fulfilled*) que lorsque l'intégralité des promesses en attente a été traitée (*settled*), peut importe qu'elles soient accomplies ou rejetées ; sa petite sœur, `Promise.any()` devrait être pour bientôt elle aussi ; pour plus d'informations, consultez la proposition [https://github.com/tc39/proposal-promise-allSettled](https://github.com/tc39/proposal-promise-allSettled) elle-même

- Annoncés indépendamment en début de mois, deux nouveaux moteurs *JavaScript* sont arrivés sur le devant de la scène :

	- *QuickJS*, un interpréteur et compilateur écrit en *C* par le fameux Fabrice Bellard, qui est annoncé comme quasiment conforme à la spécification *ES2019*, ce qui en ferait potentiellement le moteur le plus conforme parmi ceux existants ; rendez-vous sur le site officiel [https://bellard.org/quickjs/](https://bellard.org/quickjs/) pour plus d'informations

	- *Hermes*, un moteur réalisé par *Facebook* dont l'objectif est d'optimiser les applications utilisant *React Native*, mais qui se veut moins complet car il n'implémente qu'un sous-ensemble de la spécification *ES2015* ; consultez l'annonce [https://code.fb.com/android/hermes/](https://code.fb.com/android/hermes/) pour plus de détails

	- Les deux moteurs devraient vraisemblablement rejoindre prochainement la système de tests de *Bocoup*, [https://test262.report/](https://test262.report/) ; on pourra alors mieux évaluer leur potentiel respectif
