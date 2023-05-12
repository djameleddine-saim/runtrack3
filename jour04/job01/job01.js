document.getElementById("button").addEventListener("click", function() {
  fetch("expression.txt")
    .then(response => {
      if (response.ok) {
        return response.text();
      }
      throw new Error("Erreur de récupération du fichier");
    })
    .then(data => {
      document.getElementById("expression").textContent = data;
    })
    .catch(error => {
      console.log("Une erreur s'est produite :", error.message);
    });
});
