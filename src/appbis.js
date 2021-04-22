// import Presentation from './components/Presentation.js';

// function createNode(element) {
//     return document.createElement(element);
// }

// const div = document.querySelector('#photograph');

// fetch('database.json')
// .then((resp) => resp.json())
// .then(function(data) {
//   let photograph = data.photograph;
//   return photograph.map(function(photographer) {
//     const presentation = new Presentation(photographer.portrait, photographer.name, photographer.city, photographer.country, photographer.tagline,photographer.price, photographer.tags);
//     let divPresentation = createNode('div');
//     divPresentation.innerHTML =presentation.render();
//     div.append(divPresentation);
//   })
// })
// .catch(function(error) {
//   console.log(error);
// });