// Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

alert("Hello World!");

// Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let firstNumber;
let secondNumber;

firstNumber = prompt("Por favor, digite abaixo o primeiro número para a soma");

secondNumber = prompt("Por favor, digite abaixo o segundo número para a soma");

let sum = Number(firstNumber)+Number(secondNumber);

alert(`A soma dos números é ${sum}`);

// Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

let numberOne = 30

if(typeof numberOne == "number"){
    alert(`O valor declarado na variável é "${numberOne}". É um número`);
}else{
    alert(`O valor declarado na variável é "${numberOne}". Não é um número`);
}

let numberTwo = 10

if(typeof numberTwo == "number"){
    alert(`O valor declarado na variável é "${numberTwo}". É um número`);
}else{
    alert(`O valor declarado na variável é "${numberTwo}". Não é um número`);
}

// Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let variableValue = "Um texto qualquer";

if(typeof variableValue == "string"){
    alert(`O valor declarado na variável é "${variableValue}". É uma string`);
}else{
    alert(`O valor declarado na variável é "${variableValue}". Não é uma string`);
}

// Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let isBooleanValue = false;

if(typeof isBooleanValue == "boolean"){
    alert(`O valor declarado na variável é "${isBooleanValue}". É um Booleano`);
}else{
    alert(`O valor declarado na variável é "${isBooleanValue}". Não é um Booleano`);
}

let firstValue = Number(prompt("Por favor digite aqui o primeiro valor que deseja calcular"));

let secondValue = Number(prompt("Por favor digite aqui o segundo valor que deseja calcular"));

let sub = firstValue - secondValue;
let multi = firstValue * secondValue;
let div = firstValue / secondValue;
let evenValue = (firstValue%2==0);
let oddValue = (secondValue%2!=0);

// Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

alert(`A subtração dos valores é igual a ${sub}`);

// Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

alert(`A multiplicação dos valores é igual a ${multi}`);

// Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas

alert(`A divisão dos valores é igual a ${div}`);

//  Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

if(evenValue){
    alert("O primeiro valor é um número par");
}
else{
    alert("O primeiro valor não é um número par");
};

// Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

if(oddValue){
    alert("O segundo valor é um número ímpar");
}
else{
    alert("O segundo valor não é um número ímpar");
};

