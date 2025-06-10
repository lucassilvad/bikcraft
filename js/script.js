// Ativar links do Menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar itens do Orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }

  console.log(elemento);
}

if (parametros) {
  parametros.forEach(ativarProduto);
}

console.log(parametros);

// Perguntas Frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const resposta = document.getElementById(
    pergunta.getAttribute("aria-controls")
  );

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.includes("ativa");
  pergunta.setAttribute("aria-expanded", ativa);

  console.log(resposta);

  // event.currentTarget.classList.toggle("ativa");
}

function eventosPerguntas(perguntas) {
  perguntas.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de Bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  const media2 = matchMedia("(min-width: 475px)").matches;

  if (media || media2) {
    galeriaContainer.prepend(img);
  }

  console.log(media, media2);
}

function eventosGaleria(imagem) {
  imagem.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

console.log(galeria);

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
