//variáveis
let peso = parseFloat(prompt("Insira o seu peso"))
let altura = parseInt(prompt("Informa sua altura, em centímetros"))
let alturaConvertida = altura / 100


//função para obter o valor do IMC
function descobreValorIMC(peso, alturaConvertida){
    return peso / (alturaConvertida * alturaConvertida)
}

//Utiliza a function
let imc = descobreValorIMC(peso, alturaConvertida)

//Calcula e retorna um alerta baseado no valor do IMC
function descobreCategoria(imc){
    if (imc <= 18.5){
        alert("Alerta de magreza! Procure um médico/nutricionista.")
    }
    if (imc > 18.5 && imc <= 24.5){
        alert("IMC Ok!")
    }
    if (imc > 24.5){
        alert("Obesidade! Procure um médico/nutricionista.")
    }
}

//Utiliza a function
descobreCategoria(imc)