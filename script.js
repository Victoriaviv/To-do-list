
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const list = document.getElementById('todoList');
  const li = document.createElement('li');
  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.onclick = () => li.classList.toggle('completed');
  
  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(taskText));
  list.appendChild(li);
  
  taskInput.value = "";
}
const inputField = document.getElementById('inputField');
  const list = document.getElementById('list');
  inputField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && inputField.value.trim()) {
      const newItem = document.createElement('li');
      newItem.textContent = inputField.value;
      list.appendChild(newItem);
      inputField.value = '';
    }
  });