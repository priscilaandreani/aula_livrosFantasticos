// Verifique a distância da primeira imagem em relação ao topo da página
const firstImage = document.querySelector('img');

const distance = firstImage.offsetTop;
console.log(distance, 'px');

// Retorne a soma da largura de todas as imagens

function somaImagens() {
  const allImages = document.querySelectorAll('img');
  let soma = 0;
  let lado = 0;

  allImages.forEach((image) => {
    soma = soma + image.width;
    console.log(lado++, image.width, `+`, soma);
  });
  console.log(`total`, soma);
}

window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)

const linksSizes = document.querySelectorAll('a');

console.log(linksSizes);

linksSizes.forEach((link) => {
  console.log(`altura: `, link.offsetHeight, `largura:`, link.offsetWidth);
});

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu

const menu = document.querySelector('.menu');
const browserSize = window.matchMedia('(max-width: 720px)');
console.log(browserSize);

window.onload = function setMenuMobile() {
  if (browserSize.matches === true) {
    menu.classList.add('menu-mobile');
    console.log(menu);
  }
};
