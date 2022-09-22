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

    let formatoData = objeto.scheduled.slice(0, -1)
    // let formatoData = new Date(objeto.scheduled).toLocaleString()
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
