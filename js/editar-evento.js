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

form.onsubmit = async (event) => {
    event.preventDefault()
    const novoEvento = {
        name: inputName.value,
        poster: inputBanner.value,
        attractions: inputAtracoes.value.split(","),
        description: inputDescricao.value,
        scheduled: new Date(inputData.value).toISOString(),
        number_tickets: inputLotacao.value
    }
    try {
        const res = await fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${myParam}`, {
            method: "PUT",
            body: JSON.stringify(novoEvento),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        if (res.status == 200) {
            alert('Evento editado com sucesso!')
        }
        const eventoCriado = await res.json()
        console.log(eventoCriado)
    }
    catch (error) {
        console.log(error);
    }
};