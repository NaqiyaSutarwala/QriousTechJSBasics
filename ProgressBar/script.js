let progressBarArrowsDiv = document.getElementById("progressBar-arrows-div");
let progressBarLabelsDiv = document.getElementById("progressBar-labels-div");
let allArrows = document.querySelectorAll(".progress-arrow");
let statusOptions = document.getElementById("status-options");
let allLabels = document.querySelectorAll(".labelStatus");

let pointedArrows = document.querySelectorAll(".pointed-arrow");

///////////////Customizing last Arrow////////////////
progressBarArrowsDiv.lastElementChild.lastElementChild.remove();
progressBarLabelsDiv.lastElementChild.previousElementSibling.classList.remove(
  "notFirstLabel"
);

//////////////////////////////////////////////////////////////////////

const removeClasses = function (index = 0) {
  allArrows[index].classList.remove("activeBackground");
  pointedArrows[index].classList.remove("activeBackground");
  allArrows[index].classList.remove("gradient-div-after");
  allArrows[0].classList.remove("gradient-div-before");
  allxLabels[index].classList.remove("textColor");
  allLabels[allLabels.length - 1].classList.remove("textColor");
};

console.log(allArrows);
statusOptions.addEventListener("change", function (e) {
  let data = statusOptions.options[statusOptions.selectedIndex].dataset.status;
  if (data === "0") {
    allArrows.forEach((_, index) => {
      removeClasses(index);
    });
    progressBarArrowsDiv.firstElementChild.classList.add("gradient-div-before");
    allLabels[0].classList.add("textColor");
    return;
  }
  allArrows.forEach((_, index) => {
    removeClasses(index);
    if (index < data) {
      allArrows[index].classList.add("activeBackground");
      pointedArrows[index].classList.add("activeBackground");
    }
    allLabels[data].classList.add("textColor");
    allArrows[data - 1].classList.add("gradient-div-after");
  });

  console.log(data);
});
