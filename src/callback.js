function sum(num1, num2) {
    return num1 + num2
}

function calcular(num1, num2, callback) {
    return callback(num1, num2)
}

console.log(calcular(2, 2, sum)); // 4

setTimeout(function () {
 console.log('Hola JavaScript'); // Hola JavaScript
}, 3000);

function grettin(name) {
    console.log(`Hola ${name}`);
}

setTimeout(grettin, 2000, 'Angie'); // Hola Angie