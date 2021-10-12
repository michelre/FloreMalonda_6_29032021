class TopProfil { 
    
    constructor (){}

    render(){
        return (`
            
            <div class='TopBarProfil' role='lien'>
                <a aria-label='Retour à la page d'accueil' href='index.html' class='header-png'>
                    <img role='img' alt='Fisheye Home page' src='public/img/logo.png'/>
                </a>   
            </div>

        `)

    }

}

export default TopProfil;