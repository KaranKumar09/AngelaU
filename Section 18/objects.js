function HouseKeeper(yearsOfExperiance , name , age){
    this.yearsOfExperiance = yearsOfExperiance;
    this.name = name;
    this.age = age;
    this.clean = function (){
        console.log("Cleaning in progress");
    }
}

var houseKeeper1 = new HouseKeeper(12 , "John" , 24);
var houseKeeper2 = new HouseKeeper(15 , "John" , 26);
console.log(houseKeeper1);
console.log(houseKeeper2);
console.log(houseKeeper1.name);
houseKeeper1.clean();