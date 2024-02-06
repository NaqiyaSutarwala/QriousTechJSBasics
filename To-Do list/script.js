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

// const completedOnClick = function (item, index) {
//   console.log();
//   if (item.status === "Pending") {
//     completedButton[index].classList.add("hiddenBtn");
//   } else {
//     completedButton[index].classList.add("visibleBtn");
//   }
// };

const displayInnerHtml = function (arrayDisplay) {
  arrayDisplay.forEach((item, index) => {
    document.getElementById(
      "mainDiv"
    ).innerHTML += `<div class="card displayCard" id="displayCard" onclick ="openDialog(${
      item.id
    })">
        <div class="displayHead">
            Title:
            <h2 class="displayTitle" id="displayTitle"> ${item.title}</h2> <br>
            <p class="displayTitle" id="displayTitle">Description: ${
              item.desc
            }</p>
        </div>
        <div class="displayHead">
            ${item.date} <br />
  
            <button class="completedButton ${
              item.status === "Pending" ? "hiddenBtn" : "visibleBtn"
            }" id="completedButton">Completed</button>
         </div>
       </div>
      </div>`;
  });
};

const storedData = localStorage.getItem("Tasks");
const storedDataArr = JSON.parse(storedData);

displayInnerHtml(storedDataArr);

// On Submit
btnSubmit.addEventListener("click", function () {
  if (
    inputTask.value.trim() !== "" &&
    inputTaskDesc.value.trim() !== "" &&
    inputDate.value.trim() !== ""
  ) {
    console.log(inputTask.value);

    const task = {
      id: id + 1,
      title: inputTask.value.trim(),
      desc: inputTaskDesc.value.trim(),
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
  } else if (inputTask.value.trim() === "") {
    document.getElementById("titleError").innerHTML = "Title is required**";
    document.getElementById("titleError").classList.remove("hidden");
    document.getElementById("titleError").classList.add("error");
  } else if (inputTaskDesc.value.trim() === "") {
    document.getElementById("descError").innerHTML =
      "Description is required**";
    document.getElementById("descError").classList.remove("hidden");
    document.getElementById("descError").classList.add("error");
  } else if (inputDate.value === "") {
    document.getElementById("dateError").innerHTML = "Date is required**";
    document.getElementById("dateError").classList.remove("hidden");
    document.getElementById("dateError").classList.add("error");
  }
});

// Display Data

const displayCard = document.getElementById("displayCard");

const completedButton = document.querySelectorAll("#completedButton");

// Mark as Done
const markCompleted = function (id) {
  storedDataArr.forEach((item, index) => {
    if (item.id === id) {
      completedButton.forEach((list, indexList) => {
        if (indexList === index) {
          list.classList.remove("hiddenBtn");
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
        <img src="./assets/images/edit.png" id="edtTitleImg" onclick="editTitle(${item.id})" class="imgEdit" style="justify-content:flex-end" />
        <img src="./assets/images/task-done.svg" id="edtDoneImg" onclick="editDone(${item.id})" class="imgEdit hidden" />
      </div>

      <textarea
          class="labelInput labelTry"
          id="textTitle"
        style="height: auto; margin: 0px"
        disabled
      >${item.title}</textarea>

      <div class="taskName">
        <p style="font-weight: bold">Task Description:</p>
        <img src="./assets/images/edit.png" id="edtDescImg" onclick="editDescTitle(${item.id})" class="imgEdit" style="justify-content:flex-end" />
        <img src="./assets/images/task-done.svg" id="edtDescDoneImg" onclick="editDescDone(${item.id})" class="imgEdit hidden" />
      </div>

      <textarea class="labelInput" id="descInput" disabled>${item.desc}</textarea>

      <div style="flex-direction: row; display: flex">
        <button  class="taskButtons" id="btnDone" onclick="markCompleted(${item.id})">Mark As Done</button>

        <button class="taskButtons" id="btnDelete" onclick="deleteItem(${item.id})">Delete</button>
        <button class="taskButtons" onclick="closeDialog()">Close</button>
      </div>`;
    }
  });
};

// Close Dialog
function closeDialog() {
  dataDialog.close();
  location.reload();
}

// To edit the data
const startEditing = function (edit, id) {
  storedDataArr.forEach((item) => {
    if (item.id === id) {
      edit.forEach((list) => {
        list.removeAttribute("disabled");
        list.focus();
      });
    }
  });
};

// Edit Title
function editTitle(id) {
  const edtTitleImg = document.getElementById("edtTitleImg");
  const edtDoneImg = document.getElementById("edtDoneImg");

  const textTitle = document.querySelectorAll("#textTitle");

  edtDoneImg.classList.toggle("hidden");
  edtTitleImg.classList.toggle("hidden");

  startEditing(textTitle, id);
}

function editDone(id) {
  const edtTitleImg = document.getElementById("edtTitleImg");
  const edtDoneImg = document.getElementById("edtDoneImg");
  const textTitle = document.querySelectorAll("#textTitle");

  edtDoneImg.classList.toggle("hidden");
  edtTitleImg.classList.toggle("hidden");

  storedDataArr.forEach((item, index) => {
    if (item.id === id) {
      textTitle.forEach((list) => {
        list.setAttribute("disabled", "true");
        storedDataArr[index].title = list.value;
      });
    }
  });
  let storedString = JSON.stringify(storedDataArr);

  localStorage.setItem("Tasks", storedString);
}

// Edit Desc
function editDescTitle(id) {
  const edtDescImg = document.getElementById("edtDescImg");
  const edtDescDoneImg = document.getElementById("edtDescDoneImg");

  const descInput = document.querySelectorAll("#descInput");

  edtDescDoneImg.classList.toggle("hidden");
  edtDescImg.classList.toggle("hidden");

  startEditing(descInput, id);
}

function editDescDone(id) {
  const edtDescImg = document.getElementById("edtDescImg");
  const edtDescDoneImg = document.getElementById("edtDescDoneImg");

  const descInput = document.querySelectorAll("#descInput");

  edtDescDoneImg.classList.toggle("hidden");
  edtDescImg.classList.toggle("hidden");

  storedDataArr.forEach((item, index) => {
    if (item.id === id) {
      descInput.forEach((list) => {
        list.setAttribute("disabled", "true");
        storedDataArr[index].desc = list.value;
      });
    }
  });

  let storedString = JSON.stringify(storedDataArr);

  localStorage.setItem("Tasks", storedString);
}

// Deleting item
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

const imgSortAscending = document.getElementById("imgSortAscending");
const imgSortDescending = document.getElementById("imgSortDescending");
const imgSortClear = document.getElementById("imgSortClear");

// Sorting Ascending
imgSortAscending.addEventListener("click", function () {
  imgSortAscending.classList.toggle("hidden");
  imgSortDescending.classList.toggle("hidden");

  let AscendingSortedArr = storedDataArr.sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });

  document.getElementById("mainDiv").innerHTML = "";

  displayInnerHtml(AscendingSortedArr);
});

//Sorting Descending

imgSortDescending.addEventListener("click", function () {
  imgSortClear.classList.toggle("hidden");
  imgSortDescending.classList.toggle("hidden");

  let DescendingSortedArr = storedDataArr.sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return 1;
    }
    if (titleA > titleB) {
      return -1;
    }
    return 0;
  });

  document.getElementById("mainDiv").innerHTML = "";

  displayInnerHtml(DescendingSortedArr);
});

// Clear Sorting
imgSortClear.addEventListener("click", function () {
  imgSortClear.classList.toggle("hidden");
  imgSortAscending.classList.toggle("hidden");

  document.getElementById("mainDiv").innerHTML = "";

  let clearSort = localStorage.getItem("Tasks");
  const clearSortArr = JSON.parse(clearSort);

  displayInnerHtml(clearSortArr);
});

// Searching
function searchInput() {
  const searchInput = document.getElementById("searchInput").value;

  const searchedArray = storedDataArr.filter((item) => {
    const ValueArr = Object.values(item);

    const searchedData = ValueArr.some(function (search) {
      const searchString = String(search);
      return searchString.includes(searchInput);
    });
    if (searchedData) return item;
  });

  if (searchedArray.length === 0) {
    console.log("Inhere");
    document.getElementById("mainDiv").innerHTML = "";
    const noData = document.getElementById("noData");
    noData.classList.remove("hidden");
  } else {
    document.getElementById("mainDiv").innerHTML = "";
    displayInnerHtml(searchedArray);
  }

  if (searchInput === "") {
    location.reload();
  }
}
