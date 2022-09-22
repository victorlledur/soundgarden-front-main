const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');

let body = document.getElementsByTagName("body")[0];
body.onload = listReservas()

async function listReservas(){
    try {
        const reservas = document.querySelector("#rows");
        const response = await fetch(`https://xp41-soundgarden-api.herokuapp.com/bookings/event/${myParam}`);

        const listaBooking = await response.json();
        listaBooking.forEach((evento, index) => {           
            const card = `<tr>
            <th scope="row">${index+1}</th>
            <td>${evento.owner_name}</td>
            <td>${evento.owner_email}</td>
            <td>${evento.number_tickets}</td>
        </tr>`;
            console.log(evento)

            reservas.innerHTML += card

        });
    } catch (error) {
        console.log(error)
    }
}