let newArray = [];

const min = document.getElementById("numOne").value;
const max = document.getElementById("numTwo").value;

function setData() {
  if (max < min) {
    alert("From should be less than to");
  } else {
    let minMax = {
      min: min,
      max: max,
    };
    newArray.push(minMax);
    let newString = JSON.stringify(newArray);
    localStorage.setItem("NumbersRange", newString);
    window.location.href =
      "game.html";
  }
}
