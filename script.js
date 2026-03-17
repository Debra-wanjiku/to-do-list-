const form = document.getElementById('todoForm');
const input = document.getElementById('taskInput');
const list = document.getElementById('taskList');
const error = document.getElementById('error');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const task = input.value.trim();

   if (task === '') {
    error.style.display = 'block';
    return;
  } else {
    error.style.display = 'none';
  }

   const li = document.createElement('li');
  li.textContent = task;

   const delBtn = document.createElement('button');
  delBtn.textContent = 'X';
  delBtn.classList.add('delete');

  delBtn.addEventListener('click', function() {
    list.removeChild(li);
  });

  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = '';
});