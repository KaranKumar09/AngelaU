// function add(num1, num2){
//     return num1 + num2;
// }

// function subtract(num1, num2){
//     return num1 - num2;
// }

// function multiply(num1, num2){
//     return num1 * num2;
// }


// function divide(num1, num2){
//     return num1 / num2;
// }


// function calculator(num1 , num2, operator){
//     return operator(num1 ,num2);
// }

// console.log(divide(5,6));

function anotherAddEventListener(typeOfEvent , callback){
    var eventToHappen = {
        eventype : "keypress",
        key: "p",
        durationOfKeyPress: 2
    }

if(eventToHappen.eventype === typeOfEvent){
    callback(eventToHappen);
}
}
anotherAddEventListener("keypress",function(event){
    console.log(event);
})