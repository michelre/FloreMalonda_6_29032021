class Avatar  {

    constructor () {} 
    
    render(portrait, name, country, tagline, price) {
        return (`
            <div>
                <div>
                    <div class ="img_avatar_home">
                        <img src="${portrait}" alt="logo">
                    </div>
                    <div class ="title_avatar_home">
                        <p>"${name}"</p>
                    </div>
                </div>
                <div>
                    <div class ="localisation_avatar_home">
                        <p>"${country}"</p>
                    </div>
                    <div class ="tagline_avatar_home">
                        <p>"${tagline}"</p>
                    </div>
                    <div class ="price_avatar_home">
                        <p>"${price} €"</p>
                    </div>
                </div>
            </div>
        `);
    }
}

export default Avatar;
  