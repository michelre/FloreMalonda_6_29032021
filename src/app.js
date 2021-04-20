import Avatar from './components/Avatar.js';

function createNode(element) {
    return document.createElement(element);
}

const div = document.querySelector('#photographers');

fetch('database.json')
.then((resp) => resp.json())
.then(function(data) {
  let photographers = data.photographers;
  return photographers.map(function(photographer) {
    const avatar = new Avatar(photographer.portrait, photographer.name, photographer.city, photographer.country, photographer.tagline,photographer.price, photographer.tags);
    let divAvatar = createNode('div');
    divAvatar.innerHTML =avatar.render();
    div.append(divAvatar);
  })
})
.catch(function(error) {
  console.log(error);
});





