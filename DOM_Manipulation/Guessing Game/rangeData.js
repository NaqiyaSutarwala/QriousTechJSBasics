let newArray = [];

function setData() {
  let minMax = {
    min: document.getElementById("numOne").value,
    max: document.getElementById("numTwo").value,
  };
  newArray.push(minMax);
  let newString = JSON.stringify(newArray);
  localStorage.setItem("NumbersRange", newString);
}
