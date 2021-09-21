class TopProfil { 
    
    constructor (){}

    render(){
        return (`
            <div class="header" role="lien">
                <div class="TopBar">
                    <a aria-label="Retour à la page d'accueil" href="index.html" class="header-png">
                        <img role="img" alt="Fisheye Home page" src="public/img/logo.png"/>
                    </a>   
                </div>
            </div>
        `)

    }

}

export default TopProfil;