# #2 BreizhCamp App

## `ts-node`

Pour exécuter du code TypeScript dans un environnement Node, nous allons utiliser l'utilitaire [`ts-node`] (https://github.com/TypeStrong/ts-node).

* Installer les dépendances :

```
npm install --save ts-node typescript @types/node
```

* Compléter le fichier `package.json` :

```json
"scripts": {
    "start": "ts-node index.ts"
  },
```

## Migration TypeScript

* Modifier les extensions des fichiers `.js` en `.ts`.

```
/breizhcamp-2018-console
    index.ts
    ihm.ts
    service.ts
```

* Modifier les imports / exports en utilisant le système de modules ES2015 (`import` et `export`).

* Vérifier le fonctionnement de l'application (à ce stade le typage `any` est toléré).

## Typage TypeScript

* Créer un fichier `domains.js` qui contiendra les structures de données métiers.
 * Ajouter une classe `Session` qui représente une session
 * Ajouter une classe `Presentateur` qui réprésente un présentateur
 
* Utiliser ces structures dans l'application.