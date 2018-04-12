# cast

* Transformer une variable any en variable typée.

```ts
let uneVal: any = 'Une string';

let taille: number = (<string> uneVal).length;

let uneValString:string = uneVal;
```