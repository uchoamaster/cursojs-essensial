//documento, procure um elemento com ID "meuTexto" e altere no HTML para o texto "Mudei o Texto!"
 // var txt = document.getElementById("meuTexto").innerHTML;
//console.log(txt);

////////////////////////////////////////////////////////

//formas de pegar elemento
//pegar elemento pela tag
var txtTagName = document.getElementsByTagName("h1");
console.log(txtTagName[2].innerHTML);

txtTagName[2].setAttribute("class", "txtBlue");



//quero pegar todos os elementos que estão utilizando uma classe
//pegar elemento pelo nome da classe
//document.getElementsByClassName();
// var txtClassName = document.getElementsByClassName("txtName");
// console.log(txtClassName);