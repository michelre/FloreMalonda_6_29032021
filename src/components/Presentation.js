// import Tag from './Tag.js';
// // import Button from '../Button.js';


// class Presentation  {

//     constructor (portrait, name, city,country, tagline, price, tags) {
//         this.portrait=portrait
//         this.name=name
//         this.city=city
//         this.country=country
//         this.tagline=tagline
//         this.price=price
//         this.tags=tags
//     } 
    
//     render() {
//         const tag = new Tag(this.tags);
//         return (`
//             <div>
//                 <div class="gp_img_title_avatar_page">
//                     <div class ="img_avatar_page">
//                         <img src="../../public/img/photographers/${this.portrait}" alt="portrait">
//                     </div>
//                     <div class ="title_avatar_page">
//                         <h2>${this.name}</h2>
//                     </div>
//                 </div>
//                 <div class="gp_loc_tln_pr_tg_avatar_page">
//                     <div class ="localisation_avatar_page">
//                         <p>${this.city}, ${this.country}</p>
//                     </div>
//                     <div class ="tagline_avatar_home_page">
//                         <p>${this.tagline}</p>
//                     </div>
//                     <div class ="price_avatar_home_page">
//                         <p>${this.price} €</p>
//                     </div>
//                     <div class ="tag_appli">${tag.render()}</div>
//                 </div>
//             </div>
//         `);
//     }
// }

// export default Presentation;