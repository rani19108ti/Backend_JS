// function DECLARATION
function luasLingkaran(radius) {
    const phi = 3.14;
    const area = phi * radius^2;

    return area;
}

// function EXPRESSION
const areaCircle = function (radius) {
    const phi = 3.14;
    const area = phi * radius^2;

    return area;
}

console.log(luasLingkaran(5));
console.log(areaCircle(5));