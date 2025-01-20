// Cat age to human age converter
document.addEventListener("DOMContentLoaded", function(){
    const button4 = document.getElementById("Cat Age Converter");

    button4.addEventListener("click", function(){
        var catAge = prompt("What is your cat's age? ");
        var humanAge;

        humanAge = (4.1364 * catAge) + 15;

        alert("Your cat's human age is " + Math.round(humanAge));
    });
});