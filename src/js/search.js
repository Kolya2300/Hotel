const addBtn = document.getElementById("addBtn");
const contentDiv = document.getElementById("content")
const closeBtn = document.getElementById("closeBtn");

addBtn.addEventListener("click", function() {
    contentDiv.style.display = "block";
});

closeBtn.addEventListener("click", function() {
    contentDiv.style.display = "none";
});
function getDate() {
    const inputDate = document.getElementById("myDate").value; // получаем значение поля ввода
    const inputDate2 = document.getElementById("myDate2").value; // получаем значение поля ввода

    const date1 = new Date(inputDate);
    const date2 = new Date(inputDate2);

    const diffInMs = date2.getTime() - date1.getTime(); // вычисляем разницу в миллисекундах

    let diffInDays = diffInMs / (1000 * 60 * 60 * 24); // преобразуем разницу в дни
    const selectElement = document.getElementById("mySelect");
    const selectedValue = selectElement.value;
    diffInDays = diffInDays * selectedValue
    console.log(diffInDays)
}