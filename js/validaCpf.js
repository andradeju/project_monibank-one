export default function eUmCPF(campo){
    const cpf = campo.value.replace(/\.|-/g, "");
    if(validaNumsRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)){
        console.log("Esse CPF não existe");
    } else {
        console.log("Existe!");
    }
}

function validaNumsRepetidos(cpf){
  const numRepetidos = [
    '00000000000',
    '11111111111',
    '22222222222',
    '333333333333',
    '44444444444',
    '555555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
  ]
  return numRepetidos.includes(cpf);
}

function validaPrimeiroDigito(cpf) {
  let soma = 0;
  let multiplicador = 10;

  for(let tamanho = 0; tamanho < 9; tamanho++) {
    soma += cpf[tamanho] * multiplicador;
    multiplicador--;
  }

  soma = (soma * 10) % 11;
  if(soma == 10 || soma == 11) {
    soma = 0;
  }
  return soma != cpf[9];
}

function validaSegundoDigito(cpf) {
  let soma = 0;
  let multiplicador = 11;

  for(let tamanho = 0; tamanho < 10; tamanho++) {
    soma += cpf[tamanho] * multiplicador;
    multiplicador--;
  }
  
  soma = (soma * 10) % 11;
  if(soma == 10 || soma == 11) {
    soma = 0;
  }
  return soma != cpf[10];
}

