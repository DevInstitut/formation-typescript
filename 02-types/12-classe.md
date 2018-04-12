# Classe

Type personnalisé.

```ts
class Livre {

}

let nouveauLivre:Livre = new Livre();
```

Une classe peut avoir des propriétés.

Elles sont **publiques par défaut**.

```ts
class Personne {
    nom:string;
    prenom:string;
}
```

La visibilité d’une propriété peut être modifiée via les mots clés :
* `public`
* `private`
* `protected`

```ts
class Personne {
    public nom:string;
    private _secret:string;

    protected getNomComplet():string {
        return `nom ${this._secret}`;
    }
}
```

Une classe abstraite peut-être créée via le mot clé `abstract`.

```ts
abstract class BaseObject {
    abstract getId(): number;
}
class Personne extends BaseObject {
    private _id:number;
    public nom:string;
    private _secret:string;

    getId():number {
        return this._id;
    }
}
```

Notation raccourci pour déclarer la visibilité des membres via le constructeur.

```ts
class Personne {
    constructor(private _id:number, public nom:string, private _secret:string) {
    }

    protected getNomComplet():string {
        return `nom + ${this._secret}`;
    }
}
```

Une classe peut implémenter une interface via le mot clé implements.

Une classe peut implementer plusieurs interfaces.

```ts
interface Publiable {
    published: boolean;
    publish():void;
}
class Livre implements Publiable {
    published:boolean;

    publish():void {
        // publication ...
    }
}
```
