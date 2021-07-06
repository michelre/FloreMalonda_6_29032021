class ButtonTop {

    constructor (backToTop, customBackToTop) {
        this.backToTop = backToTop
        this.customBackToTop = customBackToTop

    }

    render(){

        const topBtn = document.createElement("button")
        topBtn.classList.add("top-btn")
        topBtn.textContent = "Passer au contenu"

        document.addEventListener("scroll", () => {
            this.customBackToTop()
        })

        document.addEventListener("click", (e) => {
            if (e.target.classList == "top-btn"){
                this.backToTop()
            } 
        })

        return (`
            <div class="button-block" aria-label="Passer au contenu">
                ${topBtn.outerHTML}
            </div>
        `)
    }
}

export default ButtonTop;