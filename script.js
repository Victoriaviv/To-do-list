


var list = document.querySelector('ul');

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
  console.log()
}, false);
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

// Select all the checkboxes
const checkboxes = document.querySelectorAll('.task-checkbox');

// Add event listener to each checkbox
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (e) => {
    const taskText = e.target.nextElementSibling; // Get the span element
    if (e.target.checked) {
      taskText.classList.add('checked'); // Add checked class
    } else {
      taskText.classList.remove('checked'); // Remove checked class
    }
  });
});
