import Presentation from './components/Presentation.js';

function createNode(element) {
    return document.createElement(element);
}

const div = document.querySelector('#photograph');

fetch('database.json')
.then((resp) => resp.json())
.then(function(data) {
  let photograph = data.photographers;
  return photograph.map(function(photographer) {

    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


    const presentation = new Presentation(photographer.portrait, photographer.name, photographer.city, photographer.country, photographer.tagline, photographer.tags);
    let divPresentation = createNode('div');
    divPresentation.innerHTML =presentation.render();
    div.append(divPresentation);
  })
})
.catch(function(error) {
  console.log(error);
});