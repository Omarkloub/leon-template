boxS = document.querySelector(".box-settings");

icon = document.querySelector("#Se");

icon.onclick  = function(){
    boxS.classList.toggle("of")

}
let up = document.querySelector(".UP");
console.log(up)
window.onscroll = function (){
    if ( this.scrollY >= 300 ){
        up.classList.add("show");
    }else{
        up.classList.remove("show");}
}
up.onclick = function(){
    window.scrollTo({
        top:0,
    behavior:"smooth",
    })
}