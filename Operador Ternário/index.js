//Operador Ternário

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário Vip' : 'Usuário Normal';


// Operador Ternário substitui estas linhas de código
/*
if(pontuacaoUsuario >= 1000) {
    console.log('Usuário Vip')
} else {
    console.log('Usuário Normal')

}
*/

const corUsuario = null;
const corPadrao  = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);
