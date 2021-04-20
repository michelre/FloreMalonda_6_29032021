import Tag from './Tag.js';


class Avatar  {

    constructor (portrait, name, city,country, tagline, price, tags) {
        this.portrait=portrait
        this.name=name
        this.city=city
        this.country=country
        this.tagline=tagline
        this.price=price
        this.tags=tags
    } 
    
    render() {
        const tag = new Tag(this.tags);
        return (`
            <div>
                <div>
                    <div class ="img_avatar_home">
                        <img src="../../public/img/photographers/${this.portrait}" alt="logo">
                    </div>
                    <div class ="title_avatar_home">
                        <p>${this.name}</p>
                    </div>
                </div>
                <div>
                    <div class ="localisation_avatar_home">
                        <p>${this.city}, ${this.country}</p>
                    </div>
                    <div class ="tagline_avatar_home">
                        <p>${this.tagline}</p>
                    </div>
                    <div class ="price_avatar_home">
                        <p>${this.price} €</p>
                    </div>
                    <div>${tag.render()}</div>
                </div>
            </div>
        `);
    }
}

export default Avatar;
  