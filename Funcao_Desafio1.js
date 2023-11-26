function sumDivisibleBy3Or5(n) {
    let soma = 0;
    for (let i = 1; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            soma += i;
        }
    }
    return soma;
}

// Exemplo: chamando a função com o argumento 10
let resultado = sumDivisibleBy3Or5(10);

// Exibindo o resultado no console
console.log(resultado);