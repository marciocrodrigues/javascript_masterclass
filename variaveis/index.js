// VAR -> var permite redeclaração, não respeita bloco
// declaração e atribuição
var pi = 3.141592;
console.log(pi);
// reatribuição
pi = 3
console.log(pi);
// redeclaração
var pi = 4;
console.log(pi)


// LET -> não redeclaração, respeita o bloco
let pi2 = 3.141592;
console.log(pi2);
// retribuição
pi2 = 'teste';
console.log(pi2);

// CONST -> não permite redeclaração, retribuição e respeita o bloco
const pi3 = 3.141592;
console.log(pi3);


// função auto invocada para testar variavel sem let, var ou const, ela fica no escopo global (não declarar sem usar uma das formas acima)
(function() {
    pi4 = 3.141592;
})();
console.log('pi4', pi4);

// Formas validas de declarar variaveis
let name;
let Name;
let _name;
let $name;

