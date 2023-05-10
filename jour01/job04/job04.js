function bisextile(annee) {
  if (annee % 4 !== 0) {
    return false;
  } else if (annee % 100 !== 0) {
    return true;
  } else if (annee % 400 !== 0) {
    return false;
  } else {
    return true;
  }
}

console.log(bisextile(2024));
console.log(bisextile(2023));