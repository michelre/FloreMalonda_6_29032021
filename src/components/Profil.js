import Tag from './Tag.js';

class Presentation  {

    constructor (portrait, name, city, country, tagline, tags, openModal) {
        this.portrait = portrait
        this.name = name
        this.city = city
        this.country = country
        this.tagline = tagline
        this.tags = tags
        this.openModal = openModal
    }

    render() {
        const modalBtn = document.createElement('button')
        modalBtn.classList.add('modal-btn')
        modalBtn.textContent = 'Contactez moi'


        document.addEventListener('click', (e) => {
            if (e.target.classList == 'modal-btn'){
                this.openModal()
            }
        })

        const tag = new Tag(this.tags);

        return (`
            <div class='global_presentation'>
                <div class='gp_presentation' aria-label='présentation du photographe'>
                    <div class='title_avatar_page' aria-label='nom du photographe'>
                        <h2>${this.name}</h2>
                    </div>
                    <div class='localisation_avatar_page' aria-label='localisation du photographe'>
                        <p>${this.city}, ${this.country}</p>
                    </div>
                    <div class='tagline_avatar_home_page' aria-label='phrase d'accroche'>
                        <p>${this.tagline}</p>
                    </div>
                    <div class='tag_profil'>
                        <div class='tag_appli'>${tag.render()}</div>
                    </div>
                </div>
                <div class='imgpresentation'>
                    <img src='public/img/photographers/${this.portrait}' alt='portrait' aria-label='portrait du photographe'>
                </div>
            </div>
            <div class='section-button'> 
                <div class='button-block' aria-label='ouvrir le formulaire de contact'>
                    ${modalBtn.outerHTML}
                </div>
            </div>
        `);
    }
}

export default Presentation;
