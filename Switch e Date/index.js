const data = new Date('1999-10-11 04:00:00');
let diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda';
        break;
    case 2:
        diaSemanaTexto = 'Terça';
        break; 
    case 3:
        diaSemanaTexto = 'Quarta';
        break;
    case 4:
        diaSemanaTexto = 'Quinta';
        break;
    case 5:
        diaSemanaTexto = 'Sexta';
        break;
    case 5:
    diaSemanaTexto = 'Sábado';
    break;
    default: 
    diaSemanaTexto = '';

}

console.log(diaSemana, diaSemanaTexto)