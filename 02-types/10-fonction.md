# Fonction

Les paramètres et le retour d’une fonction peuvent être typés.


```ts
function rechercher(titreLivre:string): Livre {
    // ... recherche de livre
    return new Livre();
}

function publier(livre:Livre): void {
    // ... publication
}
```

Par défaut, tous les paramètres sont obligatoires.

Pour rendre un paramètre optionnel :

* Mot clé `?`
* Si aucune valeur n’est passée, elle vaut `undefined`.

```ts
function publish(enligne?:boolean):void {
    // ...
}
```