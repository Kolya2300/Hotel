const table = document.getElementById("table");
function renderData() {
    fetch("http://localhost:3000/hotel")
        .then(response => response.json())
        .then(data => {
            // Очищаем таблицу перед рендерингом новых данных
            const tbody = table.querySelector("tbody");
            tbody.innerHTML = "";

            // Рендерим новые данные в таблицу
            data.forEach(post => {
                const row = document.createElement("tr");
                row.innerHTML = `
                <td>${post.id}</td>
                <td>${post.nameHotel}</td>
                <td>${post.location}</td>
                <td>${post.locationURL}</td>
                <img src="${post.picture}" alt="" width="300" height="300">
                <td>${post.price}</td>
                <td>${post.ratingValue}</td>
                <td>${post.description}</td>
              `;
                tbody.appendChild(row);
            });
        })
        .catch(error => console.error(error));
}

renderData();