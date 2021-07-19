// ------------------ Components -------------------------
import Avatar from './components/Avatar.js';
import TopBar from './components/TopBar.js';
import NavHome from './components/NavHome.js';
import ButtonTop from './components/ButtonTop.js';

class Index {
  constructor(){
      this.photographers = [];
      (async () => {
        await this.loadData();
        this.renderDOM();
      })() //Immediate function
  }

  /**
   * On charge les données
   * @returns {Promise<any>}
   */
  loadData(){
    return fetch('database.json')
        .then((resp) => resp.json())
        .then((data) => {
          this.photographers = data.photographers;
        })
        .catch(function(error) {
          console.log(error);
        });
  }

  filterByTags(tag){
    const photographersFilter = this.photographers.filter((photographer) => {
      return photographer.tags.includes(tag)
    })

    this.renderPhotographersDOM(photographersFilter);
  }

  backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  customBackToTop() {
    const btntop = document.querySelector('.top-btn');
    if (document.body.scrollTop > 4 || document.documentElement.scrollTop > 4) {
      btntop.style.display = "block";
    } else {
      btntop.style.display = "none";
    }
  }

  /**
   * Tableau d'avatars sous forme de chaîne de caractère
   * @returns {string[]}
   */
  renderAvatars(photographers){
    return photographers.map(function(photographer) {
      const avatar = new Avatar(photographer.portrait, photographer.name, photographer.city, photographer.country, photographer.tagline,photographer.price, photographer.tags, photographer.id);
      return `<div class="photographer-container">${avatar.render()}</div>`;
    });
  }

  renderPhotographersDOM(photographers){
    const $photographers = document.querySelector('#photographers')
    $photographers.innerHTML = this.renderAvatars(photographers).join('')
  }

  /**
   * On constitue le DOM physique
   */
  renderDOM(){
    const topbar = new TopBar();
    const navhome = new NavHome((tag) => this.filterByTags(tag));
    const buttontop = new ButtonTop(this.backToTop, this.customBackToTop);

    const $header = document.querySelector('#header');
    $header.innerHTML = `
      ${topbar.render()}     
      ${navhome.render()}
      <h1>Nos photographes</h1>
    `

    this.renderPhotographersDOM(this.photographers);
    document.body.innerHTML += buttontop.render();
  }
}

new Index();
