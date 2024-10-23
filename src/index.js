document.addEventListener("DOMContentLoaded", () => {
  // get form and task list elements
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  //handle submissions
  form.addEventListener("submit",function(event){
  event.preventDefault();

  //get task description
const taskDescription = document.getElementById("new-task-description").value;

// Check if the task description is not empty
if (taskDescription !== "") {
  // Create a new list item for the task
  const li = document.createElement("li");
  li.textContent = taskDescription;

  // Append the task to the task list
  taskList.appendChild(li);

  // Clear the input field after submission
  document.getElementById("new-task-description").value = "";
  }
});
});
