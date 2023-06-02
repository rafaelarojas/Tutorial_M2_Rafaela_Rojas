/* 
=======================
Declaração de variáveis
=======================
*/
var getResDiv = "#get"; 
var getDBResDiv = "#getDB";

/* Função que faz um requisição GET */
function TestGET(){ // faz uma requisição GET para o URL 
    var url = "https://jsonplaceholder.typicode.com/todos/1";

    var xhttp = new XMLHttpRequest(); //enviar a requisição de forma síncrona
    xhttp.open("GET", url, false);//pega os dados que estar na url
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
    $(getResDiv).append("<br />" + xhttp.responseText); // adiciona a resposta ao elemento HTML
    $(getResDiv).append("<br />" + xhttp.responseText.title); 
    //console.log(xhttp.responseText);
}

/* Função que faz um requisição GET no nosso banco de dados */
function TestGETDB(){ //faz uma requisição GET para o URL
    var url = "http://127.0.0.1:3071/users";
    var resposta;

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

    resposta = JSON.parse(xhttp.responseText); //converte de JSON para um objeto JavaScript
    $(getDBResDiv).append("<br /><br />" + JSON.stringify(resposta)); // a resposta é convertida de volta para uma string
    //dicionada ao elemento HTML
    //adiciona a quebra de linha e o json convertido em string
     //console.log(xhttp.responseText);
}