class Media {

    constructor (media, idx){
        this.media = media
        this.idx = idx
 
       
    }

    render() {
 
        if (this.media.image){
            return (
                `
                <img class="media" data-index="${this.idx}" width="100%" src="../../public/img/photos/${this.media.image}" alt="photo">
                `
            )
        }
        if (this.media.video){
            return (
                `
                <video controls class="media" data-index="${this.idx}" width="100%">
                    <source src="../../public/img/photos/${this.media.video}" type="video/mp4">
                </video>
                `
            )
        }    
    }

}

export default Media;