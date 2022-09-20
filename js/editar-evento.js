//pegar o parametro que foi passado na url
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');
console.log(myParam)

//pegando o objeto com o parametro passado na url e 
//colocando os valores nos seus devidos inputs
async function getObject() {
    try {  
      const response = await fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${myParam}`);
      const objeto = await response.json()
      console.log(objeto)
      
      let formatoData = new Date(objeto.scheduled).toLocaleString()
      const inputName = document.querySelector("#nome") 
      inputName.setAttribute("value", `${objeto.name}`)
      const inputBanner = document.querySelector("#banner") 
      inputBanner.setAttribute("value", `${objeto.poster}`)      
      const inputAtracoes = document.querySelector("#atracoes") 
      inputAtracoes.setAttribute("value", `${objeto.attractions}`)
      const inputDescricao = document.querySelector("#descricao") 
      inputDescricao.textContent = `${objeto.description}` 
      const inputData = document.querySelector("#data") 
      inputData.setAttribute("value", `${formatoData}`)
      const inputLotacao = document.querySelector("#lotacao") 
      inputLotacao.setAttribute("value", `${objeto.number_tickets}`)
    }
    catch {
      console.log("error")
    }
  }
  getObject()

  //variaveis para fazer o recadastro
const form = document.querySelector(".col-6");
const inputName = document.querySelector("#nome");
const inputBanner = document.querySelector("#banner")
const inputAtracoes = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");
const enviar = document.querySelector(".btn btn-primary");

//funções para atualizar evento
let eventos = [];
 
form.onsubmit = (event) => {
    const novoEvento = {
        name: inputName.value,
        poster: inputBanner.value,
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
            fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${myParam}`, {
                method: "PUT",
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