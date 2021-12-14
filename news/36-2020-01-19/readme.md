# Bulletin 36 - 19/01/2020

*Par Tristan LE GODAIS ([@PolariTOON](https://github.com/PolariTOON))*

- 13 mois après avoir été annoncée par *Microsoft*, la nouvelle version d'*Edge* basée sur *Chromium 79* est sortie mercredi dernier ; après l'arrêt en 2013 de *Presto*, l'ancien moteur de rendu derrière *Opera*, c'est donc au tour de *EdgeHTML* de s'éteindre ; l'ancien moteur *JavaScript* *Chakra*, bien que toujours en développement, n'est pas non plus dans cette nouvelle mouture du navigateur ; si d'un côté il s'agit d'une nouvelle perte cruciale pour la diversité du *web*, d'un autre côté cela apporte un élan de modernisation dans le paysage des navigateurs ; petit tour des nouveautés qui sont donc très nombreuses :

	- La nouvelle version, qui ne vient apparemment pas avec la mise à jour de *Windows 10*, est disponible au téléchargement pour *Windows 7+* (d'ailleurs *Windows 7* ne reçoit plus de mises à jour de sécurité depuis mardi), pour *Mac* et il se dit que ça ne saurait tarder pour *Linux* ; rappelons que jusque là, le dernier navigateur *Microsoft* à avoir été disponible pour *Mac* était *Internet Explorer 5* de 2000 à 2006 ; c'étaient alors encore les débuts d'*HTML 4*, de *CSS 2* et de *ECMAScript 3* ; *Firefox*, *Safari* et *Chrome* n'existaient pas...

	- Du côté de *HTTP* :

		- Ajout du support de *CSP 3*, *HTTP Client Hints*, *Network Error Logging*, *Origin-Signed HTTP Exchanges*, *Preconnect Resource Hints*, *Public Key Pinning Extension for HTTP*, *SPDY/3*, *TLS 1.3*...

	- Du côté du *HTML* :

		- Ajout du support des éléments `<details></details>`, `<dialog></dialog>`, `<summary></summary>`...

		- Ajout du support des attributs `accept=""`, `inputmode=""`, `preload=""`, `reversed=""`, `srcdoc=""`...

		- Ajout du support des images *APNG*, des *Custom Elements*, du *Shadow DOM*, du manifeste *Web App*...

	- Du côté du *JS* :

		- Ajout du support des itérateurs et générateurs asynchrones, de la boucle `for await (... of ...) {}`), de l'opérateur `...` pour les objets, de `Array.prototype.flat()` et `Array.prototype.flatMap()`, des `BigInt`s, de l'import dynamique `import()`, de *Shared Memory and Atomics*...

		- Ajout du support de `requestIdleCallback()`, `HTMLCanvasElement.prototype.toBlob()`, `SVGElement.prototype.dataset`, de `EventSource`, de `TextDecoder`, de `TextEncoder`, du *drag and wrop* de dossiers, du cinquième paramètre pour l'évènement `"error"` dans les *Workers*, des *Shared Web Workers*...

		- Ajout du support des APIs *Accelerometer*, *Background Sync*, *Battery Status*, *CSS Font Loading*, *CSSOM View smooth scroll*, *CSS Paint*, *File Writer*, *Geometry Interfaces*, *Gyroscope*, *IndexedDB Arrays and MultiEntry*, *Mangetometer*, *Media Capture*, *Media Fragments*, *Media Recorder*, *Media Session*, *Orientation Sensor*, *Payment Handler*, *Performance Observer*, *Picture in Picture*, *Quota Management*, *Resize Observer*, *RTC Data Channels*, *Screen Orientation*, *Speech Recognition*, *SVG+SMIL Animation*, *Vibration*, *Web Animations*, *Web Bluetooth*, *Web Crypto*, *Web MIDI*, *Web Share*, *Web Speech*, *Web SQL Database*, *Web USB*...

	- Du côté des *CSS* :

		- Ajout du support des propriétés `all`, `background-blend-mode`, `caret-color`, `contain`, `image-rendering`, `font-variant-*`, `mix-blend-mode`, `resize`, `object-fit` et `object-position`, `offset-*`, `scroll-margin-*`, `scroll-padding-*`, `scroll-snap-*`, `shape-*` `tab-size`, `text-orientation`, `will-change`, `-webkit-text-stroke`, de la plupart des propriétés logiques...

		- Ajout du support du sélecteur `[ i]`...

		- Ajout du support des pseudo-classes `:default`, `:focus-within`, `:placeholder-shown`, `:scope`...

		- Ajout du support des pseudo-éléments `::placeholder`, `::-webkit-scrollbar`...

		- Ajout du support des valeurs `contents`, `flow-root`, `min-content`, `max-content`, `pan-down`, `pan-left`, `pan-right`, `pan-up`, `system-ui`...

		- Ajout du support des fonctions `clamp()`, `conic-gradient()`, `env()`, `filter(url())`, `image-set()`, `max()`, `min()`, `repeating-conic-gradient()`...

		- Ajout du support des couleurs `#rgba`, `#rrggbbaa`..

		- Ajout du support des *media queries* `prefers-color-scheme`, `prefers-reduced-motion`...

	- Du côté de *WebGL* :

		- Ajout du support de *WebGL 2.0*

	- La plupart des informations ci-dessus proviennent d'un croisement d'informations entre [https://developer.microsoft.com/en-us/microsoft-edge/status/](https://developer.microsoft.com/en-us/microsoft-edge/status/) et [https://caniuse.com/#compare=edge+18,edge+79](https://caniuse.com/#compare=edge+18,edge+79) et sont sans doute pour certaines inexactes, car je n'ai pas trouvé d'annonce officielle des changements entre *Edge 18* et *Edge 79* (notez le saut de version)
