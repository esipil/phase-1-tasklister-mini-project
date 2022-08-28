
document.addEventListener("DOMContentLoaded", () => {
  const taskCreater = document.getElementById('create-task-form');
  taskCreater.addEventListener('submit', logging);
});

function logging (event) {
  const input = document.getElementById('new-task-description').value;
  const todos = document.getElementById('list');
  const li = document.createElement('li');
  const btn =document.createElement('button');
  li.textContent= input
  btn.textContent= 'x'
  li.appendChild(btn)
  li.addEventListener('click', function () {
    li.remove();
  })
  todos.append(li);
  document.getElementById('create-task-form').reset();
  event.preventDefault();
}
