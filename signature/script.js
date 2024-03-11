let textColorPicker = document.querySelector(".text-color-picker");
let backgroundColorPicker = document.querySelector(".background-color-picker");
let optionsContainer = document.querySelector(".options-container");
let modalGetTitle = document.querySelector(".modal-get-title");

// Input Fields
let inputSearchTitle = document.querySelector(".input-search-title");
let inputUserData = document.querySelector(".input-user-data");
let inputDataDiv = document.querySelector(".input-data-div");
let inputTitle = document.querySelector(".input-title");

// Buttons
let btnClear = document.querySelector(".btn-clear");
let btnSave = document.querySelector(".btn-save");
let btnRetrieve = document.querySelector(".btn-retrieve");
let btnSearch = document.querySelector(".btn-search");
let btnCloseModal = document.querySelector(".img-close-modal");
let btnUpdate = document.querySelector(".btn-update");

// Global Variable
let fontColor = "#00000";
let backGroundColor = "#00000";
let fontSize = "28px";

// Color Changing Functionalities
textColorPicker.addEventListener("input", function () {
  fontColor = textColorPicker.value;
  inputUserData.style.color = fontColor;
});

backgroundColorPicker.addEventListener("input", function () {
  backGroundColor = backgroundColorPicker.value;
  inputUserData.style.backgroundColor = backGroundColor;
});

// On Load events
document.addEventListener("DOMContentLoaded", function () {
  textColorPicker.value = "#00000";
  backgroundColorPicker.value = "#00000";
});

//////////////////Toggle Classes/////////////
const toggleClasses = function () {
  btnUpdate.classList.toggle("hidden");
  btnSave.classList.toggle("hidden");
};

//////////////////// FontSize options///////////////////////////////
const fontSizeOptions = function (defaultValue = 28) {
  optionsContainer.innerHTML = "";
  for (let i = 1; i < 35; i = i + 3) {
    let html = `<option class=".font-size-option" ${
      i === defaultValue ? 'selected="true"' : ""
    } > ${i}px </option>`;
    optionsContainer.insertAdjacentHTML("beforeend", html);
  }

  let fontSizeOption = document.getElementsByTagName("option");
  let fontSizeArray = Array.from(fontSizeOption);

  fontSizeArray.forEach((html) => {
    html.addEventListener("click", function (e) {
      fontSize = e.target.value;
      inputUserData.style.fontSize = `${fontSize}`;
    });
  });
};

fontSizeOptions();

//////////// Display message Modal//////////////
const displayMessageModal = function (message) {
  let html = `
  <div class="modal-data">
     <h1> ${message}</h1>
  </div>`;
  modalGetTitle.innerHTML = "";
  modalGetTitle.insertAdjacentHTML("afterbegin", html);
  modalGetTitle.showModal();
  setTimeout(function () {
    modalGetTitle.close();
  }, 2000);
};

////////////////// Clear Button /////////////////
btnClear.addEventListener("click", function () {
  inputUserData.value = "";
  inputTitle.value = "";
  inputTitle.removeAttribute("disabled");
  textColorPicker.value = "#00000";
  backgroundColorPicker.value = "#00000";
  inputUserData.style.backgroundColor = "#FFFFFF";
});

let arraySignatures = [];

const checkEmpty = function (element) {
  if (element.value === "") {
    let html = `<div style="color: red"> Input data cannot be Empty </div>`;
    element.insertAdjacentHTML("afterend", html);
    return true;
  }
};

/////////////////// Download functionality ///////////////
function PrintDiv(div) {
  html2canvas(div, {
    onrendered: function (canvas) {
      var myImage = canvas.toDataURL();
      downloadURI(myImage, "download.png");
    },
  });
}

function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
}

////////////////////////Save and Download //////////////////////////
btnSave.addEventListener("click", function () {
  let titleFlag = true;

  if (checkEmpty(inputTitle)) return;
  if (checkEmpty(inputUserData)) return;

  let signatureObj = {
    title: inputTitle.value,
    data: inputUserData.value,
    fontSize,
    fontColor,
    backGroundColor,
  };

  arraySignatures.push(signatureObj);

  if (!localStorage.getItem("signatures")) {
    localStorage.setItem("signatures", JSON.stringify(arraySignatures));
    return;
  }

  const dataFromStorage = JSON.parse(localStorage.getItem("signatures"));
  dataFromStorage.forEach((item) => {
    if (item.title === signatureObj.title) {
      displayMessageModal("Title already exist");
      titleFlag = false;
    }
  });

  if (titleFlag) {
    dataFromStorage.push(signatureObj);
    localStorage.setItem("signatures", JSON.stringify(dataFromStorage));
    PrintDiv(inputDataDiv);
  }
});

//////////////////// Retrieve Data//////////////
btnRetrieve.addEventListener("click", function () {
  modalGetTitle.showModal();
});

//////////////////// Search Data//////////////////
btnSearch.addEventListener("click", function () {
  const dataFromStorage = JSON.parse(localStorage.getItem("signatures"));
  if (!dataFromStorage) return;

  let dataFound = dataFromStorage.find((item) => {
    return item.title === inputSearchTitle.value;
  });


  if (!dataFound) {
    displayMessageModal("Invalid Title");
    return;
  }
  modalGetTitle.close();
  inputTitle.value = dataFound.title;
  inputUserData.value = dataFound.data;
  inputUserData.style.color = dataFound.fontColor;
  inputUserData.style.backgroundColor = dataFound.backGroundColor;
  inputUserData.style.fontSize = `${dataFound.fontSize}`;
  textColorPicker.value = `${dataFound.fontColor}`;
  backgroundColorPicker.value = `${dataFound.backGroundColor}`;
  inputTitle.setAttribute("disabled", true);
  toggleClasses();
  fontSizeOptions(parseInt(dataFound.fontSize));
});

//////////////////// Update Data//////////////////
btnUpdate.addEventListener("click", function () {
  const dataFromStorage = JSON.parse(localStorage.getItem("signatures"));

  dataFromStorage.forEach((item, index) => {
    if (item.title === inputTitle.value) {
      item.data = inputUserData.value;
      item.fontSize = fontSize;
      item.fontColor = fontColor;
      item.backGroundColor = backGroundColor;
      dataFromStorage.splice(index, 1);
    }
  });


  let signatureObj = {
    title: inputTitle.value,
    data: inputUserData.value,
    fontSize,
    fontColor,
    backGroundColor,
  };

  dataFromStorage.push(signatureObj);
  localStorage.setItem("signatures", JSON.stringify(dataFromStorage));

  displayMessageModal("Update Success");
  toggleClasses();
});

// Closing Modal
btnCloseModal.addEventListener("click", function () {
  modalGetTitle.close();
});
