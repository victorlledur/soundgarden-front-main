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
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');
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
