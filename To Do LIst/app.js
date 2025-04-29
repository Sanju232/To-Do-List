const inputArea = document.querySelector("#input-box");
const addBtn = document.querySelector("button");
const listContainer = document.querySelector("#list-container");
 
function addTask() {
    if (inputArea.value === "") {
        alert("Please enter some task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputArea.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
}
    inputArea.value = "";
    saveData();
}
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}