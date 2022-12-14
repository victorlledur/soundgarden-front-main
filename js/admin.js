let body = document.getElementsByTagName("body")[0];
body.onload = listEvent()

async function listEvent(){
    try {
        const eventos = document.querySelector("#rows");
        const response = await fetch("https://xp41-soundgarden-api.herokuapp.com/events");

        const listaEventos = await response.json()
        listaEventos.forEach((evento, index) => {
            let formatoData = new Date(evento.scheduled).toLocaleString()           
            const card = `<tr>
            <th scope="row">${index+1}</th>
            <td>${formatoData}</td>
            <td>${evento.name}</td>
            <td>${evento.attractions}</td>
            <td>
                <a href="reservas.html?id=${evento._id}" class="btn btn-dark">ver reservas</a>
                <a href="editar-evento.html?id=${evento._id}" class="btn btn-secondary">editar</a>
                <a href="excluir-evento.html?id=${evento._id}" class="btn btn-danger">excluir</a>
            </td>
        </tr>`;
            console.log(evento)

            eventos.innerHTML += card

        });
    } catch (error){
        console.log(error)
    }
}

