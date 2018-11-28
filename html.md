# Remarques et idées

- Partager le cours sur *GitLab* !

- Faire le sujet de TP sur un document à part ?

- Enseigner une vision moderne des langages du *Web* : faire abstraction des anciennes pratiques si il en existe de plus moderne

- Evoquer les problèmes de comptabilité seulement une fois arrivé sur le CSS

- Pas forcément besoin de le dire, mais conventions d'écritures en pratique et dans ce cours (à la *XHTML*) :

	- minuscules pour les balises *HTML* (généralement insensible à la casse),

	- guillemets doubles autour des valeurs des attributs (sinon guillemets simples voire pas de guillemet),

	- *slash* à la fin des balises auto-fermantes

	- *doctype* en capitales

	- présence obligatoire de la valeur d'un attribut booléen (une chaîne vide)

# Structuration de page en *HTML*

## Syntaxe d'un élément

### Noeuds

- Schéma d'un élément en *HTML* : nom, balises ouvrantes et fermantes, contenu, attributs

- Deux écritures selon le type d'élément : balises par paire (`<p class="nice">Bonjour</p>`) ou balises autofermantes (`<img src="a.jpg"/>`) : éléments sans contenu généralement

- Commentaires (`<!-- commentaire -->`)

### Attributs
- Attributs universels (`class`, `id`, `title`...)

- Pas besoin d'évoquer les attributs universels à éviter (`style`, `on...`...)

- Attributs spécifiques (`src`, `alt`...)

- PARLER DES ATTRIBUTS `class` et `id`

### Échappement de caractères

`&quot;`, `&amp;`, `&apos;`, `&lt;`, `&gt;`

## Contenu du document

### Corps de texte

- Un fichier texte (à ouvrir avec un éditeur de texte) dont l'extension est généralement `.html`

- Commencer à créer ensemble un document `index.html` à cet endroit et décrire comment l'ouvrir avec le navigateur et comment recharger la page

- Le *HTML* sert initialement à structurer un document (comme un livre, un CV) à l'instar d'un traitement de texte

- Balises classiques (`h1`, `h2`, `p`, `hr`)

- Pas besoin d'évoquer `br` car son utilisation est souvent mauvaise

- Est-il nécessaire d'évoquer les autres balises avec moins de valeurs sémantique (`b`, `i`, `u`, `small`) ? et `sup` et `sub` ? et `mark` ? OUI

- Formatage sémantique de texte (`em` pour insister, `strong` pour insister fortement, `del` pour indiquer une suppression de texte et `ins` pour indiquer une insertion de texte lors modification du document) et indiquer qu'il s'agit bien d'influencer le fond et non la forme

- Pas besoin d'évoquer `div` et `span` avant d'arriver aux *CSS*: ils sont censés être des éléments de dernier recours SI

### Des références externes

- Ancres / liens hypertextes (element `a` avec son attribut `href` qui est un chemin) et en profiter pour indiquer qu'on peut imbriquer des éléments

- Pas besoin d'évoquer l'attribut `target` ou les ancres vers des éléments

- Images (element `img` avec son attribut `src`... et `alt` ?) et donner un lien vers une image (laquelle ?)

### Structure d'un document valide -> A REPORTER A UNE AUTRE SEANCE

- Commencer par faire remarquer les problèmes d'encodages

- *doctype*

- Tête et corps du document (`html`, `head`, `body`)

- Titre (`title`)

- Résoudre les problèmes d'encodages avec `meta`

- Ajouter les attributs `lang` et `dir`

### Structures plus complexes

- Listes (`ol`, `ul` et `li`)

- Tableaux (`table`, `tr`, `th` et `td` c'est déjà pas mal)

---

### Formulaires

- Formulaires (`form`) + `action` + `method`

- Boutons et champs (`button`, `input`, `textarea`, `label`) + `for` + `name`

### Head

- `title`

- `meta` (`charset`, `viewport`)

- `link` (*favicon*)

- `style` + `script`


### Compléments : pour aller plus loin

- Base (`base`)

- Listes (`dl`)

- Citations (`bloquote`, `q` et `cite`)

- Code (`pre`, `code`) ? (ça relèverait déjà un peu trop de la forme)

- Types de champs
