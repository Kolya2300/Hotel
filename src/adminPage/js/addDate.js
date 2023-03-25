const form = document.querySelector("form");

form.addEventListener("submit", event => {
    event.preventDefault();

    const nameHotel = form.elements.nameHotel.value;
    const location = form.elements.location.value;
    const locationURL = form.elements.locationURL.value;
    const picture = form.elements.picture.value;
    const price = form.elements.price.value;
    const ratingValue = form.elements.ratingValue.value;
    const description = form.elements.description.value;

    fetch("http://localhost:3000/hotel", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nameHotel, location, locationURL, picture,price, ratingValue, description })
    })
        .then(response => {
            if (response.ok) {
                alert("Запись добавлена!");
                form.reset();
            } else {
                alert("Ошибка при добавлении записи.");
            }
        })
        .catch(error => console.error(error));
});