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

let body = document.getElementsByTagName("body")[0];
body.onload = listEvent()

async function listEvent() {
  try {
    const eventos = document.querySelector("#articles")
    const response = await fetch("https://xp41-soundgarden-api.herokuapp.com/events");

    const listaEventos = await response.json()
    for (let index = 0; index < 3; index++) {
      const evento = listaEventos[index];
      let formatoData = new Date(evento.scheduled).toLocaleString()
      const card = `<article class="evento card p-5 m-3">
      <h2>${evento.name} - ${formatoData}</h2>
      <h4>${evento.attractions}</h4>
      <p>${evento.description}.</p>
      <a id="btn"href="javascript:chamarModal()" class="btn btn-primary">reservar ingresso</a>
      </article>`;
      console.log(formatoData)

      eventos.innerHTML += card

    };
  } catch {
    console.log("error")
  }
}

const button = document.querySelectorAll("#btn")
const modalPlace = document.querySelector(".full")

const divModal = document.createElement("div")
divModal.setAttribute("class", "modal")
const modalContent = document.createElement("div")
modalContent.setAttribute("class", "content")
const tituloModal = document.createElement("h2")
tituloModal.textContent ="Faça a sua reserva"
const inputName = document.createElement("input")
inputName.setAttribute("placeholder", "Nome")
inputName.setAttribute("type", "Nome")
inputName.setAttribute("class", "modalinputs")
const inputEmail = document.createElement("input")
inputEmail.setAttribute("placeholder", "Email")
inputEmail.setAttribute("type", "Email")
inputEmail.setAttribute("class", "modalinputs")
const inputNumeroIngressos = document.createElement("input")
inputNumeroIngressos.setAttribute("placeholder", "Quantos ingressos?")
inputNumeroIngressos.setAttribute("type", "Quantidade")
inputNumeroIngressos.setAttribute("class", "modalinputs")
const btnModal = document.createElement("button")
btnModal.setAttribute("type", "button")
btnModal.setAttribute("id", "modalconfirm")
btnModal.textContent = "Confirma"
modalContent.insertBefore(tituloModal, modalContent[1])
modalContent.insertBefore(inputName, modalContent[1])
modalContent.insertBefore(inputEmail, modalContent[2])
modalContent.insertBefore(inputNumeroIngressos, modalContent[3])
modalContent.insertBefore(btnModal, modalContent[4])
divModal.insertBefore(modalContent, divModal[0])
modalPlace.insertBefore(divModal, modalPlace.children[1])
const modal = document.querySelector(".modal")

function chamarModal(){
    const actualStyle = modal.style.display
    if(actualStyle == "block") {
        modal.style.display = "none"
    }
    else{
        modal.style.display = "block"
    }
}

const mbtn = document.querySelector("#modalconfirm")
mbtn.addEventListener("click", chamarModal)

window.onclick = function(event) {
    if(event.target == modal){
        chamarModal()
    }
}
