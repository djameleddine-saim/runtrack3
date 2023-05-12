function chargerTypes() {
    fetch("pokemon.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var types = [];

            // Récupérer tous les types disponibles dans le fichier JSON
            for (var i = 0; i < data.length; i++) {
                var pokemon = data[i];
                for (var j = 0; j < pokemon.type.length; j++) {
                    var type = pokemon.type[j];
                    if (!types.includes(type)) {
                        types.push(type);
                    }
                }
            }

            // Ajouter les types à la liste déroulante du formulaire
            var selectType = document.getElementById("type");
            for (var k = 0; k < types.length; k++) {
                var option = document.createElement("option");
                option.value = types[k];
                option.text = types[k];
                selectType.appendChild(option);
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}
function filtrerDonnees() {
    // Récupérer les valeurs des champs du formulaire
    var id = document.getElementById("id").value;
    var nom = document.getElementById("nom").value;
    var type = document.getElementById("type").value;

    // Effectuer la requête Fetch pour récupérer les données
    fetch("pokemon.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // Filtrer les données en fonction des critères spécifiés
            var filteredData = data.filter(function(pokemon) {
                if (id && pokemon.id !== parseInt(id)) {
                    return false;
                }
                if (nom && !pokemon.name.english.toLowerCase().includes(nom.toLowerCase())) {
                    return false;
                }
                if (type && !pokemon.type.includes(type)) {
                    return false;
                }
                return true;
            });

            // Afficher les données filtrées sur la page
            var resultat = document.getElementById("resultat");
            resultat.innerHTML = "";

            for (var i = 0; i < filteredData.length; i++) {
                var pokemon = filteredData[i];
                var pokemonHtml = "<p>ID: " + pokemon.id + "</p>";
                pokemonHtml += "<p>Nom: " + pokemon.name.english + "</p>";
                pokemonHtml += "<p>Type: " + pokemon.type.join(", ") + "</p>";
                resultat.innerHTML += pokemonHtml;
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}
