//Métodos Mais usados [Splice, Concat, Filter, Map, Reduce, forEach]

//forEach() Caso precise executar algum código para cada elemento do Array, executar um forEach é muito mais simples do que criar um for ou while, já que não precisamos declarar variáveis de controle.

//map() 
const usersList = [
	{name: 'João', credit: 500},
	{name: 'Maria', credit: 800}
];

const newUsersList = usersList.map((user, index, array) => {
	user.credit += 100;
	return user;
})

//filter() filtrarmos os elementos de um Array. Passamos para ele uma função. Se essa função retornar true, o elemento será inserido no novo Array que será criado. Se a função retornar false, o elemento será ignorado.
const usersList = [
	{name: 'João', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Carlos', credit: 300},
	{name: 'Vanessa', credit: 200},
];

const newUsersList = usersList.filter((user, index, array) => user.credit > 500);
/* Resultado:
[
	{name: 'João', credit: 600},
	{name: 'Maria', credit: 900}
]
*/

//find() quando queremos encontrar algum elemento dentro no Array. Para isso, passamos uma função que irá retornar true ou false. O primeiro true que for retornado irá finalizar a função e retornar o elemento em que estamos.


const usersList = [
	{name: 'João', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Carlos', credit: 300},
	{name: 'Vanessa', credit: 200},
];

const carlos = usersList.find((user, index, array) => user.name === 'Carlos');
/* Resultado:
	{name: 'Carlos', credit: 300}
*/
