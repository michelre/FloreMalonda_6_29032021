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
                        
                        <form action="" method="post">

                            <fieldset>

                                <div class="button-block-closed" aria-label="Fermer la modale">
                                    ${modalBtnClose.outerHTML}
                                </div>

                                <h3 class="title-modal">Contactez-moi ${this.name}</h3>

                                <div class="formData" id="formData">
                                    <label for="first_name">Prénom *</label><br> 
                                    <input
                                    class="text-control"
                                    type="text"
                                    id="first_name"
                                    name="first_name"
                                    aria-labelledby="first_name" 
                                    aria-describedby="frist_name_format"
                                    placeholder="Jane"
                                    />
                                    <br>
                                </div>

                                <div class="formData">
                                    <label for="last_name">Nom *</label><br> 
                                    <input
                                    class="text-control"
                                    type="text"
                                    id="last_name"
                                    name="last_name"
                                    aria-labelledby="last_name" 
                                    aria-describedby="last_name_format"
                                    placeholder="Smith"
                                    />
                                    <br>
                                </div>

                                <div class="formData">
                                    <label for="email">E-mail *</label><br> 
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
                                    <label for="message">Votre message *</label><br> 
                                    <textarea 
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

// GESTION MODAL CODE JS

// const triggers = document.querySelectorAll('[aria-haspopup="dialog"]');
// const doc = document.querySelector('.js-document');
// const focusableElementsArray = [
//   '[href]',
//   'button:not([disabled])',
//   'input:not([disabled])',
//   'select:not([disabled])',
//   'textarea:not([disabled])',
//   '[tabindex]:not([tabindex="-1"])',
// ];
// const keyCodes = {
//   tab: 9,
//   enter: 13,
//   escape: 27,
// };

// const open = function (dialog) {
//   const focusableElements = dialog.querySelectorAll(focusableElementsArray);
//   const firstFocusableElement = focusableElements[0];
//   const lastFocusableElement = focusableElements[focusableElements.length - 1];

//   dialog.setAttribute('aria-hidden', false);
//   doc.setAttribute('aria-hidden', true);

//   // return if no focusable element
//   if (!firstFocusableElement) {
//     return;
//   }

//   window.setTimeout(() => {
//     firstFocusableElement.focus();

//     // trapping focus inside the dialog
//     focusableElements.forEach((focusableElement) => {
//       if (focusableElement.addEventListener) {
//         focusableElement.addEventListener('keydown', (event) => {
//           const tab = event.which === keyCodes.tab;

//           if (!tab) {
//             return;
//           }

//           if (event.shiftKey) {
//             if (event.target === firstFocusableElement) { // shift + tab
//               event.preventDefault();

//               lastFocusableElement.focus();
//             }
//           } else if (event.target === lastFocusableElement) { // tab
//             event.preventDefault();

//             firstFocusableElement.focus();
//           }
//         });
//       }
//     });
//   }, 100);
// };

// const close = function (dialog, trigger) {
//   dialog.setAttribute('aria-hidden', true);
//   doc.setAttribute('aria-hidden', false);

//   // restoring focus
//   trigger.focus();
// };

// triggers.forEach((trigger) => {
//   const dialog = document.getElementById(trigger.getAttribute('aria-controls'));
//   const dismissTriggers = dialog.querySelectorAll('[data-dismiss]');

//   // open dialog
//   trigger.addEventListener('click', (event) => {
//     event.preventDefault();

//     open(dialog);
//   });

//   trigger.addEventListener('keydown', (event) => {
//     if (event.which === keyCodes.enter) {
//       event.preventDefault();

//       open(dialog);
//     }  
//   });

//   // close dialog
//   dialog.addEventListener('keydown', (event) => {
//     if (event.which === keyCodes.escape) {
//       close(dialog, trigger);
//     }      
//   });

//   dismissTriggers.forEach((dismissTrigger) => {
//     const dismissDialog = document.getElementById(dismissTrigger.dataset.dismiss);

//     dismissTrigger.addEventListener('click', (event) => {
//       event.preventDefault();

//       close(dismissDialog, trigger);
//     });
//   });

//   window.addEventListener('click', (event) => {
//     if (event.target === dialog) {
//       close(dialog, trigger);
//     }
//   }); 
// });