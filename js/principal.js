var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhvalido= true;
var alturaEhvalida= true;

if(peso <= 0 || peso >= 1000){
   console.log("Peso inválido!");
   pesoEhvalido = false;
   tdImc.textContent = "Peso inválido";
}

if(altura <= 0 || altura >= 3.00){
    console.log("Altura inválida!");
    alturaEhvalida= false;
    tdImc.textContent = "Altura inválida!"
}

if (alturaEhvalida && pesoEhvalido){
var imc = peso / (altura * altura);
tdImc.textContent = imc;
}



var paciente2 = document.querySelector("#segundo-paciente");

var tdPeso2 = paciente.querySelector(".info-peso");
var peso2 = tdPeso.textContent;

var tdAltura2 = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhvalido= true;
var alturaEhvalida= true;

if(peso <= 0 || peso >= 1000){
   console.log("Peso inválido!");
   pesoEhvalido = false;
   tdImc.textContent = "Peso inválido";
}

if(altura <= 0 || altura >= 3.00){
    console.log("Altura inválida!");
    alturaEhvalida= false;
    tdImc.textContent = "Altura inválida!"
}

if (alturaEhvalida && pesoEhvalido){
var imc = peso / (altura * altura);
tdImc.textContent = imc;