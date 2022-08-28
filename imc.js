  function calculoimc() {

    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value / 100;
  	
  	 peso = parseFloat(peso);
  	 altura = parseFloat(altura);
  	 

   
   var imc = peso / (altura) ** 2;
   var text=""
   imc = parseInt(imc);
   if (imc <= 18.5){
    text="Você Está Abaixo do Peso";
   } else if (imc <= 24.9) {
    text="Você Está com Peso Ideal";
   } else if (imc <= 29.9) {
    text="Você Está Acima do Peso";
   } else if (imc <= 34.9) {
    text="Você Está com Obesidade Grau 1";
   } else if (imc <= 39.9) {
    text="Você Está com Obesidade Grau 2";
   } else if (imc >= 40) {
    text="Você Está com Obesidade Grau 3";
   }  
       document.getElementById("resposta").innerText=("O Seu Imc é de " +imc+ "kg/m².  ") + text;
 }
   