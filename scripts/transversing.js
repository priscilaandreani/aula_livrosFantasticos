// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');

const copy = document.querySelector('.copy');

const novoMenu = menu.cloneNode(true);
console.log(novoMenu);
copy.appendChild(novoMenu);

// Selecione o primeiro DT da dl de Faq
const faqLista = document.querySelector('.faq-lista');
console.log(faqLista);

const primeiroDT = faqLista.children[0];
console.log(primeiroDT);

// Selecione o DD referente ao primeiro DT

const primerioDD = faqLista.children[--faqLista.children.length];
console.log(primerioDD);

// Substitua o conteúdo html de .faq pelo de .livros

const faq = document.querySelector('.faq');
const livros = document.querySelector('.livros');

faq.innerHTML = livros.innerHTML;
