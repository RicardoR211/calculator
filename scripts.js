//Adiciona números ao número atual
function addNumber(num){

    if(panelNumber == 0) panelNumber = parseInt(num)
    else{
        panelNumber *= 10
        panelNumber += parseInt(num);
    }
    
    //Não tem nenhum número na memória
    if(isNaN(numeroQueEstava)) panel.textContent = panelNumber
    //Tem número na memória
    else if(isNaN(numeroQueEstava) == false && contaSelecionada != ""){
        //console.log("Caiu no else")
        panel.textContent = numeroQueEstava + sinal + panelNumber
        //console.log("----------------------------------------------------------------")
        //console.log(contaSelecionada)
        //console.log("Numero que estava: " + numeroQueEstava)
        //console.log("Numero atual " + panelNumber)
    }else if(isNaN(numeroQueEstava) == false && contaSelecionada == ""){
        panelNumber = num;
        numeroQueEstava = NaN;
        contaSelecionada = "";
        resultado = 0;
        sinal = ""
        panel.textContent = panelNumber
    }
}

const panel = document.querySelector('.panel');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const buttonsNumber = document.querySelectorAll('.number')
const enter = document.getElementById('enter')
const sumNumber = document.getElementById('sum')
const subtract = document.getElementById('subtract')
const multiplicar = document.getElementById('multiply')
const divider = document.getElementById('divider');
/*
const debug = document.getElementById("Teste")

debug.addEventListener('click', ()=>{
    //console.log(contaSelecionada)
    //console.log("Numero que estava: " + numeroQueEstava)
    //console.log("Numero atual " + panelNumber)
})
*/
var panelNumber = 0;
var numeroQueEstava = NaN;
var contaSelecionada = "";
var resultado = 0;
var sinal = ""

buttonsNumber.forEach((indice) =>{
    indice.addEventListener('click', ()=>{
        addNumber(parseInt(indice.textContent))
    })
})

enter.addEventListener('click', ()=>{
    if(contaSelecionada != "" && isNaN(numeroQueEstava) == false){
        resolveConta(contaSelecionada, numeroQueEstava, panelNumber)
    }
})

multiplicar.addEventListener('click', ()=>{
    if(contaSelecionada != "Multiply" && contaSelecionada == ""){
        numeroQueEstava = panelNumber;
        panelNumber = 0;
        contaSelecionada = "Multiply"
        sinal = " x "
        panel.textContent = numeroQueEstava + sinal
    }//Se ja estava com conta selecionada vamos resolver ela
    else{
        if(contaSelecionada == "Multiply") resolveConta("Multiply", numeroQueEstava, panelNumber)
    }
})

divider.addEventListener('click', ()=>{
    if(contaSelecionada != "Dividir" && contaSelecionada == ""){
        numeroQueEstava = panelNumber;
        panelNumber = 0;
        contaSelecionada = "Dividir"
        sinal = " / "
        panel.textContent = numeroQueEstava + sinal
    }//Se ja estava com conta selecionada vamos resolver ela
    else{
        if(contaSelecionada == "Dividir") resolveConta("Dividir", numeroQueEstava, panelNumber)
    }
})

subtract.addEventListener('click', ()=>{
    if(contaSelecionada != "Subtrair" && contaSelecionada == ""){
        numeroQueEstava = panelNumber;
        panelNumber = 0;
        contaSelecionada = "Subtrair"
        sinal = " - "
        panel.textContent = numeroQueEstava + sinal
    }//Se ja estava com conta selecionada vamos resolver ela
    else{
        if(contaSelecionada == "Subtrair") resolveConta("Subtrair", numeroQueEstava, panelNumber)
    }
})

sumNumber.addEventListener('click', ()=>{
    if(contaSelecionada != "Soma" && contaSelecionada == ""){
        numeroQueEstava = panelNumber;
        panelNumber = 0;
        contaSelecionada = "Soma"
        sinal = " + "
        panel.textContent = numeroQueEstava + sinal
    }//Se ja estava com conta selecionada vamos resolver ela
    else{
        if(contaSelecionada == "Soma") resolveConta("Soma", numeroQueEstava, panelNumber)
    }
})

function resolveConta(conta, _numeroQueEstava, _numeroPainel){
    if(conta == "Soma")
    {
        resultado  = _numeroQueEstava + _numeroPainel
        numeroQueEstava = panelNumber
        panelNumber = resultado
        contaSelecionada = ""
        panel.textContent = resultado
    }
    else if(conta == "Subtrair"){
        resultado = _numeroQueEstava - _numeroPainel
        numeroQueEstava = panelNumber
        panelNumber = resultado
        contaSelecionada = ""
        panel.textContent = resultado
    }
    else if(conta == "Dividir"){
        resultado = (_numeroQueEstava / _numeroPainel).toFixed(5)
        numeroQueEstava = panelNumber
        panelNumber = parseFloat(resultado);
        contaSelecionada = ""
        //panelNumber = 0;
        panel.textContent = resultado
    }
    else if(conta == "Multiply"){
        resultado = _numeroQueEstava * _numeroPainel
        numeroQueEstava = panelNumber
        panelNumber = resultado
        contaSelecionada = ""
        //panelNumber = 0;
        panel.textContent = resultado
    }
    //console.log(conta)
    //console.log("Numero que estava: " + numeroQueEstava)
    //console.log("Numero atual " + panelNumber)
}
