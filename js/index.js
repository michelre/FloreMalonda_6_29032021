class ButtonTest extends HTMLElement {

    constructor() {
        super()
        this.span = document.createElement('span')
        this.span.classList.add('badge')
        this.appendChild(this.span)
        this.span.innerHTML = "Mon bouton de test"
    }
  }
  
  customElements.define('button-test', ButtonTest);



