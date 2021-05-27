import Media from './Media.js';

class LightBox {

    constructor (closeLightbox, lightboxNext, lightboxPrev, photographMedia){
        this.closeLightbox = closeLightbox
        this.lightboxNext = lightboxNext
        this.lightboxPrev = lightboxPrev
        this.photographMedia = photographMedia


    }

    render(){

        const lightboxBtnClose = document.createElement("button")
        lightboxBtnClose.classList.add("lightbox-btn-close")
        lightboxBtnClose.innerHTML = `<i class="lightbox-btn-close fas fa-times"></i>`
        document.addEventListener("click", (e) => {
            if (e.target.classList[0] == "lightbox-btn-close"){
                this.closeLightbox()
            } 
        })

        const lightboxBtnNext = document.createElement("button")
        lightboxBtnNext.classList.add("lightbox-btn-next")
        lightboxBtnNext.innerHTML = `<i class="lightbox-btn-next fas fa-chevron-left"></i>`
        document.addEventListener("click", (e) => {
            if (e.target.classList[0] == "lightbox-btn-next"){
                this.lightboxNext()
            } 
        })

        const lightboxBtnPrev = document.createElement("button")
        lightboxBtnPrev.classList.add("lightbox-btn-prev")
        lightboxBtnPrev.innerHTML = `<i class=" lightbox-btn-prev fas fa-chevron-right"></i>`
        document.addEventListener("click", (e) => {
            if (e.target.classList[0] == "lightbox-btn-prev"){
                this.lightboxPrev()
            } 
        })

        const medias = this.photographMedia.map(function (media){
            return new Media(media)
        });

        let mediaHtml = '';
        for (let i = 0; i<medias.length; i++){
            mediaHtml += medias[i].render()
        }
        
    
        return (`
            <div>
                <div class="lightboxbground"> 
                    <div class="button-lightboxclosed">
                        ${lightboxBtnClose.outerHTML}
                    </div>
                    <div class="slideshow-container">
                        ${mediaHtml}
                    </div>
                    <div class=lightbox-controls>
                        <div class="button-lightboxnext">
                            ${lightboxBtnNext.outerHTML}
                        </div> 
                        <div class="button-lightboxprev">
                            ${lightboxBtnPrev.outerHTML}
                        </div>
                    </div>
                </div> 

            </div>
        `)
    }
}

export default LightBox; 


// export default function Slideshow(props){

//     const [slideIdx, setSlideIdx] = useState(0);
//     const imgSize = () => {
//         const slideshowImg = document.querySelector('.slideshow-container img');
//         if(!slideshowImg){
//             return 0;
//         }
//         return slideshowImg.width;
//     }

//     const onNext = () => {
//         if(slideIdx === props.img.length - 1){
//             setSlideIdx(0)
//         } else {
//             setSlideIdx(slideIdx + 1)
//         }
//     }

//     const onPrev = () => {
//         if(slideIdx === 0){
//             setSlideIdx(props.img.length - 1)
//         } else {
//             setSlideIdx(slideIdx - 1)
//         }
//     }

//     return (
//         <div className="slideshow">
//             <div className="slideshow-container" style={{transform: `translateX(-${slideIdx * imgSize()}px)`}}>
//             {props.img.map((picture) => < img className='slideshow-container-img' src={picture} key={picture}/>)}
//             </div>
//             <div className={'slideshow-controls'}>
//                 <img src="../chevron-left.png" className={'chevron'} onClick={onPrev}/>
//                 <img src="../chevron-right.png" className={'chevron'} onClick={onNext}/>
//             </div>
//             <div className={'slideshow-idx'}>{slideIdx + 1} / {props.img.length}</div>
//         </div>
//     );
// }

