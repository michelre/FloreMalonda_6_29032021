// import Button from './components/Button.js';
// import Tag from './components/Tag.js';

// const button = new Button();
// const tag = new Tag();

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.querySelector('#photographer');
const url = 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeDataFR.json';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let authors = data.results;
  return authors.map(function(photographer) {
    let li = createNode('li');
    let img = createNode('img');
    let span = createNode('span');
    img.src = photographer.portrait;
    span.innerHTML = `${photographer.name}`;
    append(li, img);
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});

// document.querySelector(`#app`).innerHTML = `<div>${button.render()} ${tag.render()}</div>`



