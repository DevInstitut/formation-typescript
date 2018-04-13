# Travaux Pratiques


## Répertoire TP

* Créer un répertoire `/typescript`.

```
/typescript
```

## Compilateur TypeScript
* Installer le compilateur TypeScript.

```
npm install -g typescript
```

* Vérifier l'installation de TypeScript

```
tsc -v
Version 2.3.2
```

## Fichier de configuration `tsconfig.json`

* Exécuter la commande suivante pour générer le fichier de configuration _tsconfig.json_ depuis le répertoire _typescript_.

```
tsc --init
```

* Un fichier tsconfig.json est créé.

* Modifier le paramètre _outDir_ comme suit :

```
"outDir": "./js"
```

Les fichiers javascript seront générés dans le répertoire _js_.

## Exemple Meteo

* Créer un fichier _meteo.ts_.

```
/typescript
    meteo.ts
```

* Se positionnez dans le répertoire _typescript_ et lancer le compilateur TypeScript en mode _watch_.

```
tsc --watch
```

Un fichier _js/meteo.js_ est généré. Visualiser le.

```
/typescript
    /js
        meteo.js
    meteo.ts
```

* Compléter le fichier _meteo.ts_ comme suit :

```ts
console.log("Meteo App")
```

* Visualiser le fichier _js/meteo.js_.

* Exécuter le code généré :

```
node js/meteo.js
```

Dans la suite de l'exercice, nous compléterons le fichier _meteo.ts_.

* Créer une classe Meteo.


```ts
class Meteo {

}
```

Visualiser le résultat `js/meteo.js`.

```js
"use strict";
console.log("Meteo App");
var Meteo = (function () {
    function Meteo() {
    }
    return Meteo;
}());
```

Reconnaissez-vous le _Module Pattern_ ?

* Ajouter un champ _ville_ de type `string` :


```ts
class Meteo {

    ville:string

}
```

Visualiser le résultat `js/meteo.js`.

Il n'y aucun changement.

Sauriez-vous expliquer pourquoi ?

* Supprimer le champ _ville_. Ajouter le constructeur suivant :

```ts
class Meteo {

    constructor(private _ville:string, private _temperature:number){
    }

}
```

* Créer un objet Meteo


```ts
// ...

let nantesCeMatin = new Meteo()

```

Vous devriez avoir l'erreur de compilation suivante :

```
meteo.ts(8,21): error TS2554: Expected 2 arguments, but got 0.
```

Savez-vous pourquoi ?

Visualiser le fichier _js/meteo.js_ :


```ts
"use strict";
console.log("Meteo App");
var Meteo = (function () {
    function Meteo(_ville, _temperature) {
        this._ville = _ville;
        this._temperature = _temperature;
    }
    return Meteo;
}());
var nantesCeMatin = new Meteo();
```

Malgré l'erreur de compilation, le fichier généré contient la mise à jour.
Ceci illustre le caractère permissif du compilateur TypeScript.

* Corriger l'erreur de compilation :

```ts
let nantesCeMatin = new Meteo('Nantes', 12);
```

* Ajouter la méthode _toString_ et afficher son résultat dans le console.

```ts
class Meteo {
    constructor(private _ville:string, private _temperature:number){
    }

    // A AJOUTER
    toString():string {
        return  `${this._ville} - ${this._temperature}°C`
    }
}
let nantesCeMatin = new Meteo('Nantes', 12);

// A AJOUTER
console.log(nantesCeMatin.toString())
```

* Visualiser le fichier généré

```js
"use strict";
console.log("Meteo App");
var Meteo = (function () {
    function Meteo(_ville, _temperature) {
        this._ville = _ville;
        this._temperature = _temperature;
    }
    Meteo.prototype.toString = function () {
        return this._ville + " - " + this._temperature + "\u00B0C";
    };
    return Meteo;
}());
var nantesCeMatin = new Meteo('Nantes', 12);
console.log(nantesCeMatin.toString());
```

* Exécuter le code généré :

```
node js/meteo.js
```

## Exemple Voyage

* Créer un fichier `voyage.ts`.

```
/typescript
    meteo.ts
    voyage.ts
```

* Créer une classe `Sejour` avec les propriétés **privées** suivantes :
** nom (string)
** prix (number)

* Ajouter des _getters_ permettant d'accéder aux propriétés privées.

* Créer une classe `SejourService` qui possède une propriété privée de type `Sejour[]`;

* Dans le constructeur de la classe `SejourService`, initialiser la propriété Sejour[] avec plusieurs objets de type `Sejour`.

* Dans la classe `SejourService`, ajouter une méthode de recherche de séjour par nom :
 * le service prend en paramètre un nom de type `string`
 * le service a un type retour `Sejour`.

* Créer une instance de la classe `SejourService`, invoquer la méthode de recherche créée et afficher le résultat dans la console.
