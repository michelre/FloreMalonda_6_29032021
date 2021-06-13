// -------------------- Filter -------------------------

function filterBy() {
    let groupe = document.querySelectorAll(".avatar_gp");
    for(let i = 0; i < groupe.length; i++) {
        groupe[i].style.display = "none"
    }

    var tag = ".travel";
    let blocks = document.querySelectorAll(tag);
    console.log(blocks)
    for(let i = 0; i < blocks.length; i++) {
        blocks[i].style.display = "block"
    }
}

// TODO: fonction parametre tag
// TODO: onclick button tag