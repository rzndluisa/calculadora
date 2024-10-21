const botaoSomar = document.getElementById("somar");
const botaoSubtrair = document.getElementById("subtrair");
const botaoMultiplicar = document.getElementById("multiplicar");
const botaoDividir = document.getElementById("dividir");
const botaoIgual = document.getElementById("=");
const resultado = document.getElementById("resultado");
const input = document.getElementById("numeros");

function somar(a, b) {
    return a + b
}

function subtrair (a, b) {
    return a - b 
}

function multiplicar (a, b) {
    return a * b 
}

function dividir (a, b){
    return a / b 
}

botaoSomar.addEventListener("click", async () => {
    const valor1 = parseInt(input.value)
    input.value = ""

    botaoIgual.addEventListener("click", async () => {
        const valor2 = parseInt(input.value)
        resultado.textContent = `o valor é ${somar(valor1, valor2)}`
         input.value = ""
    });
    

});

botaoSubtrair.addEventListener("click", async () => {
    const valor1 = parseInt (input.value)
    input.value = ""

    botaoIgual.addEventListener("click", async () => {
        const valor2 = parseInt(input.value)
        resultado.textContent = `o valor é ${subtrair(valor1, valor2)}`
         input.value = ""
    });
});

botaoMultiplicar.addEventListener("click", async () => {
    const valor1 = parseInt (input.value)
    input.value = ""

    botaoIgual.addEventListener("click", async () => {
        const valor2 = parseInt(input.value)
        resultado.textContent = `o valor é ${multiplicar(valor1, valor2)}`
         input.value = ""
    });
});

botaoDividir.addEventListener("click", async () => {
    const valor1 = parseInt (input.value)
    input.value = ""

    botaoIgual.addEventListener("click", async () => {
        const valor2 = parseInt(input.value)
        resultado.textContent = `o valor é ${dividir(valor1, valor2)}`
         input.value = ""
    });
});

botaoIgual.addEventListener("click", async () => {

})