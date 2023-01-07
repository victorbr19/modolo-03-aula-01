//document.write("hello wordl");

//document.getElementById("conteiner").innerHTML = "<h1>Hello World da esquerda</h1>";
//document.querySelector("#conteiner").innerHTML = "<h2>Hello World da direita</h2>";

//let pargrafo = document.createComment("p");
//pargrafo.append("inserindo com append()");
//document.getElementById("container").appendChild(paragrafor);

//for(let i = 0; i <10; i++){
   // console.log("Rodada: "+ (i + 2));

   function somar()
   {
    let resultado = Number (valor1.value) + Number (valor2.value);
    document.getElementById("resultado").innerHTML = "<h4>Resultador é: "+resultado+ "</h4>";
    
   }

   function subitrair()
   {
    let resultado = Number (valor1.value) - Number (valor2.value);
    document.getElementById("resultado").innerHTML = "<h4>Resultador é: "+resultado+ "</h4>";
   }

   function mutiplicar()
   { let resultado = Number (valor1.value) * Number (valor2.value);
    document.getElementById("resultado").innerHTML = "<h4>Resultador é: "+resultado+ "</h4>"}

   function dividir()
   {
    let resultado = Number (valor1.value) / Number (valor2.value);
    document.getElementById("resultado").innerHTML = "<h4>Resultador é: "+resultado+ "</h4>"
   }
