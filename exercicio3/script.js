//Função Prompt Numbers
// function validaNum() {
//     let num = +prompt("Digite um número")
//     while (isNaN(num)) {
//         num = +prompt("Número invalido! \ntente novamente:")
//     }
//     return num
// }

const num1 = +prompt("Digite um número")
const num2 = +prompt("Digite um número")
//1
function fazerSoma(n1,n2){
    return n1 + n2;
    }
console.log(fazerSoma(num1,num2));
//2
function fazerSubtracao(n1,n2){
    return n1 - n2;
    }
    console.log(fazerSubtracao(num1,num2));
    //3
function fazerMulti(n1,n2){
    return n1 * n2;
    }
    console.log(fazerMulti(num1,num2));
    //4
function fazerDivisao(n1,n2){
    return n1 / n2;
    }
    console.log(fazerDivisao(num1,num2));
