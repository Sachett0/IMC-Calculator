const calcular = document.querySelector('#calcular');






calcular.addEventListener('click', ()=>{
    const nome = document.querySelector('#nome').value;
    const altura = document.querySelector('#altura').value;
    const peso = document.querySelector('#peso').value;  
    const resultado = document.querySelector('#resultado');
    
    if (peso > 0 && altura > 1 && nome !== "" && altura !== "" && peso !== ""){
        
        const valorIMC = (peso / (altura * altura)).toFixed(2);

       let classificacao = "";
         if (valorIMC < 18.5){
            classificacao = "abaixo do peso"
        }else if (valorIMC < 24.9) {
            classificacao = "com o peso ideal"
        }else if (valorIMC < 29.9){
            classificacao = "com sobrepeso"
        }else if (valorIMC < 39.9){
            classificacao = "com obesidade grau II"
        }else if (valorIMC >= 40){
            classificacao = "com obesidade grau III"
        }



        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

    } else if(altura <= 1 || peso < 20){
        resultado.textContent = "Preencha os campos peso e altura corretamente"
    }else {
        resultado.textContent = "Preencha todos os campos"
    }

});

//console.log(nome.value);