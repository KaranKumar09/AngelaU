// var n = Math.random();
// n = n *6;
// n=Math.floor(n) + 1;
// console.log(n);


// var name1 = "Karan";
// var name2 = "Keshav";
// var loveScore = Math.random() * 100;
// var loveScore = Math.floor(loveScore) + 1;
// console.log("Your love score is: "+loveScore);

function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters

    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        const bmiResult = document.getElementById("bmiResult");
        bmiResult.textContent = "Your BMI is: " + bmi.toFixed(2);

        // Display BMI category
        let category;
        if (bmi < 18.5) category = "Underweight";
        else if (bmi < 25) category = "Normal weight";
        else if (bmi < 30) category = "Overweight";
        else category = "Obese";
        bmiResult.textContent += "\nCategory: " + category;
    } else {
        alert("Please enter valid weight and height (positive numbers).");
    }
}
