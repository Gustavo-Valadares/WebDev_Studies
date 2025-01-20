document.addEventListener("DOMContentLoaded", function (){
    const button1 = document.getElementById("String Manipulation 1");

    button1.addEventListener("click", function(){
            /*--------------------------length--------------------*/
        alert("This exercise limits a sentence to 140 chacteres, similar to twitter")
        var sentence = prompt("Write a sentece with more than 140 characters: ");
        var lettersLeft = 140;

        lettersLeft -= sentence.length;

        console.log("\nSua frase tem " + sentence.length + " letras\n");
        console.log("\nVocê ainda tem " + lettersLeft + " letras para usar");


        /*----------------------------slice----------------------*/
        console.log(sentence.slice(0, 140)); //corta a string começando pelo caracter 0 até o 140


        /*----------------------Upper Case & Lower Case-------------*/
        sentence = sentence.toUpperCase();
        alert(sentence);

        sentence = sentence.toLowerCase();
        console.log(sentence);
    });
});


