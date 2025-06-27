"use strict";
addEventListener("beforeunload", (event) => {
  event.preventDefault();
  event.returnValue = " ";
});
document.getElementById("addTask").addEventListener("click", (event) => {
  event.preventDefault();
});
document.getElementById("addTask").addEventListener("click", addTask);

document
  .getElementById("taskInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") addTask();
  });

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();
  let errorMessage1 = document.getElementById("errorMessage1");
  let errorMessage2 = document.getElementById("errorMessage2");
