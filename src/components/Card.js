import Media from './Media.js';

class Card {
    
    constructor (media){
        this.media = media
    }

    render(){
        const media = new Media(this.media)
        
        return (
            `
            <div class='card_main'>
                <div class='card_img'>
                  ${media.render()}
                </div>
            </div>
            `
        )
    }
}

export default Card;