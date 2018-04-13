# Bibliothèque externe

Le projet communautaire [DefinitelyTyped](http://definitelytyped.org/) possède une large base d'interface pour les types des bibliothèques JavaScript les plus populaires.

Il s'y trouve des fichiers avec l'extension `.d.ts` qui contiennent la liste de toutes les fonctions publiques des bibliothèques.

Toutes les bibliothèques sont accessibles via un gestionnaire de packages : Typings (https://github.com/typings/typings).

Pour installer Typings :

```
npm install -g typings
```

Pour rechercher une bibliothèque.


```
typings search angular
```

```
adal-angular               dt     https://github.com/AzureAD/azure-activedirectory-library-for-js             1        2016-04-25T20:02:25.000Z
adal-angular/adal          dt     https://github.com/AzureAD/azure-activedirectory-library-for-js             1        2016-07-02T16:42:13.000Z
angular                    dt     http://angularjs.org                                                        2        2017-03-21T20:14:55.000Z
angular-agility            dt     https://github.com/AngularAgility/AngularAgility                            1        2016-07-07T22:12:24.000Z
```

Installer un fichier de définition.

```
typings install dt~angular --global --save
```

L'option `--save` permet de sauvegarder la configuration dans un fichier `typings.json`.

A partir du fichier typings.json seul, le contenu du répertoire typings pourra être généré via `typings install`.

Utiliser une bibliothèque

Référencer le fichier de définition dans le code via un commentaire spécial de TypeScript.

```ts
///<reference path="typings/globals/angular/index.d.ts"/>
angular.module(10, []);
// Error:(3, 16) TS2345: Argument of type 'number' is not
assignable to parameter of type 'string'.
```

Depuis TypeScript 1.6, le compilateur est capable de trouver par lui-même les interfaces des bibliothèques externes si elles sont présentes dans le répertoire node_modules.

