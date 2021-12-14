# Bulletin 27 - 31/10/2019

*Par Tristan LE GODAIS ([@PolariTOON](https://github.com/PolariTOON))*

- Youhou ! après 1 an et demi de travail, le groupe de travail *Modules* de *Node.js* a atteint un consensus hier pour *unflag* dans la version *13* les modules *ECMAScript* standardisés dès 2015 :

	- on pourra sans doute les utiliser sans le *flag* `--experimental-modules` dès la semaine prochaine dans la version *13.1* en utilisant la propriété `"type": "module"` dans le fichier `package.json` ; plus question de développer des modules *CommonJS* à coups de `require()` dans le futur !

	- la fonctionnalité sera sans doute rétroportée vers la version *12 LTS* dans les mois prochains

	- en attendant (je suis impatient !), voici un lien vers l'annonce de Myles Borins : [https://twitter.com/MylesBorins/status/1189618753065144322](https://twitter.com/MylesBorins/status/1189618753065144322) et un autre vers la résolution prise hier : [https://github.com/nodejs/modules/issues/408#issuecomment-548209785](https://github.com/nodejs/modules/issues/408#issuecomment-548209785)
