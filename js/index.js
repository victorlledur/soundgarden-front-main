//função para pegar a primeira imagem do banner e seu titulo
async function getImagea() {
  try {
    const imgPlace = document.querySelector("#img-1")
    const textPlace = document.querySelector("#text-1")

    const response = await fetch("https://xp41-soundgarden-api.herokuapp.com/events/63288342fb09dd05fcfb66d0");
    const primeiraImagem = await response.json()
    console.log(primeiraImagem)
    imgPlace.setAttribute("src", `${primeiraImagem.poster}`)
    textPlace.textContent = `${primeiraImagem.name}`
  }
  catch {
    console.log("error")
  }
}
getImagea()

//função para pegar a segunda imagem do banner e seu titulo
async function getImageb() {
  try {
    const imgPlace = document.querySelector("#img-2")
    const textPlace = document.querySelector("#text-2")

    const response = await fetch("https://xp41-soundgarden-api.herokuapp.com/events/6328807bfb09dd05fcfb66c3");
    const segundaImagem = await response.json()
    console.log(segundaImagem)
    imgPlace.setAttribute("src", `${segundaImagem.poster}`)
    textPlace.textContent = `${segundaImagem.name}`
  }
  catch {
    console.log("error")
  }
}
getImageb()

//função para pegar a terceira imagem do banner e seu titulo
async function getImagec() {
  try {
    const imgPlace = document.querySelector("#img-3")
    const textPlace = document.querySelector("#text-3")

    const response = await fetch("https://xp41-soundgarden-api.herokuapp.com/events/6328807bfb09dd05fcfb66c1");
    const terceiraImagem = await response.json()
    console.log(terceiraImagem)
    imgPlace.setAttribute("src", `${terceiraImagem.poster}`)
    textPlace.textContent = `${terceiraImagem.name}`
  }
  catch {
    console.log("error")
  }
}
getImagec()

//funções para montar o banner
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000);
}
//listar 3 eventos na pagina principal