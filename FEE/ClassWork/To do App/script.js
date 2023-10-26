document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const taskList = document.getElementById("task-list");

    document.getElementById("add-task").addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-btn">Delete</button>
            `;

            taskList.appendChild(listItem);
            taskInput.value = "";

            listItem.querySelector(".delete-btn").addEventListener("click", function () {
                listItem.remove();
            });
        }
    });
});
