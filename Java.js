document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    var fieldA = parseInt(document.getElementById("fieldA").value);
    var fieldB = parseInt(document.getElementById("fieldB").value);
    var resultMessage = document.getElementById("resultMessage");
  
    if (fieldB > fieldA) {
      resultMessage.innerHTML = "Formulário válido!";
      resultMessage.style.color = "green";
    } else {
      resultMessage.innerHTML = "Formulário inválido. O número B deve ser maior que o número A.";
      resultMessage.style.color = "red";
    }
  });
  