# FloreMalonda_6_29032021
Sixième projet réalisé dans le cadre du parcours "Développeur d'applications Front-End" d'OpenClassrooms



## Pourquoi utiliser un design pattern?
- Pour accélérer le processus de développement en fournissant des paradigmes de développement éprouvés.

- Pour anticiper des problématiques qui peuvent ne devenir visibles que plus tard dans la mise en œuvre.

- Pour améliorer la lisibilité du code en fournissant une standardisation.



## Travail des composants JS : 

- Les classes en JavaScript n'offrent pas réellement de fonctionnalités supplémentaires, et sont souvent décrites comme fournissant du « sucre syntaxique » par rapport aux prototypes et à l'héritage, en ce sens qu'elles offrent une syntaxe plus propre et plus élégante.

- Classes JS =  syntaxe simplifiée

- Étendre une classe : L'une des caractéristiques avantageuses des fonctions de constructeur et des classes est qu'elles peuvent être étendues à de nouveaux plans d'objet basés sur le parent. Cela permet d'éviter la répétition du code pour des objets qui sont similaires mais qui nécessitent des caractéristiques supplémentaires ou plus spécifiques. De nouvelles fonctions de constructeur peuvent être créées à partir du parent en utilisant la méthode call(). Dans l'exemple ci-dessous, nous allons créer une classe de personnage plus spécifique appelée Mage, et lui attribuer les propriétés de Hero en utilisant call(), tout en ajoutant une propriété supplémentaire.

### Exemple code composant avec les class JS 



```js
class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    // Adding a method to the constructor
    greet() {
        return `${this.name} says hello.`;
    }
}
```

autre exemple : 

```js
// Initializing a class
class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    // Adding a method to the constructor
    greet() {
        return `${this.name} says hello.`;
    }
}

// Creating a new class from the parent
class Mage extends Hero {
    constructor(name, level, spell) {
        // Chain constructor with super
        super(name, level);

        // Add a new property
        this.spell = spell;
    }
}
```



## Sources de travail : 
- https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript-fr // introduction des class en JS

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions // syntaxe simplifiée

