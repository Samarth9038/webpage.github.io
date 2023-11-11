let menu = document.getElementById('vetical');
let btn = document.querySelector("button");
console.log(btn);
console.log(menu);
// console.log(menu.style.left)
var sidepanel = false
function animate(){
    if (sidepanel){
        menu.style.animation = 'sidebaropener 1s reverse';
        menu.style.left = '-240px';
        sidepanel = false
    }
    else {
        menu.style.animation = 'sidebaropener 1s';
        menu.style.left = 0;
        sidepanel = true

    }
    // if (menu.style.left == 0){
    //     menu.style.animationPlayState = 'paused'
    // }
    // menu.style.animationPlayState = 'paused';
    setTimeout(function (){
        menu.style.animation ='unset';
    },1000);
}

btn.addEventListener('click', (e) => {
    animate();
})