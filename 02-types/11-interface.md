# Interface

## Créer et faire appliquer un contrat.

```ts
function publier(livre:{published:boolean}):void {
    // ... publication
    livre.published = true;
}
```
## Mot clé `interface`

```ts
interface Publiable {
    published: boolean;
}
function publish(livre:Publiable):void {
    // ... publication
    livre.published = true;
}
```

## Interface & héritage

* Mot clé `extends`

```ts
interface Publiable {
    publie: boolean;
}

interface Editable {
    edite: boolean;
}

interface Livre extends Publiable, Editable {
}
```