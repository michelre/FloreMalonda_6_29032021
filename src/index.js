// ------------------ Components -------------------------

import TopBar from './components/TopBar.js';
import NavHome from './components/NavHome.js';
import Avatar from './components/Avatar.js';
// import ButtonTop from './components/ButtonTop.js';

const topbar = new TopBar();
const navhome = new NavHome();
// const buttontop = new ButtonTop();

// ------------- DOM -----------------------------

function createNode(element) {
  return document.createElement(element);
}



// -----------------------------------------------------

document.querySelector(`#app`).innerHTML = `<div class="header">${topbar.render()} ${navhome.render()}</div>`

const div = document.querySelector('#photographers');

fetch('database.json')
.then((resp) => resp.json())
.then(function(data) {
  return data.photographers.map(function(photographer) {
    const avatar = new Avatar(photographer.portrait, photographer.name, photographer.city, photographer.country, photographer.tagline,photographer.price, photographer.tags, photographer.id);
    let divAvatar = createNode('div');
    divAvatar.innerHTML = avatar.render();
    div.append(divAvatar);
    divAvatar.style.margin = 0;
    divAvatar.style.padding = 0;
    divAvatar.style.display = 'flex'; 
  })

})
.catch(function(error) {
  console.log(error);
});






