document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault();
    tasks(e.target.value)
    document.querySelector('form').reset();
  })
});

function tasks() {
  const input = document.getElementById("new-task-description");
  const li = document.createElement("li");
  const btn = document.createElement("button")
  btn.addEventListener('click', removeTask)
  btn.textContent = 'X';
  li.innerHTML = `${input.value} `;
  li.appendChild(btn)
  document.querySelector("#tasks").appendChild(li);
}

function removeTask(e) {
  e.target.parentNode.remove();
} 