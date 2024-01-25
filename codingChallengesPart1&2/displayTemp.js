let tempArray = [12, 5, -5, 0, 4];

const printForecast = (tempArray) => {
  tempArray.map((item, index) => {
    console.log(`${item}\u00B0 in  ${index + 1} days `);
  });
};

printForecast(tempArray);
