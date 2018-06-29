# incubateur.social.gouv.fr [![CircleCI](https://circleci.com/gh/SocialGouv/socialgouv.github.io.svg?style=svg)](https://circleci.com/gh/SocialGouv/socialgouv.github.io)

Site de l'incubateur des Ministères sociaux

⚠ La branche par défaut est `dev`

## Editer le site

 - éditer les pages dans `./pages`
 - placer les éventuelles images dans `./static/images` et les référencer en tant que `/static/images/xxxx.jpg`.

Les fichiers peuvent être au format `.js` ou `.mdx`

Pour trouver des images 📷 : https://unsplash.com

Commiter les changements sur branche dédiée et faire une pull request sur GitHub.

## Dev

Le site est statique et généré avec [next.js](https://github.com/zeit/next.js)

```
git clone
npm i
npm start
```

`npm run build` pour builder une version statique

Les modifs sur la branche `dev` sont automatiquement déployées sur https://socialgouv.github.io

## A propos

Template basé sur [template.data.gouv.fr](https://github.com/etalab/template.data.gouv.fr)

