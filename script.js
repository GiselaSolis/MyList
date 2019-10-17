var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listName = document.getElementById ("listName")

function inputLength(){
    return input.value.length;   
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.classList.add('listElement')
    input.value = "";
    li.addEventListener("click", function (){
        li.classList.toggle("done")
    });

    var btn = document.createElement("BUTTON");
    btn.innerHTML = "X";
    li.appendChild(btn);
    btn.classList.add('deleteBtn')
    btn.addEventListener("click", function (){
        ul.removeChild(li);
    })
}

function eventClick(){
    if(inputLength() > 0) {
        createListElement();
    }
}

function eventKey(event){
    if(inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function changeName() {
    var name = prompt ("What's the name of your list?", "My List")
    listName.innerHTML = name
}

changeName()
button.addEventListener("click", eventClick);
input.addEventListener("keypress", eventKey);