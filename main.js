/**
 * The file where everything comes together
 */
// import * as taskList from "./scripts/todoList.js";
// import { createTaskElement } from "./scripts/createTodoElement.js";

// What elements do we need?
// What events do we need to listen for?
// What should happen when those event occur?

import { addTask } from "./scripts/utilities.js";

document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.querySelector(".submit-button");
  submitButton.addEventListener("click", addTask);
});
