window.addEventListener('resize', function(event) {
    visionTile();
}, true);

window.addEventListener('load', function(event){
    visionTile();
}, true);

function visionTile(){
    

    let tiles = document.getElementsByClassName("vision2__content");
    for(let i = 0; i < tiles.length; i++){
        tiles[i].style.transform = "translateY(" + tiles[i].children[1].offsetHeight + "px)";
        console.log("run");
    }
}