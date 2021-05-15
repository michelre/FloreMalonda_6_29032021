import Tag from './Tag.js';

class Presentation  {

    constructor (portrait, name, city, country, tagline, tags, openModal) {
        this.portrait=portrait
        this.name=name
        this.city=city
        this.country=country
        this.tagline=tagline
        this.tags=tags
        this.openModal=openModal
    } 

    render() {
        const modalBtn = document.createElement("button")
        modalBtn.classList.add("modal-btn")
        modalBtn.textContent="Contactez moi"
        document.addEventListener("click", (e) => {
            if (e.target.classList.contains("modal-btn")){
                this.openModal()
            } 
        })

        const tag = new Tag(this.tags);

        return (`
            <div>
                <div class="gp_presentation">
                    <div class="title_avatar_page">
                        <h2>${this.name}</h2>
                    </div>
                    <div class="localisation_avatar_page">
                        <p>${this.city}, ${this.country}</p>
                    </div>
                    <div class="tagline_avatar_home_page">
                        <p>${this.tagline}</p>
                    </div>
                    <div class="tag_appli">${tag.render()}</div>
                </div>
                <div class="img_avatar_page">
                    <img src="../../public/img/photographers/${this.portrait}" alt="portrait">
                </div>
            </div>
            <div class="section-button"> 

                <div class="button-block">
                   ${modalBtn.outerHTML}
                </div>

            </div>

        `);
    }
}

export default Presentation;