// Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links

// const links = document.querySelectorAll('a');
// console.log(links);

// function handleClick(e) {
//   e.preventDefault();
//   links.forEach((link) => {
//     link.classList.remove('ativo');
//   });
//   this.classList.toggle('ativo');
//   console.log(this, `this`);
//   /// this === e.currentTarget
// }
// links.forEach((link) => link.addEventListener('click', handleClick));

// Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados

const elements = document.querySelectorAll('body *');
console.log(elements);

function handleClick(e) {
  console.log(e.target);
}

elements.forEach((element) => {
  element.addEventListener('click', handleClick);
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleClickKeyT(e) {
  if (e.key === 'b') {
    document.documentElement.classList.toggle('textoMaior');
  } else if (e.key === 's') {
    document.documentElement.classList.toggle('textoMenor');
  }
}

window.addEventListener('keydown', handleClickKeyT);
