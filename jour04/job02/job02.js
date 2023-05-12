function jsonValueKey(jsonString, key) {
  try {
    const data = JSON.parse(jsonString);
    return data[key];
  } catch (error) {
    console.log("Une erreur s'est produite lors de l'analyse du JSON :", error);
  }
}
const jsonString = `{
  "name": "La Plateforme_",
  "address": "8 rue d'hozier",
  "city": "Marseille",
  "nb_staff": "11",
  "creation": "2019"
}`;

const data = JSON.parse(jsonString);
console.table(data);

const key = "city";
const value = jsonValueKey(jsonString, key);
console.log(value); // Affiche "Marseille"
