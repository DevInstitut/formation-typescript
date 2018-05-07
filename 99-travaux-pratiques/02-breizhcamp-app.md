# #2 BreizhCamp App

## `ts-node`

Pour exécuter du code TypeScript dans un environnement Node, nous allons utiliser l'utilitaire [`ts-node`] (https://github.com/TypeStrong/ts-node).

* Installer les dépendances :

```
npm install --save ts-node typescript @types/node @types/request-promise-native @types/jsdom
```

* Compléter le fichier `package.json` :

```json
"scripts": {
    "start": "ts-node index.ts"
  },
```

* Générer le fichier tsconfig.json

```
tsc --init
```

* Compléter les librairies accessibles :

```json
{
  "compilerOptions": {
  ...
     "lib": ["dom", "dom.iterable", "esnext", "scripthost"],                             /* Specify library files to be included in the compilation. */
  ... 
  }
}
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

Exemple d'import :

```js
import jsdom from 'jsdom';
import request from 'request-promise-native';
```

* Vérifier le fonctionnement de l'application (à ce stade le typage `any` est toléré).

## Typage TypeScript

* Créer un fichier `domains.ts` qui contiendra les structures de données métiers.
 * Ajouter une classe `Session` qui représente une session
 * Ajouter une classe `Presentateur` qui réprésente un présentateur
 
* Utiliser ces structures dans l'application.