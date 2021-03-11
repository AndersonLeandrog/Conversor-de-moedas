
function converter() { //realiza a conversão de moedas
    var $brl = document.querySelector('.brl').value //obtém o valor da input brl
    var $us = document.querySelector('.us').value //obtém  o valor da input us

    var checkbox = document.getElementById('limpar') //obtém a checkbox

    if ($brl == 0) { //se brl for igual a zero (calcular o valor do dólar para o real)
        const real = 5.79 //valor atual do real em relação ao dólar
        var vdolar = $us * real
        x = vdolar.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

        if(checkbox.checked) { //se a checkbox estiver checada (muda o valor da input brl para 0)
            document.querySelector('.brl').value = '00.00'
        }
    } else { //se brl for diferente de zero (calcular o valor do real para o dólar)
        const dolar = 0.17; //valor atual do dólar em relação ao real
        var vreal = $brl * dolar;
        x = vreal.toLocaleString('en-US', {style: 'currency', currency: 'USD'})

        if(checkbox.checked) {
            document.querySelector('.us').value = '00.00' //se a checkbox estiver checada (muda o valor da input us para 0)
        }
    }
    
    document.querySelector('.resultado').innerHTML= x //exibe o resultado dentro da div resultado
}
