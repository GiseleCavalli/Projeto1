
// document.querySelector("#items").addEventListener("wheel", event => {
//     if(event.deltaY > 0){
//         event.target.scrollBy(300, 0)
//     } else {
//         event.target.scrollBy(-300, 0)
//     }
// });

document.getElementById("scroll-direita").onclick = function() { 
    document.getElementById("scroll").scrollBy(300, 0)
}


document.getElementById( "scroll-esquerda" ).onclick = function() { 
    document.getElementById("scroll").scrollBy(-300, 0)
}