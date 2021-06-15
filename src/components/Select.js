class Select {

    constructor() {}

    render() {

        return (`
            <div class="select_container">
                <div>
                    <p>Trier par : </p>
                </div>
                <div class="custom-select-wrapper">
                    <div class="custom-select">
                        <div class="custom-select__trigger"><span>Popularité</span>
                            <div class="arrow_angleup">
                                <i class="fas fa-angle-up"></i>
                            </div>
                        </div>
                        <div class="custom-options">
                            <span class="custom-option selected" data-value="popularity">Popularité</span>
                            <span class="custom-option" data-value="date">Date</span>
                            <span class="custom-option" data-value="title">Titre</span>
                        </div>
                    </div>
                </div>
            </div>
            

        `);
    }
}

export default Select;