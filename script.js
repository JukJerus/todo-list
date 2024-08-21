const inputBox = document.getElementById('task');

const tasks = document.getElementById('list');

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
}

tasks.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
  else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.style.display = 'none';
  }
});