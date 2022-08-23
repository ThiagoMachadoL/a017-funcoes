// a)
function saberASoma(n1,n2){
return n1 + n2;
}
console.log(saberASoma(22,13));
//b)
function saberOMaior(n1,n2){
return n1>=n2
}
console.log("O número 1 é maior que o número 2? " + saberOMaior(22,13)); 
// c)
function par(n1){
return n1%2 === 0
}
console.log("É Par? " + par(22));
//d)
function saberString (palavra){
    console.log(palavra.length + "\n" + palavra.toUpperCase()); 
}
saberString("Cristiano Ronaldo");

