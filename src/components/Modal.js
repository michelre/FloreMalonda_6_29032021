// // DOM Elements
// const modalbg = document.querySelector(".bground"); 
// const modalBtn = document.querySelectorAll(".modal-btn"); 
// const closeModalBtn = document.querySelectorAll(".close") 
// const confirmationCloseBtn = document.querySelector("#btn-closed"); 

// // ------ element correspondant au bouton --------
// const formValid = document.querySelector("#btn-submit");

// // ------- element quand c'est OK ----------
// const firstName = document.querySelector("#first");
// const lastName = document.querySelector("#last");

// // ------- element quand c'est une erreur ----------
// const errorFirstName = document.querySelector("#missfirst");
// const errorLastName = document.querySelector("#misslast");
// const confirmationValidation = document.querySelector("#confirm-modal");

// // ------------ element pour l'envoi du formulaire ------------------------
// const form = document.querySelector('form[name="reserve"]')


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


// // -------------------- Validation du formulaire ----------------------

// function validate() {
// // ne pas oublier de déclarer une variable
//   let isFormValidate = [];

//   isFormValidate.push(validateFirstName(firstName));
//   isFormValidate.push(validateLastName(lastName));

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
                        <button class="btn-signup modal-btn">
                            Contactez-moi
                        </button> 

                    </div>
                </div>


                <div class="bground"> 
                     <div class="content">
                        <span class="close"></span> 
                        
                        <div class="modal-body">
            
                            <form name="Contact" method="get">

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

