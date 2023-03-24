const addBtn = document.getElementById("addBtn");
const contentDiv = document.getElementById("content")
const closeBtn = document.getElementById("closeBtn");

addBtn.addEventListener("click", function() {
    contentDiv.style.display = "block";
});

closeBtn.addEventListener("click", function() {
    contentDiv.style.display = "none";
});
