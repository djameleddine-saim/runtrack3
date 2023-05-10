function sommenombrespremiers(nombre1, nombre2) {
    if ((nombre1 % 2 === 0) && (nombre2 % 2 === 0)) {
        return nombre1 + nombre2;
    } else {
        return false;
    }
}

console.log(sommenombrespremiers(3, 5));
console.log(sommenombrespremiers(4, 6));
console.log(sommenombrespremiers(9, 3));

