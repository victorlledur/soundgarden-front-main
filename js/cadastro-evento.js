//separando as constantes para o cadastro
const form = document.querySelector(".col-6");
const inputName = document.querySelector("#nome");
const inputAtracoes = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");
const enviar = document.querySelector(".btn btn-primary");

//criando e inserindo o input de url de imagem
const formulario = document.querySelector("#formulario form")
const newDiv = document.createElement("div")
newDiv.setAttribute("class", "mb-3")
const label = document.createElement("label")
label.setAttribute("for", "Ilustração")
label.setAttribute("class", "form-label")
label.textContent = "Banner"
const input = document.createElement("input")
input.setAttribute("type", "text")
input.setAttribute("class", "form-control")
input.setAttribute("id", "poster")
const small = document.createElement("small")
small.textContent = "adicione o link da imagem"
newDiv.insertBefore(label, newDiv[0])
newDiv.insertBefore(input, newDiv[1])
newDiv.insertBefore(small, newDiv[2])

const descNode = document.querySelectorAll("form mb-3")[0]

const poster = formulario.insertBefore(newDiv, formulario.children[1])

//funções para cadastrar evento

form.onsubmit = async (event) => {
    event.preventDefault()
    const novoEvento = {
        name: inputName.value,
        poster: poster.children[1].value,
        attractions: inputAtracoes.value.split(","),
        description: inputDescricao.value,
        scheduled: new Date(inputData.value).toISOString(),
        number_tickets: inputLotacao.value
    }
    try {
        const res = await fetch('https://xp41-soundgarden-api.herokuapp.com/events', {
            method: "POST",
            body: JSON.stringify(novoEvento),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        if (res.status == 201) {
            alert('Evento criado!')
        }
        const eventoCriado = await res.json()
        console.log(eventoCriado)
    }
    catch (error) {
        console.log(error);
    }
};




