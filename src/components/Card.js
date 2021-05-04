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
                <div class='card_description'></div>
                <div class='card_likes'></div>
            </div>
            `
        )
    }
}

export default Card;