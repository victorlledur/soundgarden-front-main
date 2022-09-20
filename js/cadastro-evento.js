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
label.textContent = "Ilustração(URL)"
const input = document.createElement("input")
input.setAttribute("type", "text")
input.setAttribute("class", "form-control")
input.setAttribute("id", "poster")
newDiv.insertBefore(label, newDiv[0])
newDiv.insertBefore(input, newDiv[1])

const descNode = document.querySelectorAll("form mb-3")[0]

const poster = formulario.insertBefore(newDiv, formulario.children[2])

//funções para cadastrar evento
let eventos = [];
 
form.onsubmit = (event) => {
    const novoEvento = {
        name: inputName.value,
        poster: poster.children[1].value,
        attractions: inputAtracoes.value.split(","),
        description: inputDescricao.value,
        scheduled: parseDate(inputData.value),
        number_tickets: inputLotacao.value
    }
    event.preventDefault()
    eventos.push(novoEvento)
    cadastrarEvento()
}

function parseDate(value) {
    [date, hour] = value.split(" ")
    date = date.split("/").reverse()
    date[0] = "20" + date[0]
    return `${date.join("-")}T${hour}:00.000Z`
}

function cadastrarEvento() {
    eventos.forEach((evento) => {
        console.log(evento)
        console.log(JSON.stringify(evento),)
        try {        
            fetch('https://xp41-soundgarden-api.herokuapp.com/events', {
                method: "POST",
                body: JSON.stringify(evento),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            }).then((res) => {
                return res.json()
            }).then((res) => {
                console.log(res)
                if(res.code == '201') {
                    alert('Evento criado!')
                }
            });
        }
        catch (error) {
            console.log(error);
        }
        });
       
}
