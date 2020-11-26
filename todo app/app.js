
var input = document.querySelector("input[type = 'text']");
var ul = document.querySelector("ul");
var container = document.querySelector("div");
var lists = document.querySelectorAll("li");
var spans = document.getElementsByTagName("span");
var pencil = document.querySelector("#pencil");
var saveBtn = document.querySelector(".save");
var clearBtn = document.querySelector(".clear");
var tipsBtn = document.querySelector(".tipBtn");
var closeBtn = document.querySelector(".closeBtn");
var overlay = document.getElementById("overlay");

// delete 
function deleteTodo() {
  for (let span of spans) {
    span.addEventListener("click", function (e) {
      span.parentElement.remove();
      e.stopPropagation();
    });
  }
}

// load todo  local storage.
function loadTodo() {
  if (localStorage.getItem("todoList")) {
    ul.innerHTML = localStorage.getItem("todoList");
    deleteTodo();
  }
}


input.addEventListener("keypress", function (keyPressed) {
  if (keyPressed.which === 13) {
    
    var li = document.createElement("li");
    var spanElement = document.createElement("span");
    var icon = document.createElement("i");

    var newTodo = this.value;
    this.value = " ";

    icon.classList.add("fas", "fa-trash-alt");
    spanElement.append(icon);
    ul.appendChild(li).append(spanElement, newTodo);

    deleteTodo();
  }
});

ul.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);


pencil.addEventListener("click", function () {
  input.classList.toggle("display");
});


saveBtn.addEventListener("click", function () {
  localStorage.setItem("todoList", ul.innerHTML);
});


clearBtn.addEventListener("click", function () {
  ul.innerHTML = "";
  localStorage.removeItem("todoList", ul.innerHTML);
});


tipsBtn.addEventListener("click", function () {
  overlay.style.height = "100%";
});


closeBtn.addEventListener("click", function (e) {
  e.preventDefault;
  overlay.style.height = "0";
});


deleteTodo();


loadTodo();
