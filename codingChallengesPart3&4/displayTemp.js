let tempArray = [12, 5, -5, 0, 4];

const printForecast = (tempArray) => {
  let newArray = tempArray.map((item, index) => {
    return `..${item}\u00B0 in  ${index + 1} days `;
  });

  console.log("." + String(newArray).replaceAll(" ,", "."));

};

printForecast(tempArray);


const key = 3;
const obj = {
  Name1: "Naqiya",
  Name2: "Naqiya2",
  Name3: "Naqiya3",
  Name4: "Naqiya4",
}

console.log(obj[`Name${key}`])



