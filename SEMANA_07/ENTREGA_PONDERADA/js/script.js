$(document).ready(function() {

var getProjects = '#getProjects';

  //Primera ação
  //Efeito de hover nos blocos
    $('.formacao, .experiencia, .habilidades, .personalidades').hover(
      function() {
        // Quando o mouse entra no elemento
        $(this).css('background-color', '#ff49c2'); // Define a cor de fundo como cinza
        $(this).css('color', 'white'); // Define a cor do texto como branco
      },
      function() {
        // Quando o mouse sai do elemento
        $(this).css('background-color', '#ffa1e0'); // Define a cor de fundo como branco
        $(this).css('color', 'black'); // Define a cor do texto como preto
      }
    );
  
  //Segunda ação
  //Ao clicar na imagem do Linkedin, leva ao link direcionado
    $('.linkedin').click(function() {
      // Redirecionar para o link do LinkedIn
      window.location.href = 'https://www.linkedin.com/in/rafaelarojas/';
    });
  });


  //Terceira ação
  //carrossel de projetos
    $('.carousel-item').first().addClass('active');
  
    // para avançar o carrossel
    $('.carousel-control-next').click(function() {
      var currentSlide = $('.carousel-item.active');
      var nextSlide = currentSlide.next();
  
      currentSlide.removeClass('active');
      nextSlide.addClass('active');
  
      if (nextSlide.length === 0) {
        $('.carousel-item').first().addClass('active');
      }
    });
  
    var slideIndex = 0;
    var slides = $('.slides img');
    var totalSlides = slides.length;
  
    // mostrar o slide atual
    function showSlide() {
      slides.hide();
      slides.eq(slideIndex).show();
    }
  
    // avançar para o próximo slide
    function nextSlide() {
      slideIndex++;
      if (slideIndex >= totalSlides) {
        slideIndex = 0;
      }
      showSlide();
    }
  
    // voltar para o slide anterior
    function prevSlide() {
      slideIndex--;
      if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
      }
      showSlide();
    }
  
    // eventos dos botões de navegação
    $('.prev-btn').click(prevSlide);
    $('.next-btn').click(nextSlide);
  
    // exibir o primeiro slide ao carregar a página
    showSlide();

  //Quarta ação
  //Clicar nas imagens do carrousel e direcionar para o projeto
  $('.projeto1').click(function() {
    // Redirecionar para o link do LinkedIn
    window.location.href = 'https://github.com/rafaelarojas/LittleBunny';
  });
  $('.projeto2').click(function() {
    // Redirecionar para o link do LinkedIn
    window.location.href = 'https://github.com/rafaelarojas/GABA';
  });
  $('.projeto3').click(function() {
    // Redirecionar para o link do LinkedIn
    window.location.href = 'https://github.com/rafaelarojas/my_truck';
  });

  function projetoGET(){ //faz uma requisição GET para o URL
    var url = "file:///C:/Users/Inteli/Documents/GitHub/Tutorial_M2_Rafaela_Rojass/SEMANA_07/ENTREGA_PONDERADA/html/index.html";
    var resposta;

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

    resposta = JSON.parse(xhttp.responseText); //converte de JSON para um objeto JavaScript
    $(getProjects).append("<br /><br />" + JSON.stringify(resposta)); // a resposta é convertida de volta para uma string
    //dicionada ao elemento HTML
    //adiciona a quebra de linha e o json convertido em string
     //console.log(xhttp.responseText);
}

const xhr = new XMLHttpRequest();
const container = document.getElementById('container');

xhr.onload = function() {
  if (this.status === 200) {
    container.innerHTML = xhr.responseText;
  } else {
    console.warm('Did not recive 200 OK from response!')
  }
}

xhr.open('get','SEMANA_07/ENTREGA_PONDERADA/html/index.html');
xhr.send();