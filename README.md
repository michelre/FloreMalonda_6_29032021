# FishEye

Sixième projet réalisé dans le cadre du parcours "Développeur d'applications Front-End" d'OpenClassrooms

## IMPORTANT POUR LE PROJET : 

- Ecrire du code JavaScript maintenable : utilisation de Eslint
- Assurer l'accessibilité d'un site web
- Gérer les évènements d'un site avec JavaScript
- Développer une application web modulaire avec des design patterns


## TO DO : 

- créer le composant LightBox
- faire le bouton sur page Home + le filter sur les tags (homepage)
- revoir le composant InfoBlock (pb affichage)
- s'occuper de l'accessibilité du site
- gérer l'affichage desktop
- revoir l'affichage de la modal




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


La propriété `Element.innerHTML` de Element récupère ou définit la syntaxe HTML 


## Pourquoi utiliser la programmation orientée object en JS ? 

- avoir une meilleure organisation de son code en utilisant des classes : une classe est un modèle pour un objet dans le code. Elle permet de construire plusieurs objets du même type (appelés instances de la même classe) plus facilement, rapidement et en toute fiabilité.
- sécurité du code (maintenabilité et encapsulation)
- réutilisation du code (notion d'héritage)



## Méthode fetch : 

pour la récupération de données, utiliser (à modifier pour l'adapter pour passer du react utilisé dans le P11 au JS): 
```js
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('authors');

fetch(`database.json`)
.then((resp) => resp.json())
.then(function(data) {
  let authors = data.results;
  return authors.map(function(author) {
    let li = createNode('li');
    let img = createNode('img');
    let span = createNode('span');
    img.src = author.picture.medium;
    span.innerHTML = `${author.name.first} ${author.name.last}`;
    append(li, img);
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});
```

## Compétences évaluées

- Ecrire du code JavaScript maintenable
- Assurer l'accessibilité d'un site web
- Gérer les évènements d'un site avec JavaScript
- Développer une application web modulaire avec des design patterns

## Sources de travail : 

- https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript-fr // introduction des classes en JS

- https://grafikart.fr/tutoriels/web-component-1201 // tuto composant JS

- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions // syntaxe simplifiée

- https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON 

- https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1 // factory method

- https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data-fr



https://ichi.pro/fr/javascript-comment-creer-un-bouton-j-aime-60570904238201
Étape 2:

Maintenant, nous devons regarder l'intérieur de cette fonction addPictureToPage, en particulier la partie relative aux likes:


Ici, nous déclarons une variable et la définissons égale au premier élément HTML avec la classe «likes», puis, en utilisant notre nouvelle variable, nous définissons le texte interne dudit élément HTML sur «$ {data.likes} likes» qui finira par ressembler à ceci sur la page du navigateur: "0 likes". Mais cela ne restera pas longtemps à zéro.

Ensuite, nous utilisons un deuxième querySelector pour déclarer une variable égale à l'élément HTML que nous définissons comme bouton sur lequel l'utilisateur appuiera pour aimer l'image. À propos, la partie pertinente du HTML ressemble à ceci:


Maintenant que nous avons une variable égale au bouton like, nous ajoutons simplement un écouteur d'événement qui écoute un clic sur l'élément de bouton like. C'est à l'intérieur du corps de cet auditeur d'événements que nous commençons à avoir de la fantaisie. Nous affectons le texte interne de l'élément de compteur likes comme étant égal à la valeur de retour d'une autre fonction, incrementLikes, et nous passons également l'objet contenant des informations sur l'image dans cette fonction. Cela nous amène à la troisième étape.

Étape 3:


La première chose que nous faisons à l'intérieur de cette nouvelle fonction est de déclarer une variable appelée «likes» que nous mettrons à zéro pour le moment. Ensuite, nous faisons notre première requête de récupération de la fonction, dans cette requête de récupération, nous trouvons le nombre actuel de likes en fonction du serveur. Vous vous demandez peut-être pourquoi nous n'avons pas simplement transmis le nombre de likes lorsque nous avons appelé la fonction, ou pourquoi nous ne vérifions pas simplement le nombre de likes stockés dans l'objet image que nous avons transmis à la fonction. La raison en est que ces données sont désormais anciennes. Il peut très bien être obsolète, ses origines remontent à la première demande de récupération que nous avons faite lors du premier chargement de la page, l'utilisateur peut avoir fait toutes sortes de choses sur la page. Parmi les nombreuses choses que l'utilisateur a pu faire, il se peut qu'il ait déjà cliqué sur le bouton J'aime, qu'il clique peut-être à nouveau dessus. C'est un peu non conventionnel pour nous de permettre à l'utilisateur d'aimer quelque chose plus d'une fois, mais pour cette application, nous y allons. Maintenant que nous savons que nous avons le nombre actuel de likes et que nous l'avons stocké dans notre variable pratique «likes», nous créons une variable «newLikes» qui est égale aux anciens likes plus un, ou en d'autres termes, nous sommes incrémenter les goûts. Maintenant, nous avons juste besoin de mettre à jour notre serveur, c'est là qu'intervient la deuxième requête de récupération. Nous utilisons une méthode de patch dans cette récupération, et nous définissons la valeur likes de cette image égale à notre variable «newLikes». Il ne reste plus qu'à formater la valeur de retour pour qu'elle soit quelque chose qui a du sens pour le contexte dans lequel nous l'avons appelée. Nous créons une chaîne exprimant le nombre mis à jour de likes, puis retournons cette chaîne.