console.log("Trabalhando com Atriubuição de Variáveis");
const primeiroNome = "Bruno";
const sobrenome = "Henrique";

//console.log(nome + " " + sobrenome);
console.log(primeiroNome, sobrenome);                   //Duas maneiras de fazer o espaçamento de texto.
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

let contador = 0;
contador += 1;
const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

let idade;                                      //declarando variável
idade = 20;                                     //atribuindo valor
idade ++;                                       //soma 1 à idade
idade --;                                       //subtrai 1 à idade
console.log(idade);