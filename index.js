
document.querySelectorAll(".drum").forEach(function(item) {
    item.addEventListener("click",function(){
        var buttonInnerNames=item.innerHTML ;

        sound(buttonInnerNames);
        buttonAnimation(buttonInnerNames);

    } );
} );

document.addEventListener("keydown",function(event){
sound(event.key);
buttonAnimation(event.key);

})

 function sound (trigger){
    switch (trigger) {
        case 'w':
         var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
         var audio = new Audio('sounds/tom-2.mp3');
         audio.play();
            break;
        case 's':
         var audio = new Audio('sounds/tom-3.mp3');
         audio.play();
             break;
        case 'd':
         var audio = new Audio('sounds/tom-4.mp3');
         audio.play();
            break;
        case 'j':
         var audio = new Audio('sounds/kick-bass.mp3');
         audio.play();
            break;
        case 'k':
         var audio = new Audio('sounds/crash.mp3');
         audio.play();
            break;
        case 'l':
         var audio = new Audio('sounds/snare.mp3');
         audio.play();
            break; 
        default:
            break;
    }
 }

function buttonAnimation (key) {
var activeBtn = document.querySelector("."+key);
 activeBtn.classList.add("pressed");
 document.querySelector("."+key).style.color="white";
 

 setTimeout(function(){
    activeBtn.classList.remove("pressed");
    document.querySelector("."+key).style.color= "#DA0463";
 }, 100)
}


// var audio = new Audio('sounds/The-Witcher.mp3');
//     audio.play();