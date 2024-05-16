// Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

// Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const botaoMenosProjetos = document.querySelector('.btn-menos-projetos');

botaoMostrarProjetos.addEventListener('click', () => {
  mostrarMaisProjetos();
  botaoMostrarProjetos.style.display = 'none';
  botaoMenosProjetos.style.display = 'block';
});

botaoMenosProjetos.addEventListener('click', () => {
  esconderProjetos();
  botaoMostrarProjetos.style.display = 'block';
  botaoMenosProjetos.style.display = 'none';
});
function mostrarMaisProjetos() {
    const projetos = document.querySelectorAll('.projeto:not(.ativo)');
    projetos.forEach(projeto => {
      projeto.classList.add('ativo');
    });
  }
  
  function esconderProjetos() {
    const projetos = document.querySelectorAll('.projeto');
    projetos.forEach((projeto, index) => {
      if (index >3) {
        projeto.classList.remove('ativo')
      }
    });
  }