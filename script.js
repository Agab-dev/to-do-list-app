"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelector(".add");
const input = document.querySelector(".input");
const taskList = document.querySelector(".grid");
const btnAddTask = document.querySelector(".add-task");
const body = document.querySelector('body');
const btnRemoveTask = document.querySelectorAll(".close-task");

const validInput = function () {
  return input.value;
};

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  input.value = "";
  body.classList.add("no-scroll");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  body.classList.remove("no-scroll");
};

const addTask = function () {
  if (input.value) {
    const btnCloseTask = document.createElement("button");
    btnCloseTask.classList.add("close-task");
    btnCloseTask.innerHTML = "&times;";
    btnCloseTask.setAttribute("onclick", "removeTask()");
    btnCloseTask.setAttribute("id", "demo");
    const task = document.createElement("li");
    task.textContent = input.value;
    task.append(btnCloseTask);
    taskList.append(task);
    closeModal();
  } else {
    alert("No Text Has Been Specified!");
  }
};

const removeTask = function () {
  document.getElementById("demo").parentElement.remove();
};

btnOpenModal.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

btnAddTask.addEventListener("click", addTask);
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && input.value) {
    addTask();
  }
});

for (let i = 0; i < btnRemoveTask.length; i++) {
  btnRemoveTask[i].addEventListener('click', function(e) {
    this.parentElement.remove();
  })
}
