document.addEventListener("DOMContentLoaded", function(){
    const button3 = document.getElementById("Dog Age Converter");

    button3.addEventListener("click", function(){
        // Dog age to human age converter

        var dogAge = prompt("What is your dog's age? ");
        var humanAge;

        humanAge = (dogAge - 2) * 4 + 21;

        alert("Your dog's human age is " + humanAge);
    });
});

