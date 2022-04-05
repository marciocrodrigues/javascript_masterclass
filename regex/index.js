let regExp = /^\w+@\w+(\.\w{2,3})+$/;
let result = regExp.exec("teste@teste.com.br");

console.log(result);

/**
 * Metacaracteres
 * . => Representa qualquer tipo de caracterer, para contar o mesmo como caraterer "." tem que utilizar o caractere de escape "\"
 * ^ => Inicia com um determinado caractere
 * $ => Finaliza com um determinado caractere
 * [abc] => Aceita qualquer caractere ddentro do grupo, nesse caso a,b,c
 * [^abc] => Não aceita qualquer caractere dentro do grupo, nesse caso a, b, c
 * [0-9] => Aceita qualquer caractere dentro de 0 a 9
 * [^0-9] => Não aceita qualquer caractere entre 0 a 9 
 * \w => Representa o conjunto [a-zA-Z0-9_]
 * \W => Representa o conjunto [^a-zA-Z0-9_]
 * \d => Representa o conjunto [0-9]
 * \D => Representa o conjunto [^0-9]
 * \s => Representa um espaço em branco
 * \S => Representa um não espaço em branco
 * \n => Representa uma quebra de linha
 * \t => Representa um tab
 * 
 * Quantificadores
 * 
 * {n} => Quantifica um número específico
 * {n,} => Quantifica um número mínimo
 * {n,m} => Quantifica um número mínimop e um número máximo
 * ? => Zero ou um
 * * => Zero ou mais
 * + => Um ou mais
 * 
 * Grupos de captura
 * 
 * () => Determina um grupo de captura para realizar a extração de valores de uma determinada String
 */

/**
Exercicio
Instruções
Dado o comando:

create table author (id number, name string, age number, city string, state string, country string)

Extraia o nome da tabela e armazene em uma variável chamada "tableName".
Extraia as colunas da tabela e armazene em uma variável chamada "columns".
Manipule a variável "columns", separando cada coluna com seu respectivo tipo, em uma string separada.

Resultado

tableName = "author"
columns = [ 'id number',' name string',' age number',' city string',' state string',' country string'] 
 */

// Resolução
const comando = 'create table author (id number, name string, age number, city string, state string, country string)';
const regexp = /create table ([a-z]+) \((.+)\)/;
const parsedComando = comando.match(regexp);
const tableName = parsedComando[1];
let columns = parsedComando[2];
columns = columns.split(',');
const columnsFormated = columns.map(column => String(column).trimStart());
console.log('tableName = ', tableName);
console.log('columns = ', columnsFormated);

