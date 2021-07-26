class TopBar { 
    
    constructor (){}

    render(){
        return (`
            <div class="header" role="bannière">
                <div class="TopBar">
                    <a aria-label="FishEye Logo" href="index.html" class="header-png">
                        <img role="img" alt="Fisheye Home page" src="public/img/logo.png"/>
                    </a>   
                </div>
            </div>
        `)

    }

}

export default TopBar;
