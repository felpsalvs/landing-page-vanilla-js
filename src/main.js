// Seleciona o elemento de navegação principal pelo seu ID
const nav = document.querySelector('#main');

// Armazena a posição superior do elemento de navegação
let topOfNav = nav.offsetTop;

// Função para fixar a navegação
function fixNav() {
  // Verifica se a posição vertical atual é maior ou igual à posição superior do elemento de navegação
  if (window.scrollY >= topOfNav) {
    // Define um padding-top no body igual à altura do elemento de navegação
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    
    // Adiciona a classe 'fixed-nav' ao body para fixar a navegação
    document.body.classList.add('fixed-nav');
  } else {
    // Remove o padding-top do body
    document.body.style.paddingTop = 0;
    
    // Remove a classe 'fixed-nav' do body para restaurar a navegação normal
    document.body.classList.remove('fixed-nav');
  }
}

// Adiciona um listener de evento de scroll à janela, que chama a função fixNav quando ocorre um scroll
window.addEventListener('scroll', fixNav);
