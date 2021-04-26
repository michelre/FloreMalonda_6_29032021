import Tag from './Tag.js';
import Button from './Button.js';


class Presentation  {

    constructor (portrait, name, city, country, tagline, tags) {
        this.portrait=portrait
        this.name=name
        this.city=city
        this.country=country
        this.tagline=tagline
        this.tags=tags
    } 
    
    render() {
        const tag = new Tag(this.tags);
        const button = new Button();
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
                <div class="button_contact>${button.render()}</div>
                <div class="img_avatar_page">
                    <img src="../../public/img/photographers/${this.portrait}" alt="portrait">
                </div>
            </div>
        `);
    }
}

export default Presentation;