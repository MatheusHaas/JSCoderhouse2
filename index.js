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

let imcConvertido = imc.toFixed(2)

//Calcula e retorna um alerta baseado no valor do IMC
function descobreCategoria(imcConvertido){
    if (imcConvertido <= 18.5){
        alert("IMC é "+ imcConvertido +". Alerta de magreza! Procure um médico/nutricionista.")
    }
    if (imcConvertido > 18.5 && imcConvertido <= 24.5){
        alert("IMC é "+ imcConvertido +". IMC Ok!")
    }
    if (imcConvertido > 24.5){
        alert("IMC é "+ imcConvertido +". Obesidade! Procure um médico/nutricionista.")
    }
}

//Utiliza a function
descobreCategoria(imcConvertido)