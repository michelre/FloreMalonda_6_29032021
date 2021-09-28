class Modal {

    constructor (name, closeModal, submitForm) {
        this.name = name
        this.closeModal = closeModal
        this.submitForm = submitForm
    } 
    
    render() {

        const modalBtnClose = document.createElement("button")
        modalBtnClose.classList.add("modal-btn-close")
        modalBtnClose.innerHTML = `<i class="modal-btn-close fas fa-times"></i>`
        document.addEventListener("click", (e) => {
            if (e.target.classList[0] == "modal-btn-close"){
                this.closeModal()
            } 
        })

        const modalBtnSubmit = document.createElement("button")
        modalBtnSubmit.classList.add("modal-btn-submit")
        modalBtnSubmit.textContent = "Envoyer"
        document.addEventListener("submit", (e) => {
            if (e.target.classList[0] == "modal-btn-submit"){
                this.submitForm()
            } 
            console.log('Nom:', e.target.last_name.value)
            console.log('Prénom:', e.target.first_name.value)
            console.log('Email:', e.target.email.value)
            console.log('Message:', e.target.message.value)
        })

        return (`
            <div
                id="dialog"
                role="dialog" 
                aria-labelledby="dialog-title" 
                aria-describedby="dialog-desc"
                aria-modal="true"
                aria-hidden="true"
                tabindex="-1" 
                class="c-dialog"
            > 
                <div class="bground"></div> 
                <div class="content">
            
                    <div role="document" class="c-dialog__box">
                        
                        <form action="index.html" method="get">

                            <fieldset>

                                <div class="button-block-closed" aria-label="Fermer la modale">
                                    ${modalBtnClose.outerHTML}
                                </div>

                                <h3 class="title-modal" aria-label ="Contact Me">Contactez-moi ${this.name}</h3>

                                <div class="formData" id="formData">
                                    <label for="first_name">Prénom</label><br> 
                                    <input
                                    class="text-control"
                                    type="text"
                                    id="first_name"
                                    name="first_name"
                                    aria-labelledby="first_name" 
                                    aria-describedby="frist_name_format"
                                    placeholder="Jane"
                                    required
                                    />
                                    <br>
                                </div>

                                <div class="formData">
                                    <label for="last_name">Nom</label><br> 
                                    <input
                                    class="text-control"
                                    type="text"
                                    id="last_name"
                                    name="last_name"
                                    aria-labelledby="last_name" 
                                    aria-describedby="last_name_format"
                                    placeholder="Smith"
                                    required
                                    />
                                    <br>
                                </div>

                                <div class="formData">
                                    <label for="email">E-mail</label><br> 
                                    <input
                                    class="text-control"
                                    type="email"
                                    id="email"
                                    name="email"
                                    aria-labelledby="email" 
                                    aria-describedby="email_format"
                                    placeholder="jane.smith@gmail.com"
                                    required
                                    />
                                    <br>
                                </div>

                                <div class="formData">
                                    <label for="message">Votre message</label><br> 
                                    <textarea 
                                    rows="6"
                                    id="message" 
                                    name="message"
                                    aria-labelledby="message" 
                                    aria-describedby="message_format" 
                                    placeholder="Rédigez votre message"
                                    ></textarea> 
                                </div>

                                <div class="button-block-valid" aria-label="valider le formulaire">
                                    ${modalBtnSubmit.outerHTML}
                                </div>

                            </fieldset> 

                        </form>
                    </div>
                </div>
            </div>     
        `)
    }
}

export default Modal;