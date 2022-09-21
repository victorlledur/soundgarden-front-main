const form = document.querySelector(".col-6");

form.onsubmit = async (event) => {
  event.preventDefault()
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('id');

  try {
    const res = await fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${myParam}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    if (res.status == 204) {
      alert('evento deletado!')
      window.location.replace('/admin.html')
    }
  }
  catch (error) {
    console.log(error);
  }
};


