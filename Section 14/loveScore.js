// prompt("Enter first name: ");
// prompt("Enter second name: ");
// var loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1;
// alert("Your loveScore is: "+loveScore+ "go and fuck");
var arr = [];
var count = 1;
countNumbers();
countNumbers();
countNumbers();
countNumbers();
countNumbers();
function countNumbers(){
    if(count % 3 ==0 && count % 5 ==0){
        arr.push("FizzBuzz");
    }
    if(count % 3 == 0){
        arr.push("Fizz");
    }
    else if(count % 5 == 0){
        arr.push("Buzz");
    }
    else{
        arr.push(count);
    }
    console.log(arr);
    count++;
}