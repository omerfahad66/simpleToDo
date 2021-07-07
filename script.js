// variables
let addToDoBtn = document.getElementById("addToDo")
let toDoContainer = document.getElementById("toDoContainer")
let inputField = document.getElementById("inputField")

addToDoBtn.addEventListener("click", insert)

function insert(){
    var paragraph = document.createElement("p")
    paragraph.innerText = `• ${inputField.value}`
    inputField.focus()

    toDoContainer.appendChild(paragraph)
    inputField.value = ""

    // mark as completed
    paragraph.addEventListener("click", function (){
        paragraph.style.textDecoration = "line-through white"
    })
    // remove the task
    paragraph.addEventListener("dblclick", function (){
        toDoContainer.removeChild(paragraph)
    })
}