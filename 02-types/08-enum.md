# enum

Enumération (liste fixe de valeurs).

Elle représente dans valeurs numériques numérotées à partir de 0.

```ts
enum Civilite {Monsieur, Madame, Mademoiselle};

let c1:Civilite = Civilite.Monsieur;

// 1,2,3
enum Civilite1 {Monsieur=1, Madame, Mademoiselle};

// 1, 10, 100
enum Civilite2 {Monsieur=1, Madame=10, Mademoiselle=100};

// recherche par valeur
let valEnum:string = Civilite2[10];

```