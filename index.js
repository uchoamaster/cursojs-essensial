//documento, procure um elemento com ID "meuTexto" e altere no HTML para o texto "Mudei o Texto!"
 // var txt = document.getElementById("meuTexto").innerHTML;
//console.log(txt);

////////////////////////////////////////////////////////

//formas de pegar elemento
//pegar elemento pela tag
// var txtTagName = document.getElementsByTagName("h1");
// console.log(txtTagName[2].innerHTML);

// txtTagName[2].setAttribute("class", "txtBlue");
//aqui o elemento mudou de vermelho para azul



//quero pegar todos os elementos que estão utilizando uma classe
//pegar elemento pelo nome da classe
//document.getElementsByClassName();
// var txtClassName = document.getElementsByClassName("txtName");
// console.log(txtClassName);
//as funções podem ter os nomes que quiserem, nessa estamos pegando
// os elementos pelo ID
// function getById(id){
// var txt = document.getElementById(id);
// return txt;
// }

// function getByTag(tag){
// var txtTagName = document.getElementsByTagName(tag);
// return txtTagName;    
// }

// function getByClass(className){
// var txtClassName = document.getElementsByClassName(className);
// return txtClassName;
// }

//como chamar essas funções de maneira correta e de maneira errada

// console.log(getById("primeiroHello"));
// console.log(getByTag("h1")); 
// console.log(getByClass("txtName")); 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * aula 06 - eventos em javascript
 * //Onload -> quando a página for carregada
 * //Onchange -> um elemento HTML foi alterado
 * //Onclick -> o usuário clica em um elemento HTML
 * //OnMouseOver -> O usuário move o mouse sobre um elemento HTML
 * //OnMouseOut -> O usuário move o mouse para longe de um elemento HTML
 * //OnKeyDown -> O usuário aperta uma tecla do teclado
 */

function acionaOnload(){
    console.log("A página foi carregada!");
}

function acionaOnchange(){
    console.log("O conteúdo foi alterado");
}

function acionaOnClick(){
    console.log("O botão foi clicado!!");
}

function mudaCorBox(id, cor){
var box = document.getElementById(id).style.backgroundColor = cor;
}

function mudaCorBoxOut(id, cor) {
    var box = document.getElementById(id).style.backgroundColor = cor;
}