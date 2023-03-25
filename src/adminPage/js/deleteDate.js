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
                <td><button data-id="${post.id}" class="delete-btn">Delete</button></td>
              `;
                tbody.appendChild(row);
            });

            // Добавляем обработчики событий для кнопок "Удалить"
            const deleteButtons = table.querySelectorAll("button");
            deleteButtons.forEach(button => {
                button.addEventListener("click", event => {
                    event.preventDefault();

                    const id = button.dataset.id;
                    fetch(`http://localhost:3000/posts/${id}`, {
                        method: "DELETE"
                    })
                        .then(response => {
                            if (response.ok) {
                                if (confirm("are you sure?")){
                                alert("Запись удалена!");
                                renderData();
                                }else{
                                    alert("not delete")
                                }
                            } else {
                                alert("Ошибка при удалении записи.");
                            }
                        })
                        .catch(error => console.error(error));
                });
            });
        })
        .catch(error => console.error(error));
}

renderData();