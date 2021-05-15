class Modal {

    constructor (name, closeModal, submitForm) {
        this.name=name
        this.closeModal=closeModal
        this.submitForm=submitForm
    } 
    
    render() {

        const modalBtnClose = document.createElement("button")
        modalBtnClose.classList.add("modal-btn-close")
        modalBtnClose.innerHTML=`<i class="modal-btn-close fas fa-times"></i>`
        document.addEventListener("click", (e) => {
            if (e.target.classList[0] == "modal-btn-close"){
                this.closeModal()
            } 
        })

        const modalBtnSubmit = document.createElement("button")
        modalBtnSubmit.classList.add("modal-btn-submit")
        modalBtnSubmit.textContent="Envoyer"
        document.addEventListener("click", (e) => {
            if (e.target.classList[0] == "modal-btn-submit"){
                this.submitForm()
            } 
        })

        return (`
            <div class="bground"> 
                <div class="content">
            
                    <div role="document" class="c-dialog__box">
                        <div class="button-block-closed">
                            ${modalBtnClose.outerHTML}
                        </div>
        
                        <form action="" method="post">
                            <h3 class="title-modal">Contactez-moi ${this.name}</h3>

                            <div class="formData" id="formDataFirstName">
                                <label>Prénom</label><br> 
                                <input
                                class="text-control"
                                type="text"
                                id="first"
                                name="first"
                                placeholder="Jane"
                                /><span id="missfirst"></span>
                                <br>
                            </div>

                            <div class="formData">
                                <label>Nom</label><br> 
                                <input
                                class="text-control"
                                type="text"
                                id="last"
                                name="last"
                                placeholder="Smith"
                                /><span id="misslast"></span>
                                <br>
                            </div>

                            <div class="formData">
                                <label>E-mail</label><br> 
                                <input
                                class="text-control"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="jane.smith@gmail.com"
                                /><span id="missemail"></span>
                                <br>
                            </div>

                            <div class="formData">
                                <label>Votre message</label><br> 
                                <textarea 
                                id="message" 
                                name="message" 
                                placeholder="Rédigez votre message">
                                </textarea>
                            </div>

                            <div class="button-block-valid">
                                ${modalBtnSubmit.outerHTML}
                            </div> 
                        </form>
                    </div>
                </div>
            </div>
               
        `)
    }
}

export default Modal;

{/* <div class="bground"> 
<div class="content">
<div class="button-block-closed">
    ${modalBtnClose.outerHTML}
</div>

<div class="modal-body">

    <form name="contact" action="profil.html" method="post">

        <h3 class="title-modal">Contactez-moi ${this.name}</h3>

        <div class="formData" id="formDataFirstName">
            <label>Prénom</label><br> 
            <input
            class="text-control"
            type="text"
            id="first"
            name="first"
            placeholder="Jane"
            /><span id="missfirst"></span>
            <br>
        </div>

        <div class="formData">
            <label>Nom</label><br> 
            <input
            class="text-control"
            type="text"
            id="last"
            name="last"
            placeholder="Smith"
            /><span id="misslast"></span>
            <br>
        </div>

        <div class="formData">
            <label>E-mail</label><br> 
            <input
            class="text-control"
            type="email"
            id="email"
            name="email"
            placeholder="jane.smith@gmail.com"
            /><span id="missemail"></span>
            <br>
        </div>

        <div class="formData">
            <label>Votre message</label><br> 
            <textarea 
            id="message" 
            name="message" 
            placeholder="Rédigez votre message">
            </textarea>
        </div>

        <div class="button-block-valid">
            ${modalBtnSubmit.outerHTML}
        </div> 
    </form>
</div>
</div>
</div> */}

