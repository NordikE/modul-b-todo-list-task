/**
 * A file for storing helpful functions.
 * Use it for those which do not directly belong
 * to anything else
 *
 * Might I suggest you create a function for generating
 * random IDs?
 * type generateId = () => number
 */
// function generateId() {
//   return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
// }
export function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");
    const currentDate = new Date().toLocaleDateString("en-GB");
    t;
    li.textContent = `${taskText} - Created on: ${currentDate}`;
    taskList.appendChild(li);
    taskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
}
