var n = document.querySelectorAll("button").length;
for(var i=0;i<n;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttonInnerhtml = this.innerHTML;
        makeSound(buttonInnerhtml);
        buttonAnimation(buttonInnerhtml);
    });
}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(key){
    switch(key){
        case "w":
          var crash = new Audio("./sounds/crash.mp3");
          crash.play();
          button.style.color="white";
            button.addEventListener("mouseout",function(){
            button.style.color="#DA0463";
            });
            break;
        case "a":
            var crash = new Audio("./sounds/kick-bass.mp3");
            crash.play();
            this.style.color="white";
            this.addEventListener("mouseout",function(){
            this.style.color="#DA0463";
            });
            break;
        case "s":
            var crash = new Audio("./sounds/snare.mp3");
            crash.play();
            this.style.color="white";
            this.addEventListener("mouseout",function(){
            this.style.color="#DA0463";
            });
            break;
        case "d":
            var crash = new Audio("./sounds/tom-1.mp3");
            crash.play();
            this.style.color="white";
            this.addEventListener("mouseout",function(){
            this.style.color="#DA0463";
            });
            break;
        case "j":
            var crash = new Audio("./sounds/tom-2.mp3");
            crash.play();
            this.style.color="white";
            this.addEventListener("mouseout",function(){
            this.style.color="#DA0463";
            });
            break;
        case "k":
            var crash = new Audio("./sounds/tom-3.mp3");
            crash.play();
            this.style.color="white";
            this.addEventListener("mouseout",function(){
            this.style.color="#DA0463";
            });
            break;
        case "l":
            var crash = new Audio("./sounds/tom-4.mp3");
            crash.play();
            this.style.color="white";
            this.addEventListener("mouseout",function(){
            this.style.color="#DA0463";
            });
            break;
            default: console.log(buttonInnerHTML);
            break;
    }
}
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}