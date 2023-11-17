//Criar um conversor de quilômetros para anos-luz e descobrir o tempo necessário para viajar de uma estrela para outra;

var anosLuzKm = 9460000000000;
var anosLuzSegundos = 31557600;
var tempoDeViagem = 4.5;

var viagemEstrelaKm = anosLuzKm * tempoDeViagem;
viagemEstrelaKm = viagemEstrelaKm.toFixed(2);

var viagemEstrelaSg = anosLuzSegundos * tempoDeViagem;
viagemEstrelaSg = viagemEstrelaSg.toFixed(2);

alert(
  "Olá, a viagem para a estrela mais próxima dura " +
    tempoDeViagem +
    " anos-luz. Ou seja, " +
    viagemEstrelaSg +
    " luz-segundos e " +
    viagemEstrelaKm +
    " luz-quilometros."
);