//Escreva um código que calcule a área de um círculo. Utilize uma função para realizar o cálculo. A função deve receber o raio como parâmetro e retornar a área.

function areadocirculo(x) {
    let area = 3.14 * (x * x);
    return area;
}

let raio = prompt("Digite o raio do círculo:");
let area = areadocirculo(raio);
console.log("Área do círculo: " + area);
