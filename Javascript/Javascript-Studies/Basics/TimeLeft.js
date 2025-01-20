document.addEventListener("DOMContentLoaded", function(){
    const button5 = document.getElementById("Time Left");

    button5.addEventListener("click", function(){
        var age = prompt("How old are you?");
        timeLeft(age);

        function timeLeft(age){
            var years = 90 - age;
            var months = years * 12;
            var weeks = years * 52;
            var day = years * 365;

            //console.log("Time Left:\n");
            alert("You have " + months + " months, " + weeks + " weeks and " + day + " days left");
        }
    });
});


//Calculate how many months, weeks, and days until reaching 90 years old


