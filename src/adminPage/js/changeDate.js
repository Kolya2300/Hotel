const table = document.getElementById("table");
const tbody = table.querySelector("tbody");

fetch("db.json")
    .then(response => response.json())
    .then(data => {
        for (const post of data.hotel) {
            const row = document.createElement("tr");

            const idCell = document.createElement("td");
            idCell.textContent = post.id;
            row.appendChild(idCell);

            const nameHotelCell = document.createElement("td");
            nameHotelCell.textContent = post.nameHotel;
            row.appendChild(nameHotelCell);

            const locationCell = document.createElement("td");
            locationCell.textContent = post.location;
            row.appendChild(locationCell);

            const locationURLCell = document.createElement("td");
            locationURLCell.textContent = post.locationURL;
            row.appendChild(locationURLCell);

            const pictureCell = document.createElement("td");
            const picture = document.createElement("img");
            picture.src = post.picture;
            pictureCell.appendChild(picture);
            row.appendChild(pictureCell);

            const priceCell = document.createElement("td");
            priceCell.textContent = post.price;
            row.appendChild(priceCell);

            const ratingValueCell = document.createElement("td");
            ratingValueCell.textContent = post.ratingValue;
            row.appendChild(ratingValueCell);

            const descriptionCell = document.createElement("td");
            descriptionCell.textContent = post.description;
            row.appendChild(descriptionCell);

            const editCell = document.createElement("td");
            const editButton = document.createElement("button");

            editButton.textContent = "Change";

            editButton.addEventListener("click", () => {
                const nameHotel = prompt("Enter new name of Hotel", post.nameHotel);
                const location = prompt("Enter new location of Hotel", post.location);
                const locationURL = prompt("Enter new URL location of Hotel", post.locationURL);
                const picture = prompt("Enter new URL image", post.picture);
                const price = prompt("Enter new price for one night", post.price);
                const ratingValue = prompt("Enter new rating of Hotel", post.ratingValue);
                const description = prompt("Enter description", post.description);

                fetch(`http://localhost:3000/hotel/${post.id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        nameHotel: nameHotel,
                        location: location,
                        locationURL: locationURL,
                        picture: picture,
                        price: price,
                        ratingValue: ratingValue,
                        description: description
                    })
                })
                    .then(response => {
                        if (response.ok) {
                            alert("Запись изменена! Reload Page");
                            post.nameHotel = nameHotel;
                            post.location = location;
                            post.locationURL = locationURL;
                            post.picture = picture;
                            post.price = price;
                            post.ratingValue = ratingValue;
                            post.description = description;
                            nameHotelCell.textContent = nameHotel;
                            locationCell.textContent = location;
                            locationURLCell.textContent = locationURL;
                            pictureCell.textContent = picture;
                            priceCell.textContent = price;
                            ratingValueCell.textContent = ratingValue;
                            descriptionCell.textContent = description;
                        } else {
                            alert("Ошибка при изменении записи.");
                        }
                    })
                    .catch(error => console.error(error));
            });
            editCell.appendChild(editButton);
            row.appendChild(editCell);

            tbody.appendChild(row);
        }
    })
    .catch(error => console.error(error));
