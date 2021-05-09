// // ----------------------- DOM Elements ----------------------------
// //modal elements
// const modalbg = document.querySelector(".bground"); 
// const modalBtn = document.querySelectorAll(".modal-btn"); 
// const closeModalBtn = document.querySelectorAll(".close") 
// // const confirmationCloseBtn = document.querySelector("#btn-closed"); 

// // button submit
// // const formValid = document.querySelector("#btn-submit");

// // valid
// const firstName = document.querySelector("#first");
// const lastName = document.querySelector("#last");
// const eMail = document.querySelector("#email");
// const info = document.querySelector("#info");
// // invalid
// const errorFirstName = document.querySelector("#missfirst");
// const errorLastName = document.querySelector("#misslast");
// const errorMail = document.querySelector("#missemail");
// const errorInfo = document.querySelector("#missinfo");
// const confirmationValidation = document.querySelector("#confirm-modal");

// // submit

// const form = document.querySelector('form[name="contact"]')

// // ---------- Launch Modal Form ---------

// // launch modal event
// modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// // launch modal form
// function launchModal() {
//     modalbg.style.display = 'block';
//     confirmationValidation.style.display = 'none';
// }

// // ---- Close Modal Form ---------

// closeModalBtn[0].addEventListener("click", closeModal);

// function closeModal() {
//     modalbg.style.display = 'none';
//     form.style.display = 'block';
//     confirmationValidation.style.display = 'none';
// }

// // ------------ Envoi du formulaire d'inscription ------------------

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     validate();
// });


// // ------------------- validation formulaire par input -----------

// function validateFirstName(firstName) {
//   if (firstName.value.toString().trim().length < 2) {
//       errorFirstName.style.display = "inline";
//       errorFirstName.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.";
//       errorFirstName.style.color = 'red';
//       errorFirstName.style.fontSize = '0.8rem';
//       errorFirstName.style.marginTop = '10px';
//       firstName.style.border = 'solid red 2px';
//       return false;
//   } else {
//       errorFirstName.style.display = 'none';
//       firstName.style.border = 'solid #279e7a 3px';
//       return true; 
//     }
// }

// function validateLastName(lastName) {
//   if (lastName.value.toString().trim().length < 2) {
//       errorLastName.style.display = 'inline';
//       errorLastName.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du Nom.";
//       errorLastName.style.color = 'red';
//       errorLastName.style.fontSize = '0.8rem';
//       errorLastName.style.marginTop = '10px';
//       lastName.style.border = 'solid red 2px';
//       return false;
//   } else {
//       errorLastName.style.display = 'none';
//       lastName.style.border = 'solid #279e7a 3px';
//       return true;
//     }
// }

// function validateEmail(eMail) {
//     if (!/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(eMail.value)) {
//         errorMail.style.display = "inline"
//         errorMail.innerText = "Veuillez entrer une adresse mail valide.";
//         errorMail.style.color = 'red';
//         errorMail.style.fontSize = '0.8rem';
//         errorMail.style.marginTop = '10px';
//         eMail.style.border = 'solid red 2px';
//         return false;
//     } else {
//         errorMail.style.display = 'none';
//         eMail.style.border = 'solid #279e7a 3px';
//         return true;
//     }
// }

// function validateInfo(info) {
//   if (info.value.toString().trim().length < 2) {
//       errorInfo.style.display = 'inline';
//       errorInfo.innerText = "Veuillez rédiger votre message";
//       errorInfo.style.color = 'red';
//       errorInfo.style.fontSize = '0.8rem';
//       errorInfo.style.marginTop = '10px';
//       info.style.border = 'solid red 2px';
//       return false;
//   } else {
//       errorInfo.style.display = 'none';
//       info.style.border = 'solid #279e7a 3px';
//       return true;
//     }
// }


// // -------------------- Validation du formulaire ----------------------

// function validate() {
//   let isFormValidate = [];

//   isFormValidate.push(validateFirstName(firstName));
//   isFormValidate.push(validateLastName(lastName));
//   isFormValidate.push(validateEmail(eMail));
//   isFormValidate.push(validateInfo(info));

//   if (!isFormValidate.includes(false)) {
//       form.style.display = 'none';
//       confirmationValidation.style.display = 'flex';
//   }
// }

// // ------- Fermer le formulaire avec le message de validation ---------

// document.querySelector("#btn-closed").addEventListener("click", closeModal);


// ------------------------------------------------------------------------


class Modal {

    constructor (name) {
        this.name=name
    } 
    
    render() {
        return (`
            
            <main>

                <div class="section-button"> 

                    <div class="button">
                        <button 
                        class="btn-signup modal-btn"
                        aria-haspopup="dialog"
                        aria-controls="dialog">
                            Contactez-moi
                        </button> 

                    </div>
                </div>


                <div class="bground"> 
                     <div class="content">
                     <button 
                     type="button" 
                     aria-label="Fermer"
                     title="Fermer cette fenêtre modale"
                     data-dismiss="dialog">X
                    </button>
                        
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
                                    <input
                                    class="text-control"
                                    type="text"
                                    id="info"
                                    name="info"
                                    placeholder="votre message"
                                    /><span id="missinfo"></span>
                                    <br>
                                </div>

                                <input
                                    class="btn-submit modalvalid-btn"
                                    type="submit"
                                    class="button"
                                    value="Envoyer"
                                    id="btn-submit"
                                /> 
                            </form>
                        </div>

                        <div id="confirm-modal" class="content">
                            <div class="modal-body">
                            <span class="confirm-modal-btn closed"></span>
                            <p id="confirm-msg">
                                Merci ! Votre message a bien été envoyé.
                            </p>
                            <button id="btn-closed">
                                Fermer
                            </button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        `)
    }
}

export default Modal;

