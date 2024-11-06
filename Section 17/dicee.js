
var randomNumber1 =Math.floor( Math.random() * 6) + 1;

var randomImage = "dice"+randomNumber1+".png";

var randomImageSource1 = "images/"+randomImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttributes("src",randomImageSource1);

var randomNumber2 =Math.floor( Math.random() * 6) + 1;

var randomImage = "dice"+randomNumber2+".png";

var randomImageSource2 = "images/"+randomImage;
var image2 = document.querySelectorAll("img")[1];
image2.setAttributes("src",randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}