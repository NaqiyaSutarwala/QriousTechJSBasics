"use strict";

const dataDialog = document.getElementById("dataDialog");

// Button

const btnSubmit = document.getElementById("submitButton");

// Input
const inputTask = document.getElementById("inputTask");
const inputTaskDesc = document.getElementById("inputTaskDesc");
const inputDate = document.getElementById("inputDate");

// Display
const displayTitle = document.getElementById("displayTitle");
const displayDialog = document.getElementById("displayDialog");

const taskArray = [];

// Timestamp for id
const id = new Date().getTime();

// On Submit
btnSubmit.addEventListener("click", function () {
  const task = {
    id: id + 1,
    title: inputTask.value,
    desc: inputTaskDesc.value,
    date: inputDate.value,
    status: "Pending",
  };

  taskArray.push(task);

  if (!localStorage.getItem("Tasks")) {
    const taskString = JSON.stringify(taskArray);
    localStorage.setItem("Tasks", taskString);

    location.reload();
  } else {
    const taskGet = localStorage.getItem("Tasks");
    const taskArr = JSON.parse(taskGet);

    taskArr.push(taskArray[0]);

    const taskString = JSON.stringify(taskArr);

    localStorage.setItem("Tasks", taskString);
  }

  inputTask.value = "";
  inputTaskDesc.value = "";
  inputDate.value = "";

  location.reload();
});

// Display Data
const storedData = localStorage.getItem("Tasks");
const storedDataArr = JSON.parse(storedData);
storedDataArr.forEach((item) => {
  console.log(item);

  document.getElementById(
    "mainDiv"
  ).innerHTML += `<div class="card displayCard" id="displayCard" onclick ="openDialog(${
    item.id
  })">
      <div class="displayHead">
          Title:
          <h2 class="displayTitle" id="displayTitle">${item.title}</h2>
      </div>
      <div class="displayHead">
          ${item.date} <br />

          <button class="completedButton ${
            item.status === "Pending" ? "hidden" : "visible"
          }" id="completedButton">Completed</button>
       </div>
     </div>
    </div>`;
});

const displayCard = document.getElementById("displayCard");

const completedButton = document.querySelectorAll("#completedButton");
console.log(completedButton);

const markCompleted = function (id, status) {
  storedDataArr.forEach((item, index) => {
    if (item.id === id) {
      completedButton.forEach((list, indexList) => {
        if (indexList === index) {
          list.classList.remove("hidden");
          dataDialog.close();
          storedDataArr[index].status = "Completed";
        }
      });
    }
  });

  let storedString = JSON.stringify(storedDataArr);

  localStorage.setItem("Tasks", storedString);
};

const lblInput = document.querySelectorAll(".labelTry");

// Open Dialog
const openDialog = function (id) {
  dataDialog.showModal();

  storedDataArr.forEach((item) => {
    if (item.id === id) {
      dataDialog.innerHTML = `<div class="flexCenter box overlay">
      <h3 style="text-align: center">Task Details</h3>

      <div class="taskName">
        <p>Task Name:</p>
        <img src="./assets/images/edit.png" id="edtTitle" onclick="editTitle(${item.id})" class="imgEdit" />
      </div>

      <textarea
          class="labelInput labelTry"

        style="height: auto; margin: 0px"
        disabled
      >${item.title}</textarea>

      <div class="taskName">
        <p style="font-weight: bold">Task Description:</p>
        <img src="./assets/images/edit.png" class="imgEdit" />
      </div>

      <textarea class="labelInput" id="descInput" disabled>${item.desc}</textarea>

      <div style="flex-direction: row; display: flex">
        <button  class="taskButtons" id="btnDone" onclick="markCompleted(${item.id})">Mark As Done</button>

        <button class="taskButtons" id="btnDelete" onclick="deleteItem(${item.id})">Delete</button>
        <button class="taskButtons" onclick="dataDialog.close()">Close</button>
      </div>`;
    }
  });
};

const descInput = document.getElementById("descInput");

const edtTitle = document.getElementById("edtTitle");

// Edit
function editTitle(id) {
  storedDataArr.forEach((item, index) => {
    if (item.id === id) {
      console.log("on");
      console.log(item);
      descInput.forEach((list, indexList) => {
        console.log(list);
        if (indexList === index) {
          console.log(list);
          console.log("on");
          list.removeAttribute("disabled");
        }
      });
    }
  });

  let storedString = JSON.stringify(storedDataArr);

  localStorage.setItem("Tasks", storedString);
}

const displayCardAll = document.querySelectorAll("#displayCard");
console.log(displayCardAll);

function deleteItem(id) {
  storedDataArr.forEach((item, index) => {
    if (item.id === id) {
      storedDataArr.splice(index, 1);
      location.reload();
    }
  });

  dataDialog.close();

  let storedString = JSON.stringify(storedDataArr);

  localStorage.setItem("Tasks", storedString);
}
