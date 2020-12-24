// Verifique a distância da primeira imagem em relação ao topo da página
const firtImage = document.querySelector('img');
console.log(firtImage);

const distance = firtImage.offsetTop;
console.log(distance);

// Retorne a soma da largura de todas as imagens

function somaImagens() {
  const allImages = document.querySelectorAll('img');
  let soma = 0;

  allImages.forEach((image) => {
    soma = soma + image.width;
    console.log(image.width, `+`, soma);
  });
  console.log(`total`, soma);
}

window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
