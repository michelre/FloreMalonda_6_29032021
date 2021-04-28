class TopBar { 
    
    constructor (){}

    render(){
        return (`
            <div class="TopBar">
                <header class="header" role="banner">
                    <a aria-label="FishEye Logo" href="index.html" class="header-png">
                        <img role="img" alt="Fisheye Home page" src="public/img/logo.png"/>
                    </a>   
                </header>
            </div>
        `)

    }

}

export default TopBar;
