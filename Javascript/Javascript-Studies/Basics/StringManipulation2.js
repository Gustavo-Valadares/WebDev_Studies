// Aguarda até que o DOM esteja completamente carregado
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o botão pelo ID
    const button2 = document.getElementById("String Manipulation 2");
  
    // Adiciona um evento de clique ao botão
    button2.addEventListener("click", function () {
      // Código principal
      var name = prompt("Hello, what is your name?");
      if (name) {
        var firstLetterName = name.slice(0, 1);
        var rest = name.slice(1);
  
        firstLetterName = firstLetterName.toUpperCase();
        rest = rest.toLowerCase();
  
        alert("Hello " + firstLetterName + rest);
      } else {
        alert("You did not enter a name.");
      }
    });
  });
  