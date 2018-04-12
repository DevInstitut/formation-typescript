# Décorateurs

* Fonctionnalité ajoutée en TypeScript 1.5
* Permet de faire de la méta- programmation
* Préfixés par `@`, il ressemble aux annotations Java ou C#
* Peut s’ajouter à une méthode, un attribut ou une classe
* Proposé à une standardisation (ES7/ES2016 ?)

```ts
class Personne {

    @Audit()
    getAdresse() {
    // ...
    }

}

```