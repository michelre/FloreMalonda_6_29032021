class ImgLightBox {

    constructor (media, description){
        this.media = media
        this.description = description     
    }

    render() {
 
        if (this.media.image){
            return (
                `
                <img class="media_lightbox" width="100%" src="../../public/img/photos/${this.media.image}" alt="photo">
                <div class='img_legend'>
                    <div class='img_description'>${this.media.description}</div>
                </div>
                `
            )
        }
        if (this.media.video){
            return (
                `
                <video controls class="media_lightbox" width="100%">
                    <source src="../../public/img/photos/${this.media.video}" type="video/mp4">
                </video>
                <div class='img_legend'>
                    <div class='img_description'>${this.media.description}</div>
                </div>

                `
            )
        }    
    }

}

export default ImgLightBox;