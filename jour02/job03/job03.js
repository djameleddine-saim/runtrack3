document.addEventListener("DOMContentLoaded", function() {
  var compteur = 0;
  var button = document.getElementById("button");
  var compteurElement = document.getElementById("compteur");

  button.addEventListener("click", function() {
    compteur++;
    compteurElement.textContent = compteur.toString();
  });
});
