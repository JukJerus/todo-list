const inputBox = document.getElementById('task');
console.log(inputBox);
const tasks = document.getElementById('list');
console.log(tasks);

function addTask() {
  if (inputBox.value === '') {
    alert('Please enter a task');
  }
  else {
    const li = document.createElement('li');
    li.innerHTML = inputBox.value;
    tasks.appendChild(li);
    inputBox.value = '';
    let span = document.createElement('span');
    li.appendChild(span);
    span.innerHTML = '\u00D7';
  }
  saveData();
}

tasks.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveData();
  }
  else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem('data', tasks.innerHTML);
}

function loadData() {
  tasks.innerHTML = localStorage.getItem('data');
}
loadData();