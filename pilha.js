// ---- exemplo de como funciona uma pilha ---- //

// criando os elementos de manipulação
var elementos = [];
var topo = -1;
const MAX = 10;

// função que adiciona um elemento "empurra" dentro da pilha
function push(num){
    if (topo < MAX){
        topo = topo +1;
        elementos[topo] = num;
    }

    else{
        console.log("Pilha esta cheia!");
    }
}

// função que retorna se a pilha esta vazia
function estaVazia(){
    return topo == -1;
}

// função que remove um elemento da pilha e retorna seu valor
function pop(){
    if (topo != -1){
        let num = elementos[topo];
        topo = topo - 1;
        return num;
    }
    else{
        console.log("Pilha esta vazia!");
    }
}


// ---- utilizando a pilha ---- //

// add elemntos na pilha
console.log("ADD os elementos!")
push(10);
push(20);
push(30);

console.log(elementos);

// retirando elementos da pilha
console.log("\nRemovendo os elementos!")
console.log(pop());
console.log(pop());
console.log(pop());

// aplicando a pilha para encontrar o valor binario
var numDecimal = 10;
var resto;

console.log("\nEmpilhando os valores....");
while (numDecimal != 0){
    resto = parseInt(numDecimal % 2)
    push(resto);
    console.log(resto);
    numDecimal = parseInt(numDecimal / 2);
}

console.log("\nDesempilhando os valores.....")
while (!estaVazia()){
    console.log(pop());
}
