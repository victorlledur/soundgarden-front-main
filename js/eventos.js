//função para listar todos os eventos na pagina
let body = document.getElementsByTagName("body")[0];
body.onload = listEvent()

async function listEvent(){
    try{
        const eventos = document.querySelector("#articles")
        const response = await fetch("https://xp41-soundgarden-api.herokuapp.com/events");

    const listaEventos = await response.json() 
    listaEventos.forEach((evento) => {
        let formatoData = new Date(evento.scheduled).toLocaleString()
        const card = `<article class="evento card p-5 m-3">
        <h2>${evento.name} - ${formatoData}</h2>
        <h4>${evento.attractions}</h4>
        <p>${evento.description}.</p>
        <a id="btn"href="javascript:chamarModal()" class="btn btn-primary">reservar ingresso</a>
        </article>`;
        console.log(formatoData)

      eventos.innerHTML += card

    });
}catch{
    console.log("error")
}
}

//criando e inserindo o modal na pagina, e as funções correspondentes
const button = document.querySelectorAll("#btn")
const modalPlace = document.querySelector("#full")

const divModal = document.createElement("div")
divModal.setAttribute("class", "modal")
const modalContent = document.createElement("div")
modalContent.setAttribute("class", "content")
const inputName = document.createElement("input")
inputName.setAttribute("placeholder", "Nome")
inputName.setAttribute("type", "Nome")
const inputEmail = document.createElement("input")
inputEmail.setAttribute("placeholder", "Email")
inputEmail.setAttribute("type", "Email")
const btnModal = document.createElement("button")
btnModal.setAttribute("type", "button")
btnModal.setAttribute("id", "modalconfirm")
btnModal.textContent = "Confirma"
modalContent.insertBefore(inputName, modalContent[0])
modalContent.insertBefore(inputEmail, modalContent[1])
modalContent.insertBefore(btnModal, modalContent[2])
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

//a encrenca de fazer uma reserva em um evento






