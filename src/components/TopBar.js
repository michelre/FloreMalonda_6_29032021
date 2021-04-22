class TopBar { 
    
    constructor (){}

    render(){
        return (`
            <div class="TopBar">
                <header class="header" role="banner">
                    <a aria-label="FishEye Logo" href="index.html" class="header-png"> <!--  ATTENTION INFO TEST A CHANGER -->
                        <img role="img" alt="Fisheye Home page" src="public/img/logo.png"/>
                    </a>
                    <nav role="navigation" class="header-navigation" aria-label="main navigation"></nav>    
                </header>
        
                <h1>Nos photographes</h1>
            </div>
        `)

    }

}

export default TopBar;
