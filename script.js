document.addEventListener("DOMContentLoaded", function () {
  const taskForm = document.getElementById("todoForm");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  // Menambahkan tugas baru
  taskForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      addTask(taskText);
      taskInput.value = "";
    }
  });

  // Menambahkan tugas ke daftar
  function addTask(taskText) {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
              <span>${taskText}</span>
              <div>
                  <button class="btn btn-success btn-sm complete-btn">Selesai</button>
                  <button class="btn btn-danger btn-sm delete-btn">Hapus</button>
              </div>
          `;
    taskList.appendChild(li);
  }

  // Menangani klik tombol "Selesai" dan "Hapus"
  taskList.addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("complete-btn")) {
      const taskItem = target.closest("li");
      taskItem.classList.toggle("completed");
      target.textContent =
        target.textContent === "Selesai" ? "Batal" : "Selesai";
    }

    if (target.classList.contains("delete-btn")) {
      const taskItem = target.closest("li");
      taskList.removeChild(taskItem);
    }
  });
});
