const calcular = document.getElementById(`calculate`);

function calcularIMC() {
    const nome = document.getElementById(`name`).value;
    const altura = document.getElementById(`height`).value;
    const peso = document.getElementById(`weight`).value;
    const resultado = document.getElementById(`result`);
    
    if(nome !== `` && altura !== `` && peso !== ``) {
        const imc = (peso / Math.pow(altura, 2)).toFixed(2);
        let classificaoIMC = ``;

        if(imc < 18.5)
            classificaoIMC = `abaixo do peso normal.`;
        else if(imc >= 18.5 && imc <= 24.9)
            classificaoIMC = `peso normal.`;
        else if(imc >= 25.0 && imc <= 29.9)
            classificaoIMC = `excesso de peso.`;
        else if(imc >= 30.0 && imc <= 34.9)
            classificaoIMC = `obesidade classe I.`;
        else if(imc >= 35.0 && imc <= 39.9)
            classificaoIMC = `obesidade classe II.`;
        else
            classificaoIMC = `obesidade classe III.`;

        resultado.textContent = `${nome}, seu IMC é de ${imc} e você está com ${classificaoIMC}`;
    } else {
        resultado.textContent = `Por gentileza, preencher todos os campos!!!`;
    }
}

calcular.addEventListener(`click`, calcularIMC);