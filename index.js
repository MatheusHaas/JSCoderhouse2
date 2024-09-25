let peso = prompt("Informe o seu peso em KG")
let altura = prompt("Informe a sua altura em centímetros")
let resultado = 0

var calcularImc = (peso, altura) => {
    let pesoAlterado = parseFloat(peso)
    let alturaAlterado = parseFloat(altura)/100
    resultado = pesoAlterado /(alturaAlterado * alturaAlterado)
}

function verIMC(resultado){
    if(resultado < 18.5){
        return("Seu IMC é "+ resultado.toFixed(2) +". Magreza!, Procure um médico")
    }
    if(resultado > 18.6 && resultado < 24.9){
        return("Seu IMC é "+ resultado.toFixed(2) +". Normal!, Tudo OK")
    }
    if(resultado > 25 && resultado < 29.9){
        return("Seu IMC é "+ resultado.toFixed(2) +". Sobrepeso!, Fique atento.")
    }
    if(resultado > 30 && resultado < 34.9){
        return("Seu IMC é "+ resultado.toFixed(2) +". Obesidade grau I!, Procure um médico")
    }
    if(resultado > 35 && resultado < 39.9){
        return("Seu IMC é "+ resultado.toFixed(2) +". Obesidade grau II!, Procure um médico")
    }
    if(resultado > 40 ){
        return("Seu IMC é "+ resultado.toFixed(2) +". Obesidade grau III!, Procure um médico")
    } else {
        return ("Valores inválidos")
    }
}

alert(verIMC())