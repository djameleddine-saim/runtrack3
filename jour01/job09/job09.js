function tri(tableau,order) {
    if (order == "asc") {
        tableau.sort(function(a, b){return a - b});
    } else if (order == "desc") {
        tableau.sort(function(a, b){return b - a});
    }
    return tableau;
}


console.log(tri([5, 3, 5,6, 7, 1, 2], "asc"));
console.log(tri([5, 3, 5,6, 7, 1, 2], "desc"));