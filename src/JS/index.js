/* Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 
  Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 
  Passo 2 - identificar o clique no botão 
  Passo 3 - adicionar a classe ativo nos projetos escondidos 

- Objetivo 2 - esconder o botão de mostrar mais 
  Passo 1 - pegar o botão e esconder ele 
  */

 // Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 

 const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
 const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)'); // Seleciona projetos que não possuem a classe 'ativo'
 
 botaoMostrarProjetos.addEventListener('click', () => {
  //Passo 3 - adicionar a classe ativo nos projetos escondidos 
     projetosInativos.forEach(projeto => {
         projeto.classList.add('ativo'); // Adiciona a classe 'ativo' ao projeto
         console.log(projeto); // Exibe o projeto no console
     });
 });
  
 //Objetivo 2 - esconder o botão de mostrar mais 
 // Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 
 botaoMostrarProjetos.classList.add("remover");

  
